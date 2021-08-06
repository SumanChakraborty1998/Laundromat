const express = require("express");
const router = express.Router();

const Tutor = require("../models/tutor.model");

router.get("/", async (req, res) => {
    let tutors = await Tutor.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: tutors });
});

router.post("/new", async (req, res) => {
    let tutor = await Tutor.create(req.body);
    return res.status(201).json({ data: tutor });
});

module.exports = router;
