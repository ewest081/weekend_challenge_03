/**
 * Created by lizwestberg on 1/9/16.
 */

var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(bodyParser.json());
app.use('/', index);

module.exports = app;