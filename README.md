
Angular SPA Starter Project
------------------

See it live at http://djohnsonkc-angular-spa-starter.herokuapp.com

This app is a starter project for creating an SPA (single-page app) using AngularJS. I have included a nice 'scaleUp' animation for view changes to make things more interesting as well as a variety of performance optimization tips and features. Node.js is used to serve the SPA and is also used to provide other server-side features such as Gzip compression and enables client-side browser caching of assets to clients making requests to the app. 

Hopefully, this project will give you a good start using AngularJS to create SPA's, but with additional help in wrestling with all of the other things that go into making a performant, production-ready web app.


Node.js
-------------------

The Node.js compression module will provide compression of files to the client. 

Use this site to verify that you Gzip compression enabled: http://www.gziptest.com/

We will also use Node.js to provide a maxAge response header so that assets can be cached by the client.

var one_day = 86400000; //or 24 * 60 * 60 * 1000;
app.use(express.static(__dirname + '/public', { maxAge: one_day }));

Angular Animation
------------------

Here's a great article on a simple scaleUp page transition, which is used in this project.

http://www.sitepoint.com/adding-css-animations-angularjs-applications/


YSlow
------------------
Using the YSlow extension for Google Chrome, this site currently gets an "A" grade at 99%! Thank you, Grunt, express and compression :-)


Google Developers PageSpeed Insights
------------------
This is also helpful for optimizing a site.

https://developers.google.com/speed/pagespeed/insights/



Local Environment Setup
------------------
Use "npm install" to read the package.json file and install all of dev dependencies into your local project workspace

$ npm install


Grunt
-------------------

Grunt is used to concat, minify and uglify assets including css, JavaScript, images and HTML. Ideally, serve one minified and compressed JavaScript file and one minified CSS file to the client. 

Use the "grunt" command to create concatenated, minified and uglified versions of the assets 

$ grunt 

You can also run specific grunt tasks:

$ grunt htmlmin - just minify the the html files

$ grunt cssmin - just minify the css files

$ grunt concat

$ grunt imagemin

etc...

See the Gruntfile.js file for more info


After running grunt, start the app

$ node app




