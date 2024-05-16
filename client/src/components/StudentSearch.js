import React from 'react'
import { UseStudentContext } from '../mycontext/context'
import { CgSearch } from "react-icons/cg";


const StudentSearch = () => {
    const{stdSearchitem,setStdSearchitem} = UseStudentContext()
  return (
    <div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" id="search" value={stdSearchitem}  onChange={(e) => setStdSearchitem(e.target.value)} placeholder='Search the student name'/>
            <label className="input-group-text" htmlFor="search"><CgSearch /></label>
        </div>
    </div>
  )
}

export default StudentSearch