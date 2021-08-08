const express = require("express");
const connect = require("./config/db");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

//chat
// customer support
io.on("connection", (socket) => {
    socket.on("message", ({ name, message }) => {
        io.emit("message", {
            name,
            message,
        });
    });
});

const placesController = require("./controllers/place.controller");
const subjectsController = require("./controllers/subject.controller");
const tutorsController = require("./controllers/tutor.controller");
const pricesController = require("./controllers/price.controller");
const studentsController = require("./controllers/student.controller");
const bookingsController = require("./controllers/booking.controller");
const paidBookingsController = require("./controllers/paid_booking.controller");

app.use("/places", placesController);
app.use("/subjects", subjectsController);
app.use("/tutors", tutorsController);
app.use("/prices", pricesController);
app.use("/students", studentsController);
app.use("/bookings", bookingsController);
app.use("/paid_bookings", paidBookingsController);

const start = async () => {
    await connect();

    server.listen(PORT, async () => {
        console.log(`Warriors are onboarded at ${PORT}...`);
    });
};

module.exports = start;
