
const mongoose = require("mongoose");
const { Schema } = mongoose
const getCurrentDate = require("../utils/moment")
const PostSchema = new Schema({

    postId: Number,
    userInfo: [{

        firstName: String,
        lastName: String,
        profilePic: String,
    }],
    content: [{
        text: String,
        picture: [{ picture: String }],
        createdAt: { type: Date, default: Date.now }
    }],

    // comments: [{
    //     commentId: Number,
    //     userInfo: [{ firstName: String, lastName: String, profilePic: String }],
    //     commentText: String,
    //     createdAt: { type: Date, default: Date.now }
    // }],

    comments: {
        type: Schema.Types.ObjectId,
        ref: 'comments',
        required: true
    },

    like: [{
        likeCnt: Number,
        userList: [{ firstName: String, lastName: String }]
    }],


})

module.exports = mongoose.model('Post', PostSchema);
