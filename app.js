
/**
 * Aooelle des différentes librairies nécessaire à l'app
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var routing = require('./routes/route');
routing(app);

app.listen(8080);