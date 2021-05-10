const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'))

var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword",
      database: "mydb"
    });
/*
Api structure:
register
login
update profile
---
add book
update book
del book
---
add authors
update authors
del authors
---
add review
update review
del review
---
*/


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