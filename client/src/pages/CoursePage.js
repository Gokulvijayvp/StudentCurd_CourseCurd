import React from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import { UseStudentContext } from "../mycontext/context";
import { MdOutlineLibraryAdd } from "react-icons/md";
import CourseSearch from "../components/CourseSearch";


const CoursePage = () => {
  const { openAdd, setOpenAdd } = UseStudentContext();
  return (
    <div>
      <div className="float-start"> 
        <CourseSearch/>
      </div>
      <div className="mb-3 mt-2 float-end">
        <button
          className="btn btn-sm  btn-primary d-flex align-items-center"
          onClick={() => setOpenAdd(true)}
        >
          <MdOutlineLibraryAdd  className="mb-0 me-2"/>
          <span> New Course</span>
        </button>
      </div>
      {openAdd && <CourseForm />}
      <CourseList />
    </div>
  );
};

export default CoursePage;
