/* eslint-env node */
var path = require('path');
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
    var app = new EmberAddon(defaults, {
        sassOptions: {
            includePaths: [
                'node_modules/bootstrap-daterangepicker',
                'node_modules/@centerforopenscience/osf-style/sass',
                'node_modules/bootstrap-sass/assets/stylesheets',
                'tests/dummy/app/components',
            ]
        },
        // FIXME
        // FIXME Will this affect downstream consumers (when they build their apps)?
        // FIXME
        // This is really for building the application. It's a hack so we can use the dummy app inside the OSF to test development.
        // It's for production builds, and we may want to comment it out when needed. Usage:
        //   ember build --output-path ../osf.io/website/static/ember/ --environment=production --watch
        //////// Uncomment the lines below to test!
        // fingerprint: {
        //     prepend: 'static/ember/'
        // },

        'ember-cli-babel': {
            includePolyfill: true
        },

        'ember-bootstrap': {
            bootstrapVersion: 3,
            importBootstrapFont: true,
            importBootstrapCSS: false
        },
    });

     // app.import('bower_components/dropzone/dist/dropzone.js');
    app.import({
        development: path.join('node_modules', 'dropzone/dist/dropzone.css'),
        production: path.join('node_modules', 'dropzone/dist/min/dropzone.min.css')
    });

    // app.import(path.join('node_modules', 'jquery-tags-input/src/jquery-tags-input.js'));
    app.import(path.join('node_modules', 'bootstrap-daterangepicker/daterangepicker.js'));


    // app.import(path.join(app.bowerDirectory, 'c3/c3.js'));
    // app.import(path.join(app.bowerDirectory, 'd3/d3.js'));

    app.import('vendor/assets/ember-osf.css');
    app.import({
        test: path.join('node_modules', 'ember/ember-template-compiler.js')
    });
    // app.import(path.join(app.bowerDirectory, 'jquery-mockjax/dist/jquery.mockjax.js'));
    return app.toTree();
};
