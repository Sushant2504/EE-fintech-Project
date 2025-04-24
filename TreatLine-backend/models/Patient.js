const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Patient schema
const patientSchema = new Schema({
  // Full name of the patient
  name: {
    type: String,
    required: true,
    trim: true
  },
  
  //password of the patient
  password: {
    type: String,
    required: true
  },
  
  // Contact number (e.g., mobile number)
  phone: {
    type: String,
    required: function() {
      // Phone is required only if the age is 18 or above
      return this.age >= 18;
    },
    unique: true,  // Ensures that the phone number is unique
  },
  // Email address of the patient
  email: {
    type: String,
    required: function() {
      // Email is required only if the age is 18 or above
      return this.age >= 18;
    },
    unique: true,
  },
  // Age of the patient
  age: {
    type: Number,
    required: true,
    min: 0  // Age can't be negative
  },
  // Gender of the patient
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  // Address of the patient
  address: {
    type: String,
    required: true,
    trim: true
  },
  // Medical history in plain text (could be encrypted or stored in a secure format)
  medicalHistory: {
    type: String,
    default: ''
  },
  // Emergency contact information (phone number of a relative or friend)
  emergencyContact: {
    name: {
      type: String,
    },
    phone: {
      type: String,
    }
  },
  // Link to the Aadhaar document (Cloudinary URL)
  aadhaarDocumentLink: {
    type: String,
  },
  // Any allergies the patient has (optional)
  allergies: {
    type: String,
    default: ''
  },
  // List of doctors associated with the patient (e.g., family doctors, specialists)
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'  // Reference to the Doctor model
  }],
  // Date of birth (optional, useful for age calculation and other purposes)
  dateOfBirth: {
    type: Date,
    required: true
  },

  // References to booking documents
  booking_ref: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment'
  },
  // Family members associated with the patient's account (for family account management)
  familyMembers: [{
    name: {
      type: String,
      required: true
    },
    relation: {
      type: String,
      required: true,
      enum: ['Spouse', 'Child', 'Parent', 'Sibling', 'Other']
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,

    },
    dateOfBirth: {
      type: Date
    }
  }],

  Aging: {
    type: Number,
    default: 0
  },
  // Date the patient record was created
  createdAt: {
    type: Date,
    default: Date.now  // Automatically set the creation date
  },
  // Date the patient record was last updated
  updatedAt: {
    type: Date,
    default: Date.now  // Automatically set the last update date
  }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true
});

const Patient = new mongoose.model("Patient", patientSchema);
module.exports = Patient;