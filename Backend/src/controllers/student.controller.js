const express = require("express");
const router = express.Router();

const Student = require("../models/student.model");
const Tutor = require("../models/tutor.model");
const Booking = require("../models/booking.model");

router.get("/", async (req, res) => {
    let students = await Student.find().lean().exec();
    // console.log("Reached", places);
    return res.status(200).json({ data: students });
});

//Signup
router.post("/new", async (req, res) => {
    let student = await Student.create(req.body);
    return res.status(201).json({ data: student });
});

//Login
router.post("/auth/login", async (req, res) => {
    let booked_tutors = [];

    let student = await Student.findOne({
        $and: [{ email: req.body.email }, { password: req.body.password }],
    })
        .populate("place")
        .lean()
        .exec();

    // let tutors = await Tutor.find().lean().exec();
    // let tutor_id_list = tutors.map((tutor) => tutor._id.toString());
    // console.log(student);
    // let allocated_tutors = student?.allocated_tutors.map((tutor) =>
    //     tutor.toString(),
    // );

    // for (let i = 0; i < allocated_tutors.length; i++) {
    //     if (tutor_id_list.includes(allocated_tutors[i])) {
    //         booked_tutors.push(tutors[i]);
    //     }
    // }

    // console.log(typeof student._id);
    let bookings = await Booking.find({ student: student._id })
        .populate("tutor")
        .populate("place")
        .populate("subject")
        .lean()
        .exec();

    // console.log(bookings.length);
    // student = {
    //     ...student,
    //     free_credit: student.free_credit - bookings.length,
    // };

    return res.status(201).json({ data: { student, bookings } });
});

module.exports = router;
