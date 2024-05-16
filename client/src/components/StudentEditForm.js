import React, { useEffect } from "react";
import { UseStudentContext } from "../mycontext/context";
import { RiCloseFill } from "react-icons/ri";

const StudentEditForm = () => {
  const {
    studentData,
    setStudent,
    student,
    setOpenStdUp,
    studentId,
    coursesList,
    handleUpdateStudent,
  } = UseStudentContext();
  const id = studentId;
  const usersData = studentData.find((course) => course._id.toString() === id);

  useEffect(() => {
    if (usersData) {
      setStudent((prevUsers) => ({
        ...prevUsers,
        name: usersData.name,
        email: usersData.email,
        phone: usersData.phone,
        gender: usersData.gender,
        dob: usersData.dob,
        address: usersData.address,
        state: usersData.state,
        pincode: usersData.pincode,
        course:usersData.course,
        status: usersData.status,
      }));
    }
  }, [usersData, setStudent]);
  return (
    <div>
      <div className="modelOverview">
        <div className=" model">
          <div className="col-12 float-start header borderBottom p-3">
            <h4 className="textblack float-start mb-0">Update Student</h4>
            <button
              className="float-end btn btn-outline-secondary btn-sm"
              onClick={() => setOpenStdUp(false)}
            >
              <RiCloseFill className="my-1" />
            </button>
          </div>

          <form className="body col-12 float-start p-3">
            <div className="mb-3 col-12 d-flex align-items-center">
              <label htmlFor="name" className="form-label mb-0 col-4 fw-bold">
                Name
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={student.name}
                  onChange={(e) =>
                    setStudent({ ...student, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label htmlFor="email" className="form-label mb-0 col-4 fw-bold">
                Email
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label htmlFor="phone" className="form-label mb-0 col-4 fw-bold">
                Phone number
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="phone"
                  value={student.phone}
                  onChange={(e) =>
                    setStudent({ ...student, phone: e.target.value })
                  }
                />
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
                  value={student.gender}
                  onChange={(e) =>
                    setStudent({ ...student, gender: e.target.value })
                  }
                >
                  <option value="">Default select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label htmlFor="dob" className="form-label mb-0 col-4 fw-bold">
                Date of birth
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="dob"
                  id="dob"
                  type="date"
                  placeholder="dob"
                  value={student.dob}
                  onChange={(e) =>
                    setStudent({ ...student, dob: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label
                htmlFor="address"
                className="form-label mb-0 col-4 fw-bold"
              >
                Address
              </label>
              <div className="col-8">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Please enter the address"
                  name="address"
                  id="address"
                  value={student.address}
                  onChange={(e) =>
                    setStudent({ ...student, address: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label htmlFor="state" className="form-label mb-0 col-4 fw-bold">
                State
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="state"
                  id="state"
                  placeholder="state"
                  value={student.state}
                  onChange={(e) =>
                    setStudent({ ...student, state: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-3 col-12 d-flex align-items-center">
              <label
                htmlFor="pincode"
                className="form-label mb-0 col-4 fw-bold"
              >
                Pincode
              </label>
              <div className="col-8">
                <input
                  className="form-control mb-2"
                  name="pincode"
                  id="pincode"
                  type="number"
                  placeholder="pincode"
                  value={student.pincode}
                  onChange={(e) =>
                    setStudent({ ...student, pincode: e.target.value })
                  }
                />
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
                    aria-label="Default select example"
                    value={student.course}
                    onChange={(e) =>
                      setStudent({ ...student, course: e.target.value })
                    }
                  >
                    {coursesList &&
                      coursesList.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            <div className="mb-3 col-12 d-flex align-items-center">
              <label
                
                className="form-label mb-0 col-4 fw-bold"
              >
                Training status
              </label>
              <div className="col-8">
                <div role="group"  aria-labelledby="my-radio-group">
                  <label className="me-4">
                    <input
                      type="radio"
                      name="selectedOption"
                      value="in"
                      checked={student.status === "in"}
                      onChange={(e) =>
                        setStudent({ ...student, status: e.target.value })
                      }
                    />
                    In
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="selectedOption"
                      value="out"
                      checked={student.status === "out"}
                      onChange={(e) =>
                        setStudent({ ...student, status: e.target.value })
                      }
                    />
                    Out
                  </label>
                </div>
              </div>
            </div>
            <div className="footer col-12 float-start p-3 borderTop">
              <button
                className="btn btn-primary btn-sm float-end ms-2"
                onClick={() => handleUpdateStudent(usersData._id)}
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
  );
};

export default StudentEditForm;
