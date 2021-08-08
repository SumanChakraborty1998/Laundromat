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

router.get("/:student", async (req, res) => {
    let bookings = await Booking.find({ student: req.params.student })
        // .populate("student")
        .populate("tutor")
        .populate("subject")
        .populate("place")
        .lean()
        .exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: bookings });
});

router.get("/tutors/:tutor", async (req, res) => {
    // let tutor = await Tutor.findOne({
    //     $and: [{ email: req.body.email }, { password: req.body.password }],
    // })
    //     .lean()
    //     .exec();

    // let students = await Student.find({
    //     allocated_tutors: { $in: [tutor._id] },
    // })
    //     .lean()
    //     .exec();

    let bookings = await Booking.find({ tutor: req.params.tutor })
        .populate("student")
        .populate("place")
        .populate("subject")
        .lean()
        .exec();

    // console.log(students);

    // console.log(allocated_students);
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
