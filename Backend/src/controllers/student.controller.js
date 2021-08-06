const express = require("express");
const router = express.Router();

const Student = require("../models/student.model");

router.get("/", async (req, res) => {
    let students = await Student.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: students });
});

router.post("/new", async (req, res) => {
    let student = await Student.create(req.body);
    return res.status(201).json({ data: student });
});

module.exports = router;
