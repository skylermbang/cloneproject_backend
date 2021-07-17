
const mongoose = require("mongoose");
const { Schema } = mongoose
const PostSchema = new Schema({

    postId: Number,
    userInfo: [{
        userEmail: String,
        firstName: String,
        profile: String,
    }],
    content: [{
        text: String,
        pictures: String,
        createdAt: Date
    }],

    comments: [{
        commentId: Number,
        writerInfo: [{ name: String, profile: String }],
        commentText: String,
        commentCreatedAt: Date
    }],

    like: [{
        likeCnt: Number,
        userList: String,
    }],


})

module.exports = mongoose.model('Post', PostSchema);
