const ejs = require("express");
const app = ejs();

app.get("/", function(req, res){
    res.send("Hello world");
});

app.listen(3000);