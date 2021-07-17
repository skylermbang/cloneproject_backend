const mongoose = require("mongoose")
const { Schema } = mongoose

const chatSchema = new Schema({

    nickname: String,
    message: String,
    date: String,
    order: Number,
})


export default mongoose.model('Chat', ChatSchema);