const express = require('express');
const { adminLogin ,fetchUnverifiedDoctors ,fetchDoctorById ,fetchVerifiedDoctors ,fetchAllAppointments, verifyDoctor } = require('../controllers/admincontrollers');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', adminLogin);
router.get('/unverifiedDoctors', authMiddleware,fetchUnverifiedDoctors);
router.post('/doctor',authMiddleware,fetchDoctorById);
router.get('/verifiedDoctors',authMiddleware,fetchVerifiedDoctors);
router.put('/verifyDoctor',authMiddleware,verifyDoctor);
router.get('/fetchAllAppointments',authMiddleware,fetchAllAppointments);

module.exports = router;
