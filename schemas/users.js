const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({

    userId: Number,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    profilePicture: { data: Buffer, contentType: String }

})


export default mongoose.model('User', UserSchema);