require("dotenv").config();
const connectDB = require("./db/connect");
const Doctor = require("./models/doctor");

const DoctorJson = require("./doctors.json");

const run = async () => {
    try {
        await connectDB(process.env.DB_URL);
        await Doctor.create(DoctorJson);
        console.log("success");

    } catch (error) {
        console.log(error);
    }
}

run();