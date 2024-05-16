import React, { useEffect } from 'react'
import { UseStudentContext } from '../mycontext/context';
import { RiCloseFill } from "react-icons/ri";

const CourseEditForm = () => {
  const { courseData, setCourse, course, setOpenUp, courseId, handleUpdateCourse } = UseStudentContext()
  const id = courseId
  const usersData = courseData.find((course) => course._id.toString() === id)

  useEffect(() => {
    if (usersData) {
      setCourse(prevUsers => ({
        ...prevUsers,
        name: usersData.name,
        email: usersData.email,
        course: usersData.course,
        date: usersData.date,
      }));
    }
  }, [usersData, setCourse]);
  return (
    <div>
      <div className='modelOverview'>
        <div className=' model'>
          <div className='col-10 float-start header borderBottom p-3'>
            <h4 className='textblack float-start mb-0'>Update Course</h4>
            <button className='float-end btn btn-outline-secondary btn-sm' onClick={() => setOpenUp(false)}>  <RiCloseFill className="my-1"/></button>
          </div>
          <form className='body col-10 float-start p-3'>
            <div className="mb-3 col-12 d-flex align-items-center">
                <label htmlFor="name" className="form-label mb-0 col-4 fw-bold">
                  Name
                </label>
                <div className="col-8">
                  <input className='form-control mb-2' name='name' id='name' placeholder='name' value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
                <label htmlFor="email" className="form-label mb-0 col-4 fw-bold">
                  Email
                </label>
                <div className="col-8">
                  <input className='form-control mb-2' name='email' id='email' placeholder='email' value={course.email} onChange={(e) => setCourse({ ...course, email: e.target.value })} />
                </div>
            </div>
            
            <div className="mb-3 col-12 d-flex align-items-center">
                <label htmlFor="course" className="form-label mb-0 col-4 fw-bold">
                  Course
                </label>
                <div className="col-8">
                  <input className='form-control mb-2' name='course' id='course' type='text' placeholder='course' value={course.course} onChange={(e) => setCourse({ ...course, course: e.target.value })} />
                </div>
            </div>

            <div className='footer col-12 float-start p-3 borderTop'>
              <button className='btn btn-primary btn-sm float-end ms-2' onClick={() => handleUpdateCourse(usersData._id)}>Update</button>
              <button className='btn btn-outline-secondary btn-sm float-end' onClick={() => setOpenUp(false)}>Close</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default CourseEditForm



