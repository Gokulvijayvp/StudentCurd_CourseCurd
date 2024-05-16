import React from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { UseStudentContext } from "../mycontext/context";
import { MdGroupAdd } from "react-icons/md";
import StudentSearch from "../components/StudentSearch";

const StudentPage = () => {
  const { openStdNw, setOpenStdNw} = UseStudentContext();
  
  return (
    <div className="col-12 float-start">
      <div className="float-start"> 
        <StudentSearch/>
      </div>
      <div className="mb-3 mt-2 float-end">
        <button
          className="btn btn-sm  btn-primary d-flex align-items-center"
          onClick={() => setOpenStdNw(true)}
        >
          <MdGroupAdd className="mb-0 me-2" /> <span>Add Student </span>
        </button>
      </div>
      {openStdNw && <StudentForm />}
      <StudentList />
    </div>
  );
};

export default StudentPage;
