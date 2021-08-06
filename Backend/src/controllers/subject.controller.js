const express = require("express");
const router = express.Router();

const Subject = require("../models/subject.model");

router.get("/", async (req, res) => {
    let subjects = await Subject.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: subjects });
});

router.post("/new", async (req, res) => {
    let subject = await Subject.create(req.body);
    return res.status(201).json({ data: subject });
});

module.exports = router;
