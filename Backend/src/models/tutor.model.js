const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema(
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
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subject",
            required: false,
        },
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "place",
            required: false,
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
        },
        age: {
            type: Number,
            required: false,
        },
        gender: {
            type: String,
            required: false,
        },

        aadhaar_number: {
            type: String,
            required: false,
        },
        aadhaar_image: {
            type: String,
            required: false,
        },
        profile_photo: {
            type: String,
            required: false,
        },
        graduation_percentage: {
            type: Number,
            required: false,
        },
        experience: {
            type: Number,
            required: false,
        },
        linkedin: {
            type: String,
            required: false,
        },
        skills: [
            {
                type: String,
                required: false,
            },
        ],
        reason: {
            type: String,
            required: false,
        },
        is_completed: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    { timestamps: true, versionKey: false },
);

const Tutor = mongoose.model("tutor", tutorSchema);
module.exports = Tutor;
