import express from "express";
const app = express();
const PORT = 3030;

app.get("/me",(req,res) =>{
    res.send("server is running ,Ismail")
})

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})