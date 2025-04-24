const express = require('express');
const { registerDoctor, loginDoctor, getDoctorProfile, updateDoctorDetail, updateSchedule, getDoctorAppointments, fetchAllDoctors, getRecommendedDoctors, giveFeedback, fetchAllDoctorsByPatients, fetchSingleDoctor, updateDoctorRating } = require('../controllers/doctorController');
const router = express.Router();
const upload = require('../middleware/multer.js');
const authMiddleware = require('../middleware/authMiddleware.js');

router.post(
    '/register',
    upload.fields([
        { name: 'profile_image', maxCount: 1 },
        { name: 'certificates', maxCount: 5 }, // Upload up to 5 certificates
        { name: 'medical_license', maxCount: 1 } // Upload one medical license
    ]),
    registerDoctor
);
router.post('/login', loginDoctor);


// Route to get doctor profile data
router.get('/profile', authMiddleware, getDoctorProfile);

router.put('/updateProfile', upload.fields([
    { name: 'profile_image', maxCount: 1 },
    { name: 'certificates', maxCount: 5 },
    { name: 'medical_license', maxCount: 1 }
]), authMiddleware, updateDoctorDetail);

router.put('/updateSchedule', authMiddleware, updateSchedule);

// Route to get doctor appointments
router.get('/appointments', authMiddleware, getDoctorAppointments);

// Route to fetch all doctors
router.get('/available', authMiddleware, fetchAllDoctors);

router.post('/predict', authMiddleware, getRecommendedDoctors);

router.post('/feedback', authMiddleware, giveFeedback);

router.get('/find',authMiddleware,fetchAllDoctorsByPatients);

router.post('/fetchDoctorDetail' , authMiddleware , fetchSingleDoctor);

router.put('/updateRating', authMiddleware, updateDoctorRating);

module.exports = router;