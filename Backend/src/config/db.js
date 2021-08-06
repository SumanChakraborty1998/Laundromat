require("dotenv").config();

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.TUTORTOWN_DB_USERNAME}:${process.env.TUTORTOWN_DB_PASSWORD}@tutortown.gyn0g.mongodb.net/tutor_town?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
    );
};

module.exports = connect;
