const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.listen(3000, function (){
    console.log("Server is listening on port 3000!");
});

app.get("/", function (req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res){

});