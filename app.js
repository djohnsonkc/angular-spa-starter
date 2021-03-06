var express = require('express')
var compression = require('compression')

var app = express()

app.use(compression())

//app.use(express.static(__dirname + '/public')); //dont cache while testing app
//use maxAge to enable caching by the client
var one_day = 86400000 //or 24 * 60 * 60 * 1000
var thirty_days = 2592000000
app.use(express.static(__dirname + '/public', { maxAge: thirty_days })) //using 30 days gets a better YSlow score


app.get('/', function (req, res) {
	//serve the minified file
    res.sendFile(__dirname + '/public/html/dist/index.html')
})

var port = process.env.PORT || 3000 // Use the port that Heroku provides or default to 5000
app.listen(port, function () {
    //console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env)
    console.log("Express server listening on port " + port)
})