const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false },
);

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;
