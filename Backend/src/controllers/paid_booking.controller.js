const express = require("express");
const router = express.Router();

const PaidBooking = require("../models/paid_booking.model");
const Student = require("../models/student.model");

router.get("/", async (req, res) => {
    let paid_bookings = await PaidBooking.find()
        // .populate("student")
        .populate("tutor")
        .lean()
        .exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: paid_bookings });
});

router.post("/new", async (req, res) => {
    // let student = await Student.findOne({ _id: req.body.student })
    //     .lean()
    //     .exec();
    // let update_student = await Student.findByIdAndUpdate(
    //     student._id,
    //     {
    //         free_credit: student.free_credit - 1,
    //     },
    //     { new: true },
    // );
    let paid_booking = await PaidBooking.create(req.body);
    return res.status(201).json({ data: paid_booking });
});

module.exports = router;
