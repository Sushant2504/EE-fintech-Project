const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const cloudinary = require('../config/cloudinaryConfig');

// Register Patient
const registerPatient = async (req, res) => {
    try {
        const { 
            name,
            email,
            password,
            phone,
            age,
            gender,
            address,
            medicalHistory,
            emergencyContact,
            allergies,
            dateOfBirth,
            familyMembers
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPatient = new Patient({
            name,
            email,
            password: hashedPassword,
            phone,
            age,
            gender,
            address,
            medicalHistory,
            emergencyContact,
            allergies,
            dateOfBirth,
            familyMembers
        });

        await newPatient.save();

        newPatient.password = undefined;

        const data = {
            id: newPatient?._id
        };

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '100h' });
        return res.json({ message: 'Patient registered successfully', token, user: newPatient });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

// Login Patient
const loginPatient = async (req, res) => {
    try {
        const { email, password } = req.body;
        const patient = await Patient.findOne({ email });
        
        if (!patient || !(await bcrypt.compare(password, patient.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        patient.password = undefined;

        const data = {
            id: patient?._id
        };

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '100h' });

        return res.json({ message: 'Login successful', token, user: patient });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Get Patient Profile
const getPatientProfile = async (req, res) => {
    try {
        const patientId = req?.user?.id;
        const patient = await Patient.findById(patientId).select('-password');
    
        if (!patient) {
            throw new Error("Patient not found");
        }
        
        let appointment = null;
        if (patient.booking_ref) {
            appointment = await Appointment.findById(patient.booking_ref);

            if (appointment && new Date(appointment.end) < new Date()) {
                patient.booking_ref = null; // Set booking_ref to null
                await patient.save();
                appointment = null; // Clear the appointment as well
            }
        }

        return res.status(200).json({ "user": patient, appointment });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }    
};

// Update Patient Details
const updatePatientDetail = async (req, res) => {
    try {
        const patientId = req?.user?.id;
        const {
            name,
            phone,
            age,
            gender,
            address,
            medicalHistory,
            emergencyContact,
            aadhaarDocumentLink,
            allergies,
            dateOfBirth,
            familyMembers
        } = req.body;

        const updatedPatient = await Patient.findByIdAndUpdate(
            patientId,
            {
                name,
                phone,
                age,
                gender,
                address,
                medicalHistory,
                emergencyContact,
                aadhaarDocumentLink,
                allergies,
                dateOfBirth,
                familyMembers
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedPatient) {
            return res.status(404).json({ error: 'Patient not found' }); 
        }

        return res.json({ message: 'Patient details updated successfully', patient: updatedPatient });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

module.exports = { registerPatient, loginPatient, getPatientProfile, updatePatientDetail };