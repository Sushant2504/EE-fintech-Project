const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const cloudinary = require('../config/cloudinaryConfig');
const Appointment = require('../models/Appointment');
const axios = require('axios');
require('dotenv').config();

// Register Doctor
const registerDoctor = async (req, res) => {
    try {
        const { 
            name,
            email,
            password,
            specialistDegree,
            languages,
            experience,
            specialist,
            phone,
            medical_registration_id,
            sponsored,
        } = req.body;

        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        let rating = 0;

        if (sponsored === 'true') {
            rating = 5;
        }

        // Convert comma-separated languages string into an array
        const languageArray = languages.split(',').map(lang => lang.trim());

        const time_slots = Array(8).fill(0);
        const availability = Array(8).fill(6);
        const booked_slots = Array.from({ length: 8 }, () => Array(6).fill("0")); // 8x6 2D array

        const profileImageFile = req.files?.profile_image;
        let profileImageUrl = 'https://res.cloudinary.com/dsbvlk1f6/image/upload/v1742842425/profile_sc3rg5.jpg';
        if (profileImageFile[0]?.path) {
            const uploadedProfileImage = await cloudinary.uploader.upload(profileImageFile[0].path, {
                folder: 'doctor_profile_images',
                resource_type: 'auto'
            });
            profileImageUrl = uploadedProfileImage.secure_url;
        }

        const certificateFiles = req.files?.certificates;
        let certificateUrls = [];
        if (certificateFiles && certificateFiles.length > 0) {
            for (const file of certificateFiles) {
                const uploadedCertificate = await cloudinary.uploader.upload(file.path, {
                    folder: 'doctor_certificates',
                    resource_type: 'auto'
                });
                certificateUrls.push(uploadedCertificate.secure_url);
            }
        }

        const medicalLicenseFile = req.files?.medical_license;
        let medicalLicenseUrl = '';
        if (medicalLicenseFile[0]?.path) {
            const uploadedLicense = await cloudinary.uploader.upload(medicalLicenseFile[0]?.path, {
                folder: 'doctor_medical_licenses',
                resource_type: 'auto'
            });
            medicalLicenseUrl = uploadedLicense.secure_url;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newDoctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            specialistDegree,
            language: languageArray, // Store the array of languages
            time_slot: time_slots,
            availability: availability,
            booked_slot: booked_slots, // Use the 2D array here
            specialist,
            years_of_experience: experience,
            phone,
            profile_image: profileImageUrl,
            certificates: certificateUrls,
            medical_license: medicalLicenseUrl,
            medical_registration_id,
            sponsored,
            rating,
        });

        await newDoctor.save();

        newDoctor.password = undefined;

        const data = {
            id: newDoctor?._id
        };

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '100h' });
        return res.json({ message: 'Doctor registered successfully', token, user: newDoctor });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

// Login Doctor
const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await Doctor.findOne({ email });
        if (!doctor || !(await bcrypt.compare(password, doctor.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        doctor.password = undefined;

        const data = {
            id: doctor?._id
        };

        const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '100h' });
        return res.json({ message: 'Login successful', token, user: doctor });
    } catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
};

// Get Doctor Profile
const getDoctorProfile = async (req, res) => {
    try {
        const doctorId = req?.user?.id;
        const doctor = await Doctor.findById(doctorId).select('-password');
    
        if (!doctor) {
            throw new Error("Doctor not found");
        }
    
        return res.status(200).json({ "user": doctor });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }    
};

const updateDoctorDetail = async (req, res) => {
    try {
        const doctorId = req?.user?.id;
        const {
            name,
            specialistDegree,
            languages,
            experience,
            phone,
            medical_registration_id
        } = req.body;

        const profileImageFile = req.files?.profile_image;
        let profileImageUrl = req.body?.profile_image_url || '';
        if (profileImageFile) {
            const uploadedProfileImage = await cloudinary.uploader.upload(profileImageFile[0].path, {
                folder: 'doctor_profile_images',
                resource_type: 'auto'
            });
            profileImageUrl = uploadedProfileImage.secure_url;
        }

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            {
                name,
                specialistDegree,
                language: languages,
                years_of_experience: experience, 
                phone,
                profile_image: profileImageUrl || undefined,
                medical_registration_id
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedDoctor) {
            return res.status(404).json({ error: 'Doctor not found' }); 
        }

        return res.json({ message: 'Doctor details updated successfully', doctor: updatedDoctor });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const updateSchedule = async (req, res) => {
    try {
        const doctorId = req?.user?.id;
        const { timeSlot } = req.body;

        if (!Array.isArray(timeSlot) || timeSlot.length !== 8) {
            return res.status(400).json({ error: 'Invalid time_slot array. It must be an array of length 8.' });
        }

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId, {
            time_slot: timeSlot,
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedDoctor) {
            return res.status(404).json({ error: 'Doctor not found' });    
        }

        return res.json({ message: 'Doctor schedule updated successfully', doctor: updatedDoctor });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const getDoctorAppointments = async (req, res) => {
    try {
        const doctorId = req?.user?.id;
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        if (doctor.booking_ref.length === 0) {
            return res.json({ pastAppointments: [], upcomingAppointments: [] });
        }

        await doctor.populate('booking_ref');

        const currentDateTime = new Date();
        const pastAppointments = [];
        const upcomingAppointments = [];

        // Separate past and upcoming appointments
        doctor.booking_ref.forEach(appointment => {
            if (new Date(appointment.end) < currentDateTime) {
                pastAppointments.push(appointment);
            } else {
                upcomingAppointments.push(appointment);
            }
        });

        // Get all upcoming appointment IDs
        const upcomingAppointmentIds = upcomingAppointments.map(appointment => appointment._id.toString());

        // Update doctor.booked_slot to remove extra appointment IDs
        for (let i = 0; i < doctor.booked_slot.length; i++) {
            for (let j = 0; j < doctor.booked_slot[i].length; j++) {
                const slotId = doctor.booked_slot[i][j];
                if (slotId !== "0" && !upcomingAppointmentIds.includes(slotId)) {
                    doctor.booked_slot[i][j] = "0"; // Convert extra appointment IDs to "0"
                }
            }
        }

        // Save the updated doctor document
        await doctor.save();

        return res.json({ pastAppointments, upcomingAppointments });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const fetchAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().select('-password');
        return res.json({ doctors });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const getRecommendedDoctors = async (req, res) => {
    try {
        const { symptoms, language, timeSlot } = req.body;
        
        const apiUrl = process.env.EXTERNAL_API_URL;
        const response = await axios.post(`${apiUrl}/predict`, {
            symptoms,
            language,
            timeSlot
        });

        const recommendedDoctors = response.data.doctors;
        const doctorIds = recommendedDoctors.map(doc => doc.doctorId);
        const priority_score = response.data.priority_score;

        let doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

        // Sort doctors by rating in descending order
        doctors = doctors.sort((a, b) => b.rating - a.rating);

        return res.json({ doctors, priority_score });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const fetchAllDoctorsByPatients = async (req, res) => {
    try {
        const doctors = await Doctor.find().select('-password');

        // Sort doctors by rating in descending order
        const sortedDoctors = doctors.sort((a, b) => b.rating - a.rating);

        return res.json({ doctors: sortedDoctors });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const fetchSingleDoctor = async (req, res) => {
    try {
        const { doctorId } = req?.body;
        const doctor = await Doctor.findById(doctorId);
        return res.json({ doctor });
    } catch (err) {
        return res.status(500).json({ error: err?.message });
    }
};

const giveFeedback = async (req, res) => {
    try {
        const doctorId = req?.user?.id;
        const { feedback } = req.body;

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const apiUrl = process.env.EXTERNAL_API_URL;

        const response = await axios.post(`${apiUrl}/update_weights`, {
            prompt: feedback
        });


        return res.json({ message: 'Feedback sent successfully' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const updateDoctorRating = async (req, res) => {
    try {
        const { doctorId, userRating, feedback } = req.body;
        const userId = req?.user?.id;

        if (!doctorId || !userRating) {
            return res.status(400).json({ error: 'Doctor ID and rating are required' });
        }

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        // Check if the user has already given feedback
        const existingFeedback = doctor.feedback.find(f => f.user.toString() === userId);
        if (existingFeedback) {
            return res.status(400).json({ error: 'User has already provided feedback' });
        }

        // Update rating
        doctor.rating = (doctor.rating * doctor.rating_count + userRating) / (doctor.rating_count + 1);
        doctor.rating_count += 1;

        console.log(doctor.rating, doctor.rating_count)

        // Add feedback
        doctor.feedback.push({
            user: userId,
            rating: userRating,
            feedback: feedback,
            Date: new Date()
        });

        await doctor.save();

        console.log(doctor)

        return res.status(200).json({ message: 'Rating and feedback updated successfully', doctor });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = { registerDoctor, loginDoctor, getDoctorProfile, updateDoctorDetail, updateSchedule, getDoctorAppointments, fetchAllDoctors, getRecommendedDoctors, giveFeedback, fetchAllDoctorsByPatients, fetchSingleDoctor, updateDoctorRating };
