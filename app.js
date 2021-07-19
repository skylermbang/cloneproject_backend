const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");
const Test = require("./schemas/test")

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


const { Comment } = require("./../schemas/comments")

// CREATE comments ---------------------------------------
app.post('/api/comments', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        await res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// UPDATE comments ---------------------------------------
app.put('/api/comments/:commentId', (req, res, next) => {
    Comment.update({ commentId: req.params.commentid }, { comment: req.body.comment })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err)
            next(err)
        })
})

// delete comments ---------------------------------------
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.commentId); // find one and delete
        if (!user) res.status(404).send(); // if user is not received
        res.send(user);
    } catch (err) { // if error occurs
        res.status(500).send(); // internal server error messege
    }
});

// email duplication check ---------------------------------------
app.get('/api/email', async (req, res) => {
    const { email } = req.query // take email in a query

    if (email) { // if email exist
        const emailCheck = await User.findOne({ where: { email: req.query.email } })
        if (emailCheck) {
            const emailExist = true
            res.status(200).send({ emailExist })
            return
        }

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