const express  = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");
const User = require("../models/user");
const mongoose = require('mongoose');

const cors = require("cors");
const app = express();
const connectDB = require("../db/connect");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("dotenv").config();




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const getAllDoctors = async (req, res) => {
//     const query = {};
//     const result = await Doctor.find(query);

//     // console.log(result);
//     res.status(200).json(result);

// }
// const {getAllDoctors} = require("../controllers/doctors");
// router.route("/").get(getAllDoctors);

// users and doctors


router.get('/', async(req, res) => {
    const query = {};
    const users = await User.find(query);

    res.status(200).json(users);
});

router.get('/user', async(req, res) => {
    const { _id, email} = req.body;
    const query = { _id };
    const user = await User.findOne(query);

    res.status(200).json(user);
});

// router.post('/add-user', async(req, res) => {
//     const { _id, email} = req.body;
//     const query = { _id };
//     const user = await User.findOne(query);


//     res.status(200).json(user);
// });

router.post('/add-doctor', async(req, res) => {
    console.log(req.body);
    const {
        _id,
        image,
        medicalName,
        degrees,
        registrationNo,
        dateOfBirth,
        specialty,
        gender,
        religion,
        presentAddress,
        permanentAddress
      } = req.body;

      
      try {
        const newDoctor = new Doctor({
          userId: new mongoose.Types.ObjectId(_id),
          image,
          medicalName,
          degrees,
          registrationNo,
          dateOfBirth,
          specialty,
          gender,
          religion,
          presentAddress,
          permanentAddress,
        });
    
        const savedDoctor = await newDoctor.save();
        res.status(200).json(savedDoctor);

      } catch (error) {
        console.error('Error creating doctor:', error);
        res.status(500).send('Error creating doctor');
      }

    // const query = { _id };
    // const user = await User.findOne(query);
    // const doctor = new User({  });
    // res.status(200).json(user);


});

router.delete('/delete-user', async(req, res) => {
    const { _id, email} = req.body;
    const query = { _id };
    const result = await User.deleteOne(query);

    res.status(200).json(result);
});






module.exports = router;

