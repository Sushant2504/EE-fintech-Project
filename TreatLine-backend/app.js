const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const patientRoutes = require('./routes/patientRoutes');
const adminRoutes = require('./routes/adminRoutes');
// const Patient  = require('./models/Patient');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/doctors', doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/patients", patientRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to TreatLine Backend</h1>');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
