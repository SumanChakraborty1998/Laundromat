const express = require("express");
const router = express.Router();

const Booking = require("../models/booking.model");
const Student = require("../models/student.model");

router.get("/", async (req, res) => {
    let bookings = await Booking.find()
        // .populate("student")
        .populate("tutor")
        .lean()
        .exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: bookings });
});

router.post("/new", async (req, res) => {
    let student = await Student.findOne({ _id: req.body.student })
        .lean()
        .exec();

    let update_student = await Student.findByIdAndUpdate(
        student._id,
        {
            free_credit: student.free_credit - 1,
        },
        { new: true },
    );
    let booking = await Booking.create(req.body);

    let bookings = await Booking.find({ student: req.body.student });
    return res
        .status(201)
        .json({ data: { booking, update_student, bookings } });
});

module.exports = router;
