const express = require("express")
const router = express.Router()
const User = require("../schemas/users");
const hash = require("object-hash")
const jwt = require("jsonwebtoken")

router.post("/login", async (req, res) => {

    const { userId } = req.body
    const password = hash(req.body.password)
    const user = await User.findOne({ email: userId, password })
    console.log(user)

    if (user) {
        const token = jwt.sign({ userId: user.Id }, "walaby")
        return res.status(201).send({ token })
    }
    res.status(201).send("Wrong Id or Password")
})

router.post("/signup", async (req, res) => {

    const { email } = req.body
    const isExist = await User.findOne({ email: email })
    if (isExist) {
        res.status(201).send("email already registered")
        return
    }
    const password = hash(req.body.password)

    const { firstName, lastName, gender, profilePicture } = req.body

    const allUser = await User.find({})
    const userId = allUser.length + 1
    await User.create({ firstName, lastName, email, gender, profilePicture, password, userId })
    res.status(201).send(" signup successful ")

})

router.get('/email', async (req, res) => {
    const { email } = req.query // take email in a query

    if (email) { // if email exist
        const emailCheck = await User.findOne({ email: req.query.email })
        if (emailCheck) {
            const emailExist = true
            return res.status(200).send({ emailExist })
        } else {
            res.status(200).send("you can register this email")
        }
    }
})

module.exports = router