const express = require('express');
const app = express();

const PORT = 8080;

const cors = require('cors')
const bodyparser = require('body-parser')

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(bodyparser.json())

const StudentSchema = require('./models/Student')
const CourseSchema = require('./models/Course')

const mongoose = require('mongoose');




app.get('/api/students', async(req,res) =>{
    try {
        const students =  await StudentSchema.find()
        res.json(students)        
    } catch (error) {
        console.log(error)
    }
})

app.get('/api/courses', async(req,res) =>{
    try {
        const courses =  await CourseSchema.find()
        res.json(courses)        
    } catch (error) {
        console.log(error)
    }
})


app.post('/api/newstudent' , async(req,res) =>{
    try {
        const studentData = req.body
        const newstudent = await StudentSchema(studentData)   
        res.json(newstudent)
        newstudent.save()
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/newcourse' , async(req,res) =>{
    try {
        const {course} = req.body;
        
        const existingCourse = await CourseSchema.findOne({course : course});
        
        if (existingCourse) {
            return res.json('course name is already added' );
        }else{
            const newcourse = await CourseSchema(req.body)
            res.json(newcourse)
            newcourse.save()
        }
    } catch (error) {
        console.log(error)
    }
})

app.put('/api/updatecourse/:id' , async(req,res) =>{
    try {
        const id = req.params.id
        const updateuser = await CourseSchema.findByIdAndUpdate(id, req.body, {new :true}) 
        res.json(updateuser)
    } catch (error) {
        console.log(error)
    }
})

app.put('/api/updatestudent/:id' , async(req,res) =>{
    try {
        const id = req.params.id
        const updateuser = await StudentSchema.findByIdAndUpdate(id, req.body, {new :true}) 
        res.json(updateuser)
    } catch (error) {
        console.log(error)
    }
})


app.put('/api/updatestatus/:id' , async(req,res) =>{
    try {
        const id = req.params.id
        const updateuser = await StudentSchema.findByIdAndUpdate(id, req.body, {new :true}) 
        res.json(updateuser)
    } catch (error) {
        console.log(error)
    }
})


app.delete('/api/deletecourse/:id', async(req,res) =>{
    try {
        const id = req.params.id 
        const deletecourse = await CourseSchema.findByIdAndDelete(id) 
        res.json(deletecourse)      
    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/deletestudent/:id', async(req,res) =>{
    try {
        const id = req.params.id 
        const deletestudent = await StudentSchema.findByIdAndDelete(id) 
        res.json(deletestudent)      
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/usersdbs')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));