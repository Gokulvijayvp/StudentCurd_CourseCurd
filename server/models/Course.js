const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true
    }
});

const CourseSchema = mongoose.model('courses', courseSchema);
module.exports = CourseSchema;
