// to see , how a real world project is deployed in docker
const express= require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>now in root folder, folder root</h1>")
});


app.listen(8000, ()=> {

console.log("nandha app is running at 8000");

});