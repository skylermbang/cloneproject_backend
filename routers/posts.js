const express = require("express")
const router = express.Router()
const Post = require("../schemas/posts")
const Comment = require("../schemas/comments")
const mongoose = require("mongoose")




router.get("/", async (req, res) => {

    const { postId } = await Post.find({})
    const list = await Post.find({}).sort(postId).map(post => {
        return { post: post, comment: Comment.find({ postId: post.postId }) }
    })
    res.status(201).json(list)

})
router.post("/test/posts", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo, } = req.body
    // userInfo 
    // token에서 가져옴
    const like = [{ likeCnt: 0, userList: [{}] }]
    await Post.create({ postId, content, userInfo, like, })
    res.status(201).send("Post successfully created")
})

router.post("/", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo } = req.body

    //user Info search by userId from token -> 
    const like = [{ likeCnt: 0, userList: [{}] }]
    const _id = new mongoose.Types.ObjectId()
    await Post.create({ postId, content, userInfo, like, _id })
    res.status(201).send("Post successfully created")
})

router.delete("/:postId", async (req, res) => {
    const { postId } = req.params
    console.log(postId)
    await Post.findOneAndRemove({ postId })
    res.status(201).send("Post successfully deleted")
})

router.put("/:postId", async (req, res) => {
    const { postId } = req.params
    const { comments } = req.body
    console.log(postId, "postId")
    console.log(comments, "comments")
    await Post.findOneAndUpdate(postId, { comments })
    res.status(201).send("Post successfully updated")
})

module.exports = router