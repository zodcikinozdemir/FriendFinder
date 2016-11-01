// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});