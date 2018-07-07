var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

// INCLUI O DIRETORIO DENTRO DO APP
consign().include('app/routes').into(app);

module.exports = app;