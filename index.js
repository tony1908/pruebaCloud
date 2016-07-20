var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.json({ message: "hello" });
});


app.use(express.static('public'));
var puerto = process.env.PORT || 8080

var server = app.listen(puerto, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});