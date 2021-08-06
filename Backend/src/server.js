const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const placesController = require("./controllers/place.controller");
const subjectsController = require("./controllers/subject.controller");
const tutorsController = require("./controllers/tutor.controller");
const pricesController = require("./controllers/price.controller");
const studentsController = require("./controllers/student.controller");
const bookingsController = require("./controllers/booking.controller");

app.use("/places", placesController);
app.use("/subjects", subjectsController);
app.use("/tutors", tutorsController);
app.use("/prices", pricesController);
app.use("/students", studentsController);
app.use("/bookings", bookingsController);

const start = async () => {
    await connect();

    app.listen(3001, async () => {
        console.log("Warriors are onboarded at 3001...");
    });
};

module.exports = start;
