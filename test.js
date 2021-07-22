
const express = require("express")
const app = express()

const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const connect = require("./schemas");
connect();



io.on('connection', function (socket) {
    console.log('connected');
    socket.on('potato', function (data) {
        console.log(data)
        io.emit('tomato', data)
    })
});

app.get('/chat', function (요청, 응답) {
    응답.render('chat.ejs')
});
http.listen(8080, function () {
    console.log('listening on 8080')
});

