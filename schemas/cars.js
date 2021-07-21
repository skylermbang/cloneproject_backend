const mongoose = require("mongoose")
const { Schema } = mongoose

const CarSchema = new Schema({
    _id: Schema.Types.ObjectId,
    carId: Number,
    brand: String,
    model: String,
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    }

})
module.exports = mongoose.model('Car', CarSchema)

