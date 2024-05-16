import React from 'react'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

const ToggleButton = ({ value, onChange, checked }) => {
  return (
    <div>
      {checked ? (
        <FaToggleOn className='icon on' onClick={() => onChange(value)} />
      ) : (
        <FaToggleOff className='icon off' onClick={() => onChange(value)} />
      )}
    </div>
  )
}

export default ToggleButton