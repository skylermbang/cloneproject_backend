const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");

/* testing  */
const fs = require("fs")

const { Schema } = mongoose;

const multer = require("multer")



app.get('/', (req, res) => {
    res.send('Hello World!')
})

const connect = require("./schemas");
connect();


var ItemSchema = new Schema({
    img:
        { data: Buffer, contentType: String }
})
var Item = mongoose.model('Img', ItemSchema)


app.use(multer({
    dest: "./uploads",
    rename: function (fieldname, filename) {
        return filename;
    },
}));

app.post("/api/photo", function (req, res) {
    var newItem = new Schema();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = "image / png";
    newItem.save();
});
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
