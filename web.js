var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
    fs.readFile('index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

