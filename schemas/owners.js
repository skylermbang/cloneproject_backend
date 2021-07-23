const mongoose = require("mongoose")
const { Schema } = mongoose

const OwnerSchema = new Schema({

    _id: Schema.Types.ObjectId,
    ownerId: Number,
    name: String,


})


module.exports = mongoose.model('Owner', OwnerSchema)