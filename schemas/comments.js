const mongoose = require("mongoose")

const commentSchema = new Schema({
    commentId: [Number],
    commentText: [String]
})


module.exports = mongoose.model('Comment', CommentSchema)