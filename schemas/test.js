const mongoose = require("mongoose");
const { Schema } = mongoose
const testSchema = new Schema({
    test: { type: String },
    test99: [{ name: String, phone: Number }],
    testId: Number
})

module.exports = mongoose.model("test", testSchema);