var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
      console.log( "questo è il risultato del get" );
      res.end( "questo è il risultato del get" );
})

var server = app.listen(8080, function () {
   //var host = server.address().address
   //var port = server.address().port
   console.log("Listening at port 8080");
       //"Example app listening at http://%s:%s", host, port)
})