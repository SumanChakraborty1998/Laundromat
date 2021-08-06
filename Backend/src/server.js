const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const placesController = require("./controllers/place.controller");
const subjectsController = require("./controllers/subject.controller");
const tutorsController = require("./controllers/tutor.controller");

app.use("/places", placesController);
app.use("/subjects", subjectsController);
app.use("/tutors", tutorsController);

const start = async () => {
    await connect();

    app.listen(3001, async () => {
        console.log("Warriors are onboarded at 3001...");
    });
};

module.exports = start;
