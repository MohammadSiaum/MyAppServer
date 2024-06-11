const mongoose = require('mongoose');

const billingOverview = new mongoose.Schema({

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },

  totalEarning: {
    type: Number,
    required: true,
  },

  totalDue: {
    type: Number,
    required: true
  },

  totalDrafPatient: {
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


billingOverview.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});


const BillingOverview = mongoose.model('BillingOverview', billingOverview);

module.exports = PatientOverview;
