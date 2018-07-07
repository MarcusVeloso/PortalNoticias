var express = require('express');
var consign = require('consign');
//var dbConnection = require('../../config/dbConnection');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

// INCLUI O DIRETORIO DENTRO DO APP
consign()
    .include('app/routes')
    //INFORMA A EXTENSÃO PARA QUE SEJA SELECIONADO APENAS O ARQUIVO
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;