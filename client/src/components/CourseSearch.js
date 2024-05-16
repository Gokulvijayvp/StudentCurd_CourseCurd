import React from 'react'
import { UseStudentContext } from '../mycontext/context'
import { CgSearch } from "react-icons/cg";

const CourseSearch = () => {
    const {courseSearchitem,setCourseSearchitem } = UseStudentContext()
  return (
    <div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" id="search" value={courseSearchitem}  onChange={(e) => setCourseSearchitem(e.target.value)} placeholder='Search the course name'/>
            <label className="input-group-text" htmlFor="search"><CgSearch /></label>
        </div>
    </div>
  )
}

export default CourseSearch