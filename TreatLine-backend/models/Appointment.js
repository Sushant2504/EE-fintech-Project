const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Appointment schema
const appointmentSchema = new Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',  // Reference to the Doctor model
    required: true
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',  // Reference to the Patient model
    required: true
  },
  patientName: {
    type: String,
    default: 'Unknown'
  },
  doctorName: {
    type: String,
    default: 'Unknown'
  },
  finalize_booking: {
    type: Boolean,
    default: false
  },
  start: {
    type: Date,  // Start time of the appointment
  },
  end: {
    type: Date,  // End time of the appointment
  },
  priority_score: {
    type: String,  // Encrypted string for priority scoring
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now  // Automatically set the creation date
  },
  timeSlot: {
    type: Number,  // Example: 0, 1, 2 representing different time slots
    required: true
  },
  symptoms: {
    type: String,  // Symptoms text input by the patient
    required: true
  },
  notes: {
    type: String,
    default: ''  // Additional notes related to the appointment
  },
  isScheduled: {
    type: Boolean,
    default: false  // Indicates if the appointment has been scheduled
  },
  isNotified: {
    type: Boolean,
    default: false  // Indicates if the notification has been sent
  },
  prescription: {
    medications: [{
      name: {
        type: String,  // Name of the medication
        required: true
      },
      dosage: {
        type: String,  // Dosage of the medication
        required: true
      },
      frequency: {
        type: String,  // Frequency of taking the medication (e.g., "twice a day")
        required: true
      },
      duration: {
        type: String,  // Duration for which the medication should be taken (e.g., "5 days")
        required: true
      }
    }],
    additionalInstructions: {
      type: String,  // Any additional instructions for the patient
      default: ''
    }
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
});

// Create and export the Appointment model
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;