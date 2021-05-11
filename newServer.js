const express = require('express');
const app = express();
const session = require('express-session');
const mysql = require('mysql');
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
db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

app.post('/register', function (req, res) {
    console.log("register");
    console.log(req.session);
    if (req.session.loggedIn) {
        console.log("id sessione: " + req.session.userId);
        res.send("already logged")
        res.end();
        return;
    }
    let username = req.body.username;
    let email = req.body.email;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        res.send("invalid email")
        return;
    }
    //controllo username
    //controllo email
    let sql = 'SELECT 1 FROM users WHERE users.username = ? OR users.email = ? LIMIT 1';
    db.query(sql, [username, email], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('already exist');
            return;
            //result = JSON.parse(JSON.stringify(results))[0];
            //console.log(result);
        }
        let post = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        };
        sql = 'INSERT INTO users SET ?';/*
        db.query(sql, post, (err, res) => {
            if (err) throw err;
            console.log(res);
        });*/
        res.send("register succesful");

    });
});

app.post('/login', function (req, res) {
    console.log("login");
    console.log(req.session);
    let username = req.body.username;
    let password = req.body.password;
    let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    if (req.session.loggedIn) {
        console.log("id sessione: " + req.session.userId);
        res.send("already logged")
        return;
    } else if (username && password) {
        db.query(sql, [username, password], (err, results) => {
            if (results.length > 0) {
                result = JSON.parse(JSON.stringify(results))[0];
                console.log(result);
                //console.log(result[0].rowdDataPacket.id);
                req.session.userId = result.id
                req.session.loggedIn = true;
                console.log("id sessione appena creato: " + req.session.userId);
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            if (err) throw err;
            res.send('login successful');
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy(err => {
        if (err) throw err;
    })
    res.clearCookie("sid");
})

var server = app.listen(8080, function () {
    //var host = server.address().address
    //var port = server.address().port
    console.log("Listening at port 8080");
    //"Example app listening at http://%s:%s", host, port)
})