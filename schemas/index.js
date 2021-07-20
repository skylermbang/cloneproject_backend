const mongoose = require("mongoose");

const connect = () => {
    mongoose
        //"mongodb://test:test@13.124.107.195:27017"
        .connect("mongodb://localhost/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            ignoreUndefined: true,
        })
        .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
    console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
