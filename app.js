const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");
const Test = require("./schemas/test")


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connect = require("./schemas");
connect();


const getTime = require("./utils/moment")
// testing mongoose connection and make test table
// app.get("/mongodb", async (req, res) => {

//     const test = "abc"
//     const date = await get(){ getTime(this)
// } 
//  Test.create({ test })
//     res.send("connected")
// })

// // testing mongoose connection and make test table
app.get("/testRead", async (req, res) => {
    const allTest = await Test.find({})

    res.json(allTest)
})

app.post("/testCreate", async (req, res) => {
    const { test } = req.body
    const { test99 } = req.body
    const testcase = await Test.find({})
    const testId = testcase.length + 1
    const testCase = await Test.create({ test, test99, testId })

    res.json(testCase)
})

app.put("/testUpdate/:testId", async (req, res) => {

    const { testId } = req.params
    const { test } = req.body
    const { test99 } = req.body
    const update = await Test.findOneAndUpdate({ testId }, { test, test99 })
    res.status(201).send("Test case successfully Updated")
})

app.delete("/testDelete/:testId", async (req, res) => {

    const { testId } = req.params
    await Test.findOneAndDelete({ testId })
    res.status(201).send("Test case successfully Deleted")
})
// app.get('/test', async (req, res) => {
//     const result = await Test.find({})
//     res.send(result)
// })
// app.post('/test', async (req, res) => {
//     const { test1 } = req.body
//     const result = await Test.create({ test1 })
//     res.send(result)
// })
const Post = require("./schemas/posts");

app.get("/api/posts", async (req, res) => {

    const { postId } = await Post.find({})
    const list = await Post.find({}).sort(postId)
    res.status(201).json(list)
})

app.post("/api/test/posts", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo, } = req.body
    const like = [{ likeCnt: 0, userList: [{}] }]
    await Post.create({ postId, content, userInfo, like, })
    res.status(201).send("Post successfully created")
})

app.post("/api/posts", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo, like, comments } = req.body
    //const like = [{ likeCnt: 0, userList: [{}] }]
    await Post.create({ postId, content, userInfo, like, })
    res.status(201).send("Post successfully created")
})

app.delete("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params
    console.log(postId)
    await Post.findOneAndRemove({ postId })
    res.status(201).send("Post successfully deleted")
})

app.put("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params
    const { comments } = req.body
    console.log(postId, "postId")
    console.log(comments, "comments")
    await Post.findOneAndUpdate(postId, { comments })
    res.status(201).send("Post successfully updated")
})

// app.use('/api/post' , postsRouter )
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
