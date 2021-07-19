const mongoose = require("mongoose")
const { Schema } = mongoose
const CommentSchema = new Schema({
    postId: {
        type: Number,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        required: true
    },
    commentId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', CommentSchema)