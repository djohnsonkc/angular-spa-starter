var express = require('express');
var compression = require('compression');

var app = express();

//use maxAge to enable caching by the client
app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));

//this will allow assets requested from the server to be compressed (images, scripts, css) 
app.use(compression()); 

app.get('/', function (req, res) {
    res.sendfile('public/index.html');
});

var port = process.env.PORT || 3000; // Use the port that Heroku provides or default to 5000
app.listen(port, function () {
    //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
    console.log("Express server listening on port " + port);
});