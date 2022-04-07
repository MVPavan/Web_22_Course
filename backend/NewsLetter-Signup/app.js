const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))


app.listen(3000, function (){
    console.log("Server is running on port 3000!");
});

let signup_html = __dirname+"/signup.html";
let success_html = __dirname+"/success.html";
let failure_html = __dirname+"/failure.html";

app.get("/signup",function (req, res){
    res.sendFile(signup_html);
});

app.post("/signup", function (req, res){
   console.log(req.body);
});