const express = require('express');
const app = express();
const session = require('express-session');
const fs = require("fs");
const mysql = require('mysql');
const ejs = require("ejs");
const time = (1000 * 60 * 60 * 2);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use(session({
      name: "sid",
      resave: false,
      saveUninitialized: false,
      secret: "s3cr3t!",
      cookie: {
            maxAge: time,
            sameSite: true
      }
}))
app.engine('html', require('ejs').renderFile);

var db = mysql.createConnection({
      host: "localhost",
      user: "bookreview",
      password: "eKl1Etvl4eNnpMJ7",
      database: "bookreview"
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
per aggiunta ed eliminazione faccio controllo se admin nel server api
*/
/*
db.connect(function (err) {
      if (err) {
            console.error('error connecting: ' + err.stack);
            return;
      }
      console.log('connected as id ' + db.threadId);
});*/
app.get('/', function (req, res) {
      console.log("user id: ");
      console.log(req.session);
      if(req.session.userId){
            res.send("logged sessionid: " + req.session.userId);
      } else {
            res.render('login.html');
      }
});
app.get('/script', function (req, res){
      const java = fs.readFileSync("./views/script.js");
      res.setHeader("Content-Type", "text/javascript");
      res.write(java);
      res.end;
});

app.post('/register', function (req, res) {
      console.log("register");
      let sql = 'INSERT INTO users SET ?';
      /*
      let post = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
      };
      */
      db.query(sql, post, (err, res) => {
            if (err) throw err;
            console.log('success');
            console.log(res);
      });
      res.send("register succesful");
});

app.post('/login', function (req, res) {
      console.log("login");
      console.log(req.body);
      console.log(req.session);
      console.log(req.session.userId);
      if (req.session.userId) {
            console.log("questo id sessione: " + req.session.userId);
            res.send("already logged")
            res.end();
      }
      let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
      let username = req.body.username;
      let password = req.body.password;
      if (username && password) {
            db.query(sql, [username, password], (err, results) => {
                  if (results.length > 0) {
                        result = JSON.parse(JSON.stringify(results))[0];
                        console.log(result);
                        //console.log(result[0].rowdDataPacket.id);
                        req.session.userId = result.id
                        req.session.loggedin = true;
                        //req.session.username = result.id;
                        console.log("id sessione appena creato: " + req.session.userId);
                        return res.redirect("/");
                  } else {
                        res.send('Incorrect Username and/or Password!');
                  }
                  res.end();
                  if (err) throw err;
                  console.log('success');
            });
      } else {
            res.send('Please enter Username and Password!');
            res.end();
      }
});

app.post('/logout', function (req, res) {
      req.session.destroy(err => {
            if (err) throw err;
      })
      res.clearCookie("sid");
})
app.get('/req', function (req, res) {
      res.send("req: "+ req.session.userId);
      console.log("wooooooo");
});
/*
app.get('/users', function (req, res) {
      console.log("questo è il risultato del get");
      res.end("questo è il risultato del get");
})
*/
var server = app.listen(8080, function () {
      //var host = server.address().address
      //var port = server.address().port
      console.log("Listening at port 8080");
      //"Example app listening at http://%s:%s", host, port)
})