const express = require("express")
const router = express.Router()
const Post = require("../schemas/posts")
const Comment = require("../schemas/comments")
const mongoose = require("mongoose")




router.get("/", async (req, res) => {
    console.log(" Getting all the post API")
    const list = await Post.find({}).sort({ postId: -1 }).populate("commentId")
    res.status(200).json(list)
})
// router.post("/test/posts", async (req, res) => {
//     const posts = await Post.find({})
//     const postId = posts.length + 1
//     const { content, userInfo, } = req.body
//     // userInfo 
//     // token에서 가져옴
//     console.log(content)
//     const like = [{ likeCnt: 0, userList: [{}] }]
//     await Post.create({ postId, content, userInfo, like, })
//     res.status(201).send({ postId: postId })
// })

router.post("/", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo } = req.body

    //user Info search by userId from token -> 
    const like = { likeCnt: 0, userList: [{}] }
    const _id = new mongoose.Types.ObjectId()
    await Post.create({ postId, content, userInfo, like, _id })
    res.status(201).send({ postId: postId })
})

router.delete("/:postId", async (req, res) => {
    const { postId } = req.params
    console.log(postId)
    await Post.findOneAndRemove({ postId })
    res.status(201).send("Post successfully deleted")
})

router.put("/:postId", async (req, res) => {
    const { postId } = req.params
    console.log(postId)
    const { content } = req.body
    console.log(content, "here line 5000000")
    await Post.findOneAndUpdate({ postId }, { content })

    res.status(201).send("Post successfully updated")
})

module.exports = router