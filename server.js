var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 8080));

var file = './json/data.json';
var sqlData = [];

app.get('/', function (req, res) {
  res.send('<h1>test</h1>');
});

app.listen(app.get('port'), function () {
  console.log('Node app running on port', app.get('port'));
});
