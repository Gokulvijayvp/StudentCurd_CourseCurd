import React from 'react'
import { UseStudentContext } from '../mycontext/context';
import { RiCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CourseEditForm = () => {
  const {courseData, setOpenUp, courseId,courseSchema, handleUpdateCourse} = UseStudentContext()
  const { register, handleSubmit, formState: { errors },} = useForm({resolver: yupResolver(courseSchema)});
  const id = courseId
  const usersData = courseData.find((course) => course._id.toString() === id)

  const onSubmit = async(data) => {
    const updatedCourse = {
      name: data.name,
      email: data.email,
      course: data.course,
    };

    await handleUpdateCourse(usersData._id, updatedCourse);
  };
  
  return (
    <div>
      {usersData && 
        <div className='modelOverview'>
          <div className=' model'>
            <div className='col-10 float-start header borderBottom p-3'>
              <h4 className='textblack float-start mb-0'>Update Course</h4>
              <button className='float-end btn btn-outline-secondary btn-sm' onClick={() => setOpenUp(false)}>  <RiCloseFill className="my-1"/></button>
            </div>
            <form className='body col-10 float-start p-3' onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 col-12 d-flex align-items-center">
                <label htmlFor="name" className="form-label mb-0 col-4 fw-bold">
                    Name
                </label>
                <div className="col-8">
                    <input className='form-control mb-2' name='name' id='name' placeholder='name' {...register("name")} defaultValue={usersData.name || ''} />
                    {errors?.name && (
                      <div className="form-text error">
                        {errors.name?.message}
                      </div>
                    )}
                </div>
              </div>
              <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="email" className="form-label col-4 mb-0 fw-bold">
                    Email address
                  </label>
                  <div className="col-8">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Please enter the email"
                      id="email"
                      name="email"
                      defaultValue={usersData.email || '' } 
                      {...register("email")}
                    />
                    {errors?.email && (
                      <div className="form-text error">
                        {errors.email?.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="course" className="form-label mb-0 col-4 fw-bold">
                    Course
                  </label>
                  <div className="col-8">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter the course"
                      id="course"
                      name="course"
                      defaultValue={usersData.course || ''} 
                      {...register("course")}
                    />
                    {errors?.course && (
                      <div className="form-text error">
                        {errors.course?.message}
                      </div>
                    )}                  
                  </div> 
                </div>

              <div className='footer col-12 float-start p-3 borderTop'>
                <button className='btn btn-primary btn-sm float-end ms-2' type="submit">Update</button>
                <button className='btn btn-outline-secondary btn-sm float-end' onClick={() => setOpenUp(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default CourseEditForm



