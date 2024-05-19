import React, { useEffect, useState } from "react";
import { UseStudentContext } from "../mycontext/context";
import { RiCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const StudentEditForm = () => {
  const {
    studentData,
    setOpenStdUp,
    studentId,
    coursesList,
    handleUpdateStudent,
  } = UseStudentContext();
  const id = studentId;
  const usersData = studentData.find((course) => course._id.toString() === id);
  
  const [selectedStatus, setSelectedStatus] = useState("");
  
  useEffect(()=>{
    if(usersData){
      setSelectedStatus(usersData.status)
    }
  },[usersData])

  const changestatus =(status)=>{
    setSelectedStatus(status)
  }
  
  const onSubmit = async(data) => {
    const updatedStudent = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      dob: data.dob,
      address: data.address,
      state: data.state,
      pincode: data.pincode,
      course:data.course,
      status :selectedStatus,
    };

    await handleUpdateStudent(usersData._id, updatedStudent);
  };
  return (
    <div>
      <div className="modelOverview">
        <div className=" model">
          <div className="container">
            <div className="col-12 float-start header borderBottom p-3">
              <h4 className="textblack float-start mb-0">Update Student Details</h4>
              <button
                className="float-end btn btn-outline-secondary btn-sm d-flex justify-content-center"
                onClick={() => setOpenStdUp(false)}
              >
               <RiCloseFill className="my-1"/>
              </button>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center p-3">
              <form className="col-10" onSubmit={handleSubmit(onSubmit)}>
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
                      defaultValue={usersData.name || '' }
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
                  <label htmlFor="phone" className="form-label mb-0 col-4 fw-bold">
                    Phone
                  </label>
                  <div className="col-8">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Please enter the phone number"
                      id="phone"
                      name="phone"
                      defaultValue={usersData.phone || '' }
                      {...register("phone")}
                    />
                    {errors?.phone && (
                      <div className="form-text error">
                        {errors.phone?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="gender" className="form-label mb-0 col-4 fw-bold">
                    Gender
                  </label>
                  <div className="col-8">
                    <select
                      className="form-select"
                      name="gender"
                      id="gender"
                      defaultValue={usersData.gender || '' }
                      {...register("gender")}
                      aria-label="Default select example"
                    >
                      <option value="">Default select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors?.gender && (
                      <div className="form-text error">
                        {errors.gender?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="dob" className="form-label mb-0 col-4 fw-bold">
                    Date of Birth
                  </label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="date"
                      name="dob"
                      id="dob"
                      defaultValue={usersData.dob || '' }
                      {...register("dob")}
                    />
                    {errors?.dob && (
                      <div className="form-text error">
                        {errors.dob?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="address" className="form-label mb-0 col-4 fw-bold">
                    Address
                  </label>
                  <div className="col-8">
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="Please enter the address"
                      name="address"
                      id="address"
                      defaultValue={usersData.address || '' }
                      {...register("address")}
                    />
                    {errors?.address && (
                      <div className="form-text error">
                        {errors.address?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="state" className="form-label mb-0 col-4 fw-bold">
                    State
                  </label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Please enter the state"
                      name="state"
                      id="state"
                      defaultValue={usersData.state || '' }
                      {...register("state")}
                    />
                    {errors?.state && (
                      <div className="form-text error">
                        {errors.state?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="pincode" className="form-label mb-0 col-4 fw-bold">
                    Pincode
                  </label>
                  <div className="col-8">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Please enter the pincode"
                      name="pincode"
                      id="pincode"
                      defaultValue={usersData.pincode || '' }
                      {...register("pincode")}
                    />
                    {errors?.pincode && (
                      <div className="form-text error">
                        {errors.pincode?.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 col-12 d-flex align-items-center">
                  <label htmlFor="course" className="form-label mb-0 col-4 fw-bold">
                    Course
                  </label>
                  <div className="col-8">
                    <select
                      className="form-select"
                      name="course"
                      id="course"
                      defaultValue={usersData.course || '' }
                      {...register("course")}
                      aria-label="Default select example"
                    >
                      <option value="">Select a Course</option>
                      {coursesList &&
                        coursesList.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                    </select>
                    {errors?.course && (
                      <div className="form-text error">
                        {errors.course?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 col-12 d-flex align-items-center">
                  <label className="form-label mb-0 col-4 fw-bold">
                    Training status
                  </label>
                  <div className="col-8">
                    <div role="group" aria-labelledby="my-radio-group">
                      <label className="me-4">
                        <input
                          type="radio"
                          name="status"
                          value="in"
                          {...register("status")}
                          checked={selectedStatus === "in"}
                          onChange={() => changestatus("in")}
                        />
                        In
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="status"
                          value="out"
                          {...register("status")}
                          checked={selectedStatus === "out"}
                          onChange={() => changestatus("out")}
                        />
                        Out
                      </label>
                    </div>
                    {errors?.status && (
                      <div className="form-text error">{errors.status.message}</div>
                    )}
                  </div>
                </div>
                <div className="footer col-12 float-start p-3 borderTop">
                  <button
                    className="btn btn-primary btn-sm float-end ms-2"
                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm float-end"
                    onClick={() => setOpenStdUp(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEditForm;
