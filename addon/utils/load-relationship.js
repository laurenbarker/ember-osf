import Ember from 'ember';

export const ArrayPromiseProxy = Ember.ArrayProxy.extend(Ember.PromiseProxyMixin);

export function loadRelation(model, relationship) {
    if (model.hasOwnProperty('content') && !model.query) {
        // model was loaded via a relationship, the proxy object
        // does not properly proxy .query so we unwrap it here
        model = model.get('content')
    }

    if (!model) return new Ember.RSVP.Promise(() => null);

    let results = Ember.A();
    let promise = loadAll(model, relationship, results).then(() => results);
    return ArrayPromiseProxy.create({promise});
}

export default function loadAll(model, relationship, dest, options = {}) {
    var page = options.page || 1;
    var query = {
        'page[size]': 10,
        page: page
    };
    query = Ember.merge(query, options || {});
    Ember.set(model, 'query-params', query);

    return model.queryHasMany(relationship, query).then(results => {
        dest.pushObjects(results.toArray());
        if (results.meta) {
            var total = results.meta.total;
            var pageSize = results.meta.per_page;
            var remaining = total - (page * pageSize);
            if (remaining > 0) {
                query.page = page + 1;
                query['page[size]'] = pageSize;
                return loadAll(model, relationship, dest, query);
            }
        }
    });
}
