const Appointment  = require("../models/Appointment.js");
const Doctor  = require("../models/Doctor.js");
const Patient = require("../models/Patient.js");
const cloudinary = require('../config/cloudinaryConfig');
// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const patientId = req.user?.id;
    const { doctorId, priority_score, timeSlot, symptoms } = req.body;

    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);

    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    if (!patient) return res.status(404).json({ error: "Patient not found" });

    // Check if the patient already has an active booking
    if (patient.booking_ref) {
      return res.status(400).json({ error: 'Patient already has an active booking' });
    }

    // Check if the doctor has at least one available slot in the specified time slot
    let isSlotAvailable = false;
    for (let i = 0; i < doctor.booked_slot[timeSlot].length; i++) {
        if (doctor.booked_slot[timeSlot][i] === "0") {
            isSlotAvailable = true;
            break;
        }
    }

    if (!isSlotAvailable) {
        return res.status(400).json({ error: 'Doctor is fully booked at this time slot' });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      doctorId,
      patientId,
      priority_score,
      timeSlot,
      patientName: patient.name,
      doctorName : doctor.name,
      symptoms,
    });

    await newAppointment.save();

    // Update doctor's booked slots and availability
    
    doctor.availability[timeSlot] -= 1;

    // console.log(doctor);
    // console.log(newAppointment);
    
    await doctor.save();

    res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAppointmentsByPatient = async (req, res) => {
    try {
        // console.log(req?.user);
        const id  = req.user?.id;
        const currentDate = new Date();

        // console.log(id);

        // Find appointments by doctor or patient ID
        const appointments = await Appointment.find({patientId : id});

        const currentAppointments = [];
        const pastAppointments = [];

        appointments.forEach((appointment) => {
            if (appointment.end && appointment.end < currentDate) {
                pastAppointments.push({ ...appointment.toObject(), past: true });
            } else {
                currentAppointments.push({ ...appointment.toObject(), past: false });
            }
        });

        // console.log(currentAppointments , pastAppointments);
        // console.log("Kunal");
        res.json({ pastAppointments });
    } catch (err) {
        console.error("Error getting appointments:", err.message);
        res.status(500).json({ error: err.message });
    }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctorId", "name specialistDegree")
      .populate("patientId", "name age gender");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("doctorId", "name specialistDegree")
      .populate("patientId", "name age gender");

    if (!appointment) return res.status(404).json({ error: "Appointment not found in getAppointmentById" });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an appointment
const updateAppointment = async (req, res) => {
  try {
    const { finalize_booking, start, end, priority_score, timeSlot, symptoms, notes, isScheduled, isNotified } = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        finalize_booking,
        start,
        end,
        priority_score,
        timeSlot,
        symptoms,
        notes,
        isScheduled,
        isNotified
      },
      { new: true }
    );

    if (!updatedAppointment) return res.status(404).json({ error: "Appointment not found in updateAppointment" });

    return res.status(200).json({ message: "Appointment updated successfully", appointment: updatedAppointment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) return res.status(404).json({ error: "Appointment not found in delete appointment" });

    return res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addPrescription = async (req, res) => {
    try {
        const { appointmentId, medications, additionalInstructions } = req.body;

        // console.log("kunal");

        // Find the appointment by ID
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found in addprescription' });
        }

        // Update the prescription field in the appointment
        appointment.prescription = {
            medications,
            additionalInstructions
        };

        await appointment.save();

        return res.status(200).json({ message: 'Prescription added successfully' });
    } catch (error) {
        console.error('Error adding prescription:', error.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getAppointmentsByPatient,
    addPrescription
};
