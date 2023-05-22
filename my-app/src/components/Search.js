import React from 'react'

export default function Search() {
  return (
    <div className="form">
       <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Search by:</label>
      <select className='clr' for="validationCustom01">
      <option>
        First name
      </option>
      <option>
        Last name
      </option>
      <option>
        First Name
      </option>
      <option>
        First Name
      </option>
      <option>
        First Name
      </option>
      <option>
        First Name
      </option>
      <option>
        First Name
      </option>
      <option>
        First Name
      </option>
      </select>
      <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
    </div>
    </div>
  )
} 
