const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Doctor schema
const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  },
  password: {
    type: String,
    required: true
  },
  specialistDegree: {
    type: String,
    required: true
  },
  specialist: {
    type: String,
    required: true
  },
  certificates: [{
    type: String,  // Certificate file URLs or paths
    required: true
  }],
  language: [{
    type: String,  // List of languages the doctor speaks (e.g., "hi", "en", "mr")
    required: true
  }],
  // Time slots for booking (example 0:00 to 24:00 time range, using 0 to 6)
  time_slot: [{
    type: Number,
    required: true
  }],
  // Availability (example: Available in hours for each day)
  availability: [{
    type: Number,  // Available hours or slots as strings
    required: true
  }],
  // Booked slots in specific time slots for each day
  booked_slot: [
    [{
      type: String,
      required: true
    }]
  ],
  // References to booking documents
  booking_ref: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  }],
  // Doctor's contact information
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  // Experience (in years)
  years_of_experience: {
    type: Number,
    required: true
  },
  // Doctor's profile image
  profile_image: {
    type: String,
    default: 'https://res.cloudinary.com/dsbvlk1f6/image/upload/v1742842425/profile_sc3rg5.jpg'
  },
  // Medical license URL
  medical_license: {
    type: String,
    default: ''
  },
  // Medical registration ID
  medical_registration_id: {
    type: String,
    required: true
  },
  // Availability status
  is_active: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  sponsored: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  rating_count: {
    type: Number,
    default: 1
  },
  feedback: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      unique: true // Ensure unique feedback per user
    },
    rating: {
      type: Number,
      default: 0
    },
    feedback: {
      type: String,
      default: ''
    },
    Date: {
      type: Date,
      default: Date.now
    }
  }],

  address: {
    type: String,
  },

}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true
});

// Create and export the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;