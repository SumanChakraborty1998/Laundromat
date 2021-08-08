const express = require("express");
const router = express.Router();

const Price = require("../models/price.model");
const Place = require("../models/place.model");

router.get("/", async (req, res) => {
    let prices = await Price.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: prices });
});

router.get("/price_details/:place/:subject", async (req, res) => {
    let place = req.params.place.toLowerCase();
    let subject = req.params.subject.toLowerCase();

    let place_found = await Place.find({ name: place }).lean().exec();
    let price = await Price.find({ place: place_found[0]._id }).lean().exec();

    let all_price = await price[0];
    let sub = await all_price[subject];
    // console.log(place_found[0]);
    // console.log(all_price);
    // console.log(sub);
    return res.status(200).json([place_found[0], all_price, sub]);
});

router.post("/new", async (req, res) => {
    let price = await Price.create(req.body);
    return res.status(201).json({ data: price });
});

module.exports = router;
