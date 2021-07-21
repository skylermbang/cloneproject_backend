const express = require("express")
const router = express.Router()
const Comment = require("../schemas/comments");
const Post = require("../schemas/posts");
const mongoose = require("mongoose")
const authMiddleware = require("../middlewares/auth-middleware")


router.post('/', async (req, res) => {
    // comments writer info get from token
    const { commentText, postId } = req.body
    const _id = new mongoose.Types.ObjectId()

    const user = res.locals.user
    const firstName = user.firstName
    const lastName = user.lastName
    const profilePic = user.profilePic

    try {
        const allComments = await Comment.find({})
        const commentId = allComments.length + 1
        const newComment = await Comment.create({ _id, postId, commentId, commentText, firstName, lastName });
        const post = await Post.findOne({ postId })
        if (post) {
            post.comments.push(newComment._id)
            post.save()
            //await Post.findOneAndUpdate(postId, { comments })
        }
        res.status(201).send({ commentId });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put('/:commentId', async (req, res) => {
    console.log(" changing comment API")
    const { commentText } = req.body
    const { commentId } = req.params

    try {
        await Comment.findOneAndUpdate({ commentId }, { commentText })
        res.status(201).send("comment  successfully updated")
    } catch (err) {
        res.status(500).send();
    }
})


router.delete('/:commentId', async (req, res) => {
    console.log(" deleting comment API")
    const { commentId } = req.params
    console.log(commentId)
    try {

        await Comment.findOneAndRemove({ commentId })
        res.status(201).send("comment successfully deleted")
    } catch (err) {
        res.status(500).send();
    }

});

module.exports = router