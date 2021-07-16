const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const connect = require("./schemas");
connect();

//checking mongoose db connection
const mongoose = require("mongoose");
// app.get("/mongodb", async (req, res) => {
//     await mongoose.connect("mongodb://localhost/clone", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: true,
//         useCreateIndex: true,
//     });


//     const { Schema } = mongoose;
//     const blogsSchema = new Schema({
//         postId: {
//             type: Number,
//             required: true,
//             unique: true,
//         },
//     });

//     let blogs = mongoose.model("blogs", blogsSchema);
//     await blogs.create({
//         postId: 1,
//     });


// res.send("ok");
// });


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})