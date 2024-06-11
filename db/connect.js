const mongoose = require("mongoose");

// require('dotenv').config();
// const uri = process.env.DB_URL;

const connectDB = (uri) => {
    console.log("connect db");
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
};

module.exports = connectDB;