const mongoose = require("mongoose");

const paidBookingSchema = new mongoose.Schema(
    {
        tutor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tutor",
            required: true,
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true,
        },
        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "place",
            required: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subject",
            required: true,
        },
    },
    { timestamps: true, versionKey: false },
);

const PaidBooking = mongoose.model("paid_booking", paidBookingSchema);
module.exports = PaidBooking;
