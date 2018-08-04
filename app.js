var express = require('express');
var app = express();

app.set("view engine","ejs")

app.use(express.static(__dirname + '/assets'));

app.get("/",function(req,res) {
  res.render("main");
})

app.get("/about",function(req,res) {
  res.render("about");
})

app.listen(3000,function(err) {
  if (!err) {
    console.log("listening to the server");
  }
});
