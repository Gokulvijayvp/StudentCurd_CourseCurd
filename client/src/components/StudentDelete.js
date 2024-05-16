import React, { useEffect } from 'react'
import { UseStudentContext } from '../mycontext/context';

const StudentDelete = () => {
    const {stdSearch,seletedName,setSeletedName,studentId,setShowConfirmation,handleDeleteClick} =  UseStudentContext()
    const stdData = stdSearch.find( user => user._id === studentId)
    useEffect(()=>{ 
        setSeletedName(stdData.name)
    },[setSeletedName,stdData.name])
  return (
    
    <div>
        <div className='modelOverview'>
            <div className='modelConfirm'>
                <div className='col-12 float-start p-3 borderBottom'>
                    <h4 className='textblack float-start'>Delete Student</h4>
                    <button className='btn btn-outline-secondary btn-sm float-end' onClick={() => setShowConfirmation(false)}> x </button>
                </div>
                <div className='col-12 float-start p-3 py-4'>
                    
                    <div className="alert alert-danger mb-0" role="alert">
                    Are you sure you want to student <span className='text-capitalize'>{seletedName}</span> 
                    </div>
                </div>
                <div className='p-3 borderTop col-12 float-start'>
                    
                    <button className='btn btn-danger btn-sm  ms-2 float-end' onClick={handleDeleteClick}>Delete</button>
                    <button className='btn btn-outline-secondary float-end btn-sm' onClick={() => setShowConfirmation(false)}>Cencel</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default StudentDelete