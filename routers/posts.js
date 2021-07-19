const express = require("express")
const router = express.Router()
const Post = require("../schemas/posts")
const Comment = require("../schemas/comments")



router.get("/", async (req, res) => {

    const { postId } = await Post.find({})
    const list = await Post.find({}).sort(postId).map(post => {
        return { post: post, comment: Comment.find({ postId: post.postId }) }
    })
    res.status(201).json(list)

})




router.post("/api/test/posts", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo, } = req.body
    // userInfo 
    // token에서 가져옴
    const like = [{ likeCnt: 0, userList: [{}] }]
    await Post.create({ postId, content, userInfo, like, })
    res.status(201).send("Post successfully created")
})

router.post("/api/posts", async (req, res) => {
    const posts = await Post.find({})
    const postId = posts.length + 1
    const { content, userInfo, like, comments } = req.body
    //const like = [{ likeCnt: 0, userList: [{}] }]
    await Post.create({ postId, content, userInfo, like, })
    res.status(201).send("Post successfully created")
})

router.delete("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params
    console.log(postId)
    await Post.findOneAndRemove({ postId })
    res.status(201).send("Post successfully deleted")
})

router.put("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params
    const { comments } = req.body
    console.log(postId, "postId")
    console.log(comments, "comments")
    await Post.findOneAndUpdate(postId, { comments })
    res.status(201).send("Post successfully updated")
})

module.exports = router