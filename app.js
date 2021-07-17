const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");
const Test = require("./schemas/test")

// /* testing  */
// const fs = require("fs")
//const { Schema } = mongoose;
// const multer = require("multer")



const connect = require("./schemas");
connect();



// testing mongoose connection and make test table
app.get("/mongodb", async (req, res) => {
    const test99 = [{ name: "skyler", phone: 1 }]
    const test = "abc"
    await Test.create({ test, test99 })
    res.send("connected")
})

app.get("/mongodb2", async (req, res) => {

    const result = await Test.find({})
    const test99 = result[0].test99[0]["name"]
    res.send(result)
})

app.get('/test', async (req, res) => {

    const result = await Test.find({})
    res.send(result)
})


app.post('/test', async (req, res) => {

    const { test1 } = req.body
    const result = await Test.create({ test1 })
    res.send(result)
})





// app.get("/mongodb", async (req, res) => {


//     const imgSchema = new Schema({
//         imgId: Number,
//         img: { data: Buffer, contentType: String }
//     })
//     const blogsSchema = new Schema({
//         postId: {
//             type: Number,
//             required: true,
//             unique: true,
//         },
//     });

//     const 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
