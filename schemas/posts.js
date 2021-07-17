
const mongoose = require("mongoose");
const { Schema } = mongoose
const PostSchema = new Schema({

    postId: Number,
    userInfo: [{

        firstName: String,
        lastName: String,
        profilePic: String,
    }],
    content: [{
        text: String,
        picture: String,
        createdAt: Date
    }],

    comments: [{
        commentId: Number,
        // q
        userInfo: [{ firstName: String, lastName: String, profilePic: String }],
        commentText: String,
        createdAt: Date
    }],

    like: [{
        likeCnt: Number,
        userList: [{ firstName: String, lastName: String }]
    }],


})

module.exports = mongoose.model('Post', PostSchema);
