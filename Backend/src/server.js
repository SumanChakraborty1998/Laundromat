const express = require("express");
const connect = require("./config/db");
const socketio = require("socket.io");
const http = require("http");
const { adduser, removeuser, getuser, getuserinroom } = require("./users");

const PORT = process.env.PORT || 3001;

const router = require("./router");
const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server);

//chat
io.on("connection", (socket) => {
  socket.on("join", ({ tutorName, tutorChat }, callback) => {
    const { error, user } = adduser({ id: socket.id, tutorName, tutorChat });

    //if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: ` welcome to tutortown ${tutorName}`,
    });
    // socket.broadcast
    //   .to(user.tutorChat)
    //   .emit("message", { user: "admin", text: `${tutorName} has joined` });

    // socket.join(user.tutorChat);
    //callback();
  });

  socket.on("sendmessage", (message, callback) => {
    const user = getuser(socket.id);

    io.to(user.tutorChat).emit("message", {
      user: user.tutorName,
      text: message,
    });

    callback();
  });
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
