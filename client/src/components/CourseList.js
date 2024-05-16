import React from "react";
import { UseStudentContext } from "../mycontext/context";
import CourseEditForm from "./CourseEditForm";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { Grid } from 'react-loader-spinner'
import CourseDelete from "./CourseDelete";


const CourseList = () => {
  const { setShowCourseConfirmation,showCourseConfirmation, setCourseId,clickCourseEdit, openUp ,courseSearch } = UseStudentContext();
  const clickDelete = (id) =>{
    setShowCourseConfirmation(true)
    setCourseId(id)
  }

  return (
    <div>
      {openUp && <CourseEditForm />}
      {showCourseConfirmation && <CourseDelete/>}
      <div className="col-12 float-start overflowX">
      {courseSearch ? ( 
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course</th>
              <th scope="col">Function</th>
            </tr>
          </thead>
          <tbody>
            {courseSearch && (
              courseSearch.map((course) => (
                <tr key={course._id}>
                  <td className="text-capitalize">{course.name}</td>
                  <td>{course.email}</td>
                  <td className="text-capitalize">{course.course}</td>

                  <td className="d-flex align-items-center">
                    <button
                      className="btn btn-sm  btn-primary float-start"
                      onClick={() => clickCourseEdit(course._id)}
                    >
                      <TbEdit />

                    </button>
                    <button
                      className="btn btn-sm ms-2 btn-danger float-start"
                      onClick={() => clickDelete(course._id)}
                    >
                      <AiFillDelete />

                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        ) : 
        <Grid visible={true} height="80" width="100%" color="#4fa94d" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper"/>
      }
      </div>
    </div>
  );
};

export default CourseList;
