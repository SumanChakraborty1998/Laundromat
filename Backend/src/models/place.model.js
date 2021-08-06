const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false },
);

const Place = mongoose.model("place", placeSchema);
module.exports = Place;
