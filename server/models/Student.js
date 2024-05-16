const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    gender:String,
    dob:String,
    address:String,
    state:String,
    pincode:Number,
    course:String,
    status:String,
});

const StudentSchema = mongoose.model('students', studentSchema);
module.exports = StudentSchema;
