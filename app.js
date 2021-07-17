const express = require('express')
const app = express()
const port = 8080

/* testing  */
const fs = require("fs")
const mongoose = require("mongoose")
const { Schema } = mongoose;



app.get('/', (req, res) => {
    res.send('Hello World!')
})

const connect = require("./schemas");
connect();


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
})