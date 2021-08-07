const express = require("express");
const router = express.Router();

const Tutor = require("../models/tutor.model");
const Place = require("../models/place.model");
const Subject = require("../models/subject.model");
const Student = require("../models/student.model");

router.get("/", async (req, res) => {
    let tutors = await Tutor.find().lean().exec();
    return res.status(200).json({ data: tutors });
});

//For normal register part.
router.post("/new", async (req, res) => {
    let no_of_entries = Object.keys(req.body).length;
    let body = { ...req.body, is_completed: false };

    if (no_of_entries == 16) {
        body = { ...body, is_completed: true };
    }
    let tutor = await Tutor.create(body);
    return res.status(201).json({ data: tutor });
});

//For login of Tutor
router.post("/auth/login", async (req, res) => {
    let tutor = await Tutor.findOne({
        $and: [{ email: req.body.email }, { password: req.body.password }],

    });

    })
        .lean()
        .exec();

    let students = await Student.find({
        allocated_tutors: { $in: [tutor._id] },
    })
        .lean()
        .exec();

    // console.log(students);

    // console.log(allocated_students);
    return res.status(201).json({ data: { tutor, students } });
});

//Find Tutors according to location and subject
router.get("/:location/:subject", async (req, res) => {
    let location = req.params.location.toLowerCase();
    let subject = req.params.subject.toLowerCase();

    let place_found = await Place.find({ name: location }).lean().exec();
    let subject_found = await Subject.find({ name: subject }).lean().exec();

    // console.log(place_found, subject_found);

    let tutors = await Tutor.find({
        $and: [
            { subject: subject_found[0]._id },
            { location: place_found[0]._id },
            { is_completed: true },
        ],
    })
        .lean()
        .exec();

    return res
        .status(201)
        .json({ data: { place_found, subject_found, tutors } });
});

//Getting details of individual tutors
router.get("/tutor_data/individual/:id", async function (req, res) {
    let id = req.params.id;
    let tutor = await Tutor.findOne({ _id: id }).lean().exec();
    return res.status(201).json({ data: tutor });
});

module.exports = router;
