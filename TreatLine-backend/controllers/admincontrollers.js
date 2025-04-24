const jwt = require('jsonwebtoken');
require('dotenv').config();
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

const adminLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.admin_email && password === process.env.admin_password) {
            const token = jwt.sign({ id: process.env.admin_id }, process.env.JWT_SECRET, { expiresIn: '100h' });
            return res.status(200).json({ token });
        } else {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

const fetchUnverifiedDoctors = async (req, res) => {
    try {
        const id = req.user.id;
        
        if (id !== process.env.admin_id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const doctors = await Doctor.find({ is_active: false }).select('id name email specialist');
        return res.status(200).json({ doctors });
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

const fetchVerifiedDoctors = async (req, res) => {
    try {
        const id = req.user.id;
        
        if (id !== process.env.admin_id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const doctors = await Doctor.find({ is_active: true }).select('id name email specialist');
        return res.status(200).json({ doctors });
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

const verifyDoctor = async (req, res) => {
    try {
        const id = req.user.id;
        
        if (id !== process.env.admin_id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const { doctorId } = req.body;
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        doctor.is_active = true;
        await doctor.save();

        return res.status(200).json({ doctor });
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

const fetchDoctorById = async (req, res) => {
    try {
        const id = req.user.id;

        if (id !== process.env.admin_id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const { doctorId } = req.body;
        const doctor = await Doctor.findById(doctorId).select('-password');

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        return res.status(200).json({ doctor });
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
};

const fetchAllAppointments = async (req, res) => {
    try {
        const id = req.user.id;
        
        if (id !== process.env.admin_id) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const appointments = await Appointment.find();
        return res.status(200).json({ appointments });
    } catch (error) {
        return res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { adminLogin, fetchUnverifiedDoctors, fetchDoctorById, fetchVerifiedDoctors, verifyDoctor , fetchAllAppointments };
