
const mongoose = require("mongoose");
const { Schema } = mongoose
const fs = require("fs") // filesystem?
const multer = require("multer") // middleware used for uploading files 

const PostSchema = new Schema({

    postId: [Number],
    userInfo: [{
        userEmail: String,
        firstName: String,
        profile: { data: Buffer, contentType: String },
    }],
    content: [{
        text: String,
        pictures: { data: Buffer, contentType: String },
        createdAt: Date
    }],

    comments: [{
        commentId: [Number],
        commentText: String,
        commentCreatedAt: Date
    }],

    like: [{
        likeCnt: [Number],
        userList: String,
    }],


    // var schema = new Schema({
    //     img: { data: Buffer, contentType: String }
    // });

    // // our model
    // var A = mongoose.model('A', schema);

    // mongoose.connection.on('open', function () {
    //   console.error('mongo is open');

    //   // empty the collection
    //   A.remove(function (err) {
    //     if (err) throw err;

    //     console.error('removed old docs');

    //     // store an img in binary in mongo
    //     var a = new A;
    //     a.img.data = fs.readFileSync(imgPath);
    //     a.img.contentType = 'image/png';
    //     a.save(function (err, a) {
    //       if (err) throw err;
    //       console.error('saved img to mongo');
    //     }
})
export default mongoose.model('Post', PostSchema);