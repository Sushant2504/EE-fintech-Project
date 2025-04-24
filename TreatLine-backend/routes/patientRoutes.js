const express = require('express');
const { registerPatient, loginPatient, getPatientProfile, updatePatientDetail } = require('../controllers/patientController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js');

// Route to register a new patient
router.post('/register', registerPatient);

// Route to login a patient
router.post('/login', loginPatient);

// Route to get patient profile data
router.get('/profile', authMiddleware, getPatientProfile);

// Route to update patient profile data
router.put('/updateProfile', authMiddleware, updatePatientDetail);

module.exports = router;