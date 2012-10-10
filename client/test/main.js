require.config({
        
    baseUrl: '/src/js',

    enforceDefine: true,
    
    paths: {

        jquery: 'lib/jquery-1.8.0',
        underscore: 'lib/underscore-1.3.3',
        backbone: 'lib/backbone-0.9.2',
        handlebars: 'lib/handlebars-1.0.0.beta.6',

        text: 'lib/text-2.0.3',

        jasmine: '../../test/lib/jasmine-1.2.0/jasmine',
        jasmineHtml: '../../test/lib/jasmine-1.2.0/jasmine-html',
        
        tests: '../../test/tests'

    },

    shim: {

        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'handlebars': {
            exports: 'Handlebars'
        },

        'jasmine': {
            exports: 'jasmine'
        },

        'jasmineHtml': {
            deps: ['jasmine'],
            exports: 'jasmine.HtmlReporter'
        }

    }

});
    
define([
    'backbone',
    'jquery',
    'jasmine',
    'jasmineHtml',
    'tests'
], function (
    Backbone,
    $,
    jasmine
) {

    var jasmineEnv = jasmine.getEnv(),
        htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.updateInterval = 250;
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    $(function () {
        $('.version').html(jasmineEnv.versionString());
        jasmineEnv.execute();
    });
  
});