const mongoose = require("mongoose")

const CommentSchema = new Schema({
    postId: Number,
    profile: String,
    commentId: Number,
    firstName: String,
    lastName: String,
    commentText: String,
    createdAt: Date
})

module.exports = mongoose.model('Comment', CommentSchema)