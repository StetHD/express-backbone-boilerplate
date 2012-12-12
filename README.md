# Node Backbone Carousel

A small project I used to figure out how to wire up a simple Node/ExpressJS based JS dev environment.

The app can be started via the appropriate `./start` script.

## Dependencies

 * [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/)
 * [Docco](http://jashkenas.github.com/docco/)
 * [CasperJS](http://casperjs.org/)
 * [Compass](http://compass-style.org/)
 * [jasmine-node](https://github.com/mhevery/jasmine-node)

NOTE: I haven't sorted out Docco for Windows yet.

## Client

 * Can be accessed via `http://localhost:3000/client/`

[RequireJS](http://requirejs.org/) is used for file and module loading. [Backbone.js](http://backbonejs.org/) is the client-side MVC framework. [Handlebars](http://handlebarsjs.com/) is used for client-side templating. [Compass](http://compass-style.org/) is used for CSS authoring, and is started as part of the start script.

## Unit tests

Both client and server unit tests can be run via the appropriate `./run-tests` script. JUnit XML is output to `./_junitxml', and be used in CI tools like Jenkins.

### Client

 * Can be run in the browser via `http://localhost:3000/client/test/`
 * Can also be run headless via the appropriate `./client/bin/run-tests` script

[Jasmine](http://pivotal.github.com/jasmine/) is used for testing the JS. [CasperJS](http://casperjs.org/) is used to drive the tests headless via [PhantomJS](http://phantomjs.org/). JUnit XML is output to `./_junitxml/client`.

### Server

 * Can be run via the appropriate `./server/bin/run-tests` script

[jasmine-node](https://github.com/mhevery/jasmine-node) is used for testing the Node server JS. JUnit XML is output to `./_junitxml/server`.

## Docs

 * Can be generated via the appropriate `./client/bin/generate-docs` script
 * Can be accessed via `http://localhost:3000/client/docs`

[Docco](http://jashkenas.github.com/docco/) is used to generate the client-side docs. A basic index.html file is also generated via Node as part of the script.
