const express = require("express");
const router = express.Router();

const Place = require("../models/place.model");

router.get("/", async (req, res) => {
    let places = await Place.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: places });
});

router.post("/new", async (req, res) => {
    let place = await Place.create(req.body);
    return res.status(201).json({ data: place });
});

module.exports = router;
