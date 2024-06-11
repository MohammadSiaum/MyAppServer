const mongoose = require('mongoose');

const helpAndSupport = new mongoose.Schema({

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },

  fullName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
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

// Pre-save hook to update the updatedAt field
helpAndSupport.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});


const HelpAndSupport = mongoose.model('HelpAndSupport', helpAndSupport);

module.exports = HelpAndSupport;
