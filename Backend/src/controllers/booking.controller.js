const express = require("express");
const router = express.Router();

const Booking = require("../models/booking.model");

router.get("/", async (req, res) => {
    let bookings = await Booking.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: bookings });
});

router.post("/new", async (req, res) => {
    let booking = await Booking.create(req.body);
    return res.status(201).json({ data: booking });
});

module.exports = router;
