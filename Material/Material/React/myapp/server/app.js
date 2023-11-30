const { application } = require("express");
let expres = require("express");

let myApp = expres()

let someData = require("./fahad");
myApp.use(expres.static("server/build"))
myApp.get("/some",(req,res)=>{
    console.log("hellow G");
    res.end("hello G")
})
someData.gamica();
myApp.listen(6051,()=>{
    console.log("server chal paring");
});