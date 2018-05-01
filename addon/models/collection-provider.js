import DS from 'ember-data';
import { computed } from '@ember/object';

import OsfModel from 'ember-osf/models/osf-model';

export default OsfModel.extend({
    name: DS.attr('fixstring'),
    description: DS.attr('fixstring'),
    domain: DS.attr('string'),
    domainRedirectEnabled: DS.attr('boolean'),
    example: DS.attr('fixstring'),
    advisoryBoard: DS.attr('string'),
    emailSupport: DS.attr('fixstring'),
    subjectsAcceptable: DS.attr(),
    footerLinks: DS.attr('string'),
    allowSubmissions: DS.attr('boolean'),
    additionalProviders: DS.attr(),
    facebookAppId: DS.attr('number'),

    // Relationships
    taxonomies: DS.hasMany('taxonomy'),
    highlightedTaxonomies: DS.hasMany('taxonomy'),
    // projects: DS.hasMany('node', { inverse: 'provider', async: true }),
    licensesAcceptable: DS.hasMany('license', { inverse: null }),

    hasHighlightedSubjects: computed.alias('links.relationships.highlighted_taxonomies.links.related.meta.has_highlighted_subjects'),
});
