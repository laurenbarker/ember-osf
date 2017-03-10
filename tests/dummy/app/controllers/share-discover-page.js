import Ember from 'ember';

let filterQueryParams = ['provider', 'subject', 'tags', 'sources', 'publishers', 'funders', 'institutions', 'organizations', 'language', 'contributors', 'type'];

export default Ember.Controller.extend({
    contributors: '',
    detailRoute: 'nodes.detail',
    discoverHeader: 'Demonstration of discover-page component',
    end: '',
    i18n: Ember.inject.service(),
    institutions: '',
    filterMap: {
        providers: 'sources',
        subjects: 'subjects'
    },
    filterReplace: {
        'Open Science Framework': 'OSF',
        'Cognitive Sciences ePrint Archive': 'Cogprints',
        OSF: 'OSF',
        'Research Papers in Economics': 'RePEc'
    },
    funders: '',
    language: '',
    lockedParams: {types: 'preprint'},
    organizations: '',
    page: 1,
    provider: '',
    publishers: '',
    q: '',
    queryParams:  Ember.computed(function() {
        let allParams = ['q', 'start', 'end', 'sort', 'page'];
        allParams.push(...filterQueryParams);
        return allParams;
    }),
    showActiveFilters: true,
    sort: '',
    sources: '',
    start: '',
    subject: '',
    tags: '',
    type: '',
});

