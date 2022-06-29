var express = require('express');
const { request } = require('http');
var path=require('path');
const { title } = require('process');
var router = express.Router();
var mysql=require('../database/db');

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
  //res.sendFile(path.resolve("public/home.html"))
//});
// router.get('/login', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
//   res.sendFile(path.resolve("public/login.html"))
// });
// router.get('/signup', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
//   res.sendFile(path.resolve("public/signup.html"))
// });
// router.get('/contactus', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
//   res.sendFile(path.resolve("public/contactus.html"))
// });

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
  res.render('index', {title:"Embeded Java Scripts",name:"Ramya"});
});

router.get('/fbposts', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
  var posts = [
    {title:"HBD", message:"Happy Birth day"},
    {title:"Casual", message:"How are u?"},
    {title:"Anouncement", message:"Bahubali releasing now"},
    {title:"Greetings", message:"Have a nice day!"},
    {title:"Events", message:"Half saree event"}
  ]
  res.render('index', {title:"Facebook posts",posts:posts});
});

router.post('/selectqry', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
var regno = req.body.reg;
mysql.getConnection((err, connection) => {
      if(err) throw err;
connection.query('SELECT * from student WHERE reg_no='+regno, (err, rows) => {
          connection.release(); 
           if(err) throw err;
           res.render('datadisplay', {rows:rows,title:"Student Details"});
           //res.send(rows);
       });
  });
});

router.get('/regform', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send("<h2 align=center style=color:blue>Hello This is express developed by Ramya</h2>");
  res.sendFile(path.resolve("./public/db_html.html"));
});


// router.post('/loginsubmit', function(req, res, next) {
//   var output = "<table border=2px, align=center><tr><td> Reg num:" + req.body.rnum+"</td></tr>"+"<tr><td> name:" + req.body.name+"</td></tr>"
//                +"<tr><td> Father Name:" + req.body.fname+"</td></tr>"+
//                "<tr><td> Gender:" + req.body.m+"</td></tr>"+
//                "<tr><td> Date:" + req.body.date+"</td></tr>"+
//                "<tr><td> Language:" + req.body.lan+"</td></tr>"+
//                "<tr><td> Address:" + req.body.message+"</td></tr></table>"
//   res.send(output);
// });

module.exports = router;

