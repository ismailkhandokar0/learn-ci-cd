import express from "express";
import sum from "./sum.js"
const app = express();
const PORT = 3030;


app.get("/me",async(req,res) =>{
    res.send("server is running ,Ismail")
})

app.get("/sum/:a/:b",async(req,res) =>{
    const {a,b} = req.params;
    const result = sum(parseInt(a),parseInt(b));
    res.send(`sum of ${a} and ${b} is ${result}`);
})

app.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})