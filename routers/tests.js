const express = require("express")
const router = express.Router()
const Test = require("../schemas/test");

router.get("/read", async (req, res) => {
    const allTest = await Test.find({})

    res.json(allTest)
})
router.post("/create", async (req, res) => {
    const { test } = req.body
    const { test99 } = req.body
    const testcase = await Test.find({})
    const testId = testcase.length + 1
    const testCase = await Test.create({ test, test99, testId })

    res.json(testCase)
})
router.put("/update/:testId", async (req, res) => {

    const { testId } = req.params
    const { test } = req.body
    const { test99 } = req.body
    const update = await Test.findOneAndUpdate({ testId }, { test, test99 })
    res.status(201).send("Test case successfully Updated")
})
router.delete("/delete/:testId", async (req, res) => {

    const { testId } = req.params
    await Test.findOneAndDelete({ testId })
    res.status(201).send("Test case successfully Deleted")
})




module.exports = router