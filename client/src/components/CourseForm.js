import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseStudentContext } from "../mycontext/context";
import { RiCloseFill } from "react-icons/ri";

const CourseForm = () => {
  const { handleNewCourse, dataMessage,courseSchema, setOpenAdd } = UseStudentContext();

  const {register,handleSubmit,formState: { errors },} = useForm({resolver: yupResolver(courseSchema),});

  return (
    <div className="modelOverview">
      <div className=" model">
        <div className="container">
          <div className="col-12 float-start header borderBottom p-3">
            <h4 className="textblack float-start mb-0">New Course</h4>
            <button
              className="float-end btn btn-outline-secondary btn-sm d-flex justify-content-center"
              onClick={() => setOpenAdd(false)}
            >
               <RiCloseFill className="my-1"/>
            </button>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <form className="col-8" onSubmit={handleSubmit(handleNewCourse)}>
              <div className="mb-3 col-12 d-flex align-items-center ">
                <label htmlFor="name" className="form-label col-4 mb-0 fw-bold">
                  Name
                </label>

                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter the name"
                    id="name"
                    name="name"
                    {...register("name")}
                  />
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
                    {...register("course")}
                  />
                  {errors?.course && (
                    <div className="form-text error">
                      {errors.course?.message}
                    </div>
                  )}
                  {dataMessage?.coursetaken && (
                    <div className="form-text error">
                      {dataMessage.coursetaken}
                    </div>
                  )}
                  
                </div>
              </div>
              <button type="submit" className="btn btn-primary col-12">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
