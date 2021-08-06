const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: false,
            minLength: 10,
            maxLength: 10,
        },
        email: {
            type: String,
            required: true,
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "place",
            required: false,
        },
        currently_reading: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
        },
        profile_photo: {
            type: String,
            required: false,
        },
        allocated_tutors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "tutor",
                required: false,
            },
        ],
        free_credit: {
            type: String,
            required: false,
            default: 3,
        },
    },
    { timestamps: true, versionKey: false },
);

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
