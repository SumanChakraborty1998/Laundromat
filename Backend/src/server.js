const express = require("express");
const connect = require("./config/db");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 3001;

const router = require("./router");
const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server);

//chat
io.on("connection", (socket) => {
  console.log("we have new user");

  socket.on('join', ({tutorName, tutorChat}, callback) => {
      console.log(tutorName,tutorChat)

      const error = true
       if ( error) {
           callback({error:'error'})
       }
  })
  socket.on("disconect", () => {
    console.log("user has left");
  });
});

app.use(router);

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

  server.listen(PORT, async () => {
    console.log(`Warriors are onboarded at ${PORT}...`);
  });
};

module.exports = start;
