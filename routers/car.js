const express = require("express");
//const { Mongoose } = require("mongoose");
const mongoose = require("mongoose")
const router = express.Router()
const Car = require("../schemas/cars");
const Owner = require('../schemas/owners')

router.get("/noPopulate", async (req, res) => {
    const allCar = await Car.find({})
    res.json(allCar)
})
router.get("/populate", async (req, res) => {
    const allCar = await Car.find({}).populate("ownerId")
    res.json(allCar)
})
router.post("/createCar", async (req, res) => {
    const cars = await Car.find({})
    const carId = cars.length + 1
    const { brand, model } = req.body
    const owners = await Owner.find({})
    const ownerId = owners[0]._id
    const _id = new mongoose.Types.ObjectId()
    const testCase = await Car.create({ brand, model, ownerId, _id })
    res.send("ok")
})

router.post("/createOwner", async (req, res) => {

    const { ownerId, name } = req.body
    const _id = new mongoose.Types.ObjectId()
    const newOwner = await Owner.create({ ownerId, name, _id })
    res.send("ok")
})

module.exports = router