const mongoose = require("mongoose")
const { Schema } = mongoose
const CommentSchema = new Schema({
    postId: Number,
    profilePic: String,
    commentId: Number,
    firstName: String,
    lastName: String,
    commentText: String,
    createdAt: Date
})

module.exports = mongoose.model('Comment', CommentSchema)