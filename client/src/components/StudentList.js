import React from "react";
import { UseStudentContext } from "../mycontext/context";
import StudentEditForm from "./StudentEditForm";
import { LiaUserEditSolid } from "react-icons/lia";
import { AiFillDelete } from "react-icons/ai";
import ToggleButton from "./ToggleButton";
import { Grid } from 'react-loader-spinner'
import StudentDelete from "./StudentDelete";

const StudentList = () => {
  const { setStudentId, showConfirmation,clickStudentEdit, setShowConfirmation, openStdUp ,changeStatus ,stdSearch } =  UseStudentContext();
  
  const clickDelete = (id) =>{
    setShowConfirmation(true)
    setStudentId(id)
  }
  return (
    <div>
      {openStdUp && <StudentEditForm />}
      {showConfirmation && <StudentDelete/>}
      <div className="col-12 float-start overflowX">
        {stdSearch ?( 
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col">Course</th>
              <th scope="col">Training Status</th>
              <th scope="col">Function</th>
            </tr>
          </thead>
          <tbody>
            {stdSearch && (
              stdSearch.map((std) => (
                <tr key={std._id}>
                  <td className="text-capitalize">{std.name}</td>
                  <td>{std.email}</td>
                  <td>{std.phone}</td>
                  <td>{std.gender}</td>
                  <td>{std.dob}</td>
                  <td>{std.address}</td>
                  <td>{std.state}</td>
                  <td>{std.pincode}</td>
                  <td className="text-capitalize">{std.course}</td>
                  <td>
                  <div role="group" aria-labelledby="my-radio-group" className="d-flex align-items-center gap-2">
                    <label >
                      In 

                    <ToggleButton
                      value="in" 
                      onChange={(value) => changeStatus(value, std._id)}
                      checked={std.status === "in"}
                    />
                    </label>

                    <label >
                      Out
                      <ToggleButton
                        value="out"
                        onChange={(value) => changeStatus(value,std._id)}
                        checked={std.status === "out"}
                      />
                    </label>
                  </div>
                  </td>
                  <td className="d-flex align-items-center">
                    <button
                      className="btn btn-sm  btn-primary"
                      onClick={() => clickStudentEdit(std._id)}
                    >
                     <LiaUserEditSolid className="mb-0 " /> 
                    </button>
                    <button
                      className="btn btn-sm ms-2 btn-danger d-flex align-items-center"
                      onClick={() => clickDelete(std._id)}
                    >
                     <AiFillDelete className="my-1" />
 
                    </button>
                  </td>
                </tr>
              ))
            ) }
          </tbody>
        </table>
        ) : 
        <Grid visible={true} height="80" width="100%" color="#4fa94d" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper"/>
      }
      </div>
    </div>
  );
};

export default StudentList;
