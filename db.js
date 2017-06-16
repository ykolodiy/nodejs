var mysql = require('mysql');

var con = mysql.createConnection({
  host: "fdb5.biz.nf",
  user: "2118291_drupal",
  password: "Comrade20"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


