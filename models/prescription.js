const mongoose = require('mongoose');


const prescriptionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },

  symptoms: {
    type: String,
    required: true
  },

  prescription: {
    type: String,
    required: true
  },

  comment: {
    type: String
  },

  billing: {
    totalAmount: {
      type: Number,
      required: true
    },
    receivedAmount: {
      type: Number,
      required: true
    },
    dueAmount: {
      type: Number,
      required: true
    },
    billingDate: {
      type: Date,
      default: Date.now,
      required: true
    }
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
prescriptionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Compile the schema into a model
const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
