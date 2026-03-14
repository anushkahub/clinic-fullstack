
const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientName:String,
    email:String,
    date:String,
    message:String
});

module.exports = mongoose.model("Appointment",AppointmentSchema);
