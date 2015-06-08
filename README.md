
Angular SPA Template
------------------
Using Grunt to concat, minify and uglify assets including css, JavaScript, images and HTML. Ideally, serve one minified and compressed JavaScript file and one minified CSS file to the client. We will also set the maxAge so that these assets can be cached by the client.

The Node.js compression module will provide compression of files to the client.


Local Environment Setup
------------------
Use "npm install" to read the package.json file and install all of dev dependencies

$ npm install


Grunt
-------------------
Using Grunt to concat and minify css and scripts

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




