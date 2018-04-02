/* global pym */
import Ember from 'ember';
import layout from './template';
import config from 'ember-get-config';

/**
 * @module ember-osf
 * @submodule components
 */

/**
 * Render the provided url in an iframe via MFR
 *
 * Sample usage:
 * ```handlebars
 * {{file-renderer
 *   download=model.links.download
 *     width="800" height="1000" allowfullscreen=true}}
 * ```
 * @class file-renderer
 */
export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        this.set('pymParent', new pym.Parent('mfrIframe', '', {}));
    },

    layout,
    download: null,
    width: '100%',
    height: '100%',
    allowfullscreen: true,
    version: null,
    mfrUrl: Ember.computed('download', 'version', function() {
        let download = this.get('download') + '?direct&mode=render&initialWidth=766';
        if (this.get('version')) {
            download += '&version=' + this.get('version');
        }
        return config.OSF.renderUrl + '?url=' + encodeURIComponent(download);
    }),
    actions: {
        showHypothesis() {
            this.get('pymParent').sendMessage('showHypothesis');
        },
        hideHypothesis() {
            this.get('pymParent').sendMessage('hideHypothesis');
        }
    }
});
