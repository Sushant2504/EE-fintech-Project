const express =  require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const upload = require("../middleware/multer.js"); // Assuming you are using multer for file uploads

const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByPatient,
  addPrescription
} = require("../controllers/appointmentController.js");

const router = express.Router();

router.post("/book", authMiddleware, createAppointment);  // Create an appointment
router.get("/", authMiddleware ,getAllAppointments);  // Get all appointments
router.get("/single/:id",authMiddleware, getAppointmentById);  // Get an appointment by ID
router.put("/updateAppointment", authMiddleware , updateAppointment);  // Update an appointment
router.delete("/delete/:id", authMiddleware ,deleteAppointment);  // Delete an appointment
router.get("/user", authMiddleware ,getAppointmentsByPatient);
router.put("/prescription" ,authMiddleware , addPrescription); // Add prescription to an appointment

module.exports = router;