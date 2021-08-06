const express = require("express");
const router = express.Router();

const Price = require("../models/price.model");

router.get("/", async (req, res) => {
    let prices = await Price.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: prices });
});

router.post("/new", async (req, res) => {
    let price = await Price.create(req.body);
    return res.status(201).json({ data: price });
});

module.exports = router;
