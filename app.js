//jshint esversion:6 
const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();
//add my ejs template here and then install it

var items=[];  //pushing every single item req in the array
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function (req, res) {
   let day=date();
    res.render("list",{kindofDay:day,newListItems:items});


});
// here we got poat req send buy the user😊😊
app.post("/",function(req,res){
    var item= req.body.newItem;
    items.push(item);
    res.redirect("/");
 });


app.listen(3000, function () {
    console.log("Server started on post 3000");
});
