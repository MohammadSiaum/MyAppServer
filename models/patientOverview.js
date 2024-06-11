const mongoose = require('mongoose');

const patientOverview = new mongoose.Schema({

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },

  totalPatient: {
    type: Number,
    required: true,
  },

  malePatient: {
    type: Number,
    required: true
  },

  femalePatient: {
    type: Number,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


patientOverview.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});


const PatientOverview = mongoose.model('PatientOverview', patientOverview);

module.exports = PatientOverview;
