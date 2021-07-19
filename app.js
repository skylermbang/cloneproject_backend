const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");


// routers
const postsRouter = require("./routers/posts")
const testsRouter = require("./routers/tests")
const indexRouter = require("./routers/index")
const commentsRouter = require("./routers/comments")


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connect = require("./schemas");
connect();




app.use('/api/posts', postsRouter)
app.use('/test', testsRouter)
app.use('/api/', indexRouter)
app.use('/api/comments', commentsRouter)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})