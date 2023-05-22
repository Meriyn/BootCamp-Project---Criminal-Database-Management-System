import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';

export default function Enter() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    address: '',
    city: '',
    dOB: '',
    gender: '',
    nationality: '',
    height: '',
    weight: '',
    eyeColor: '',
    skinColor: '',
    race: '',
    marks: '',
    crimeType: '',
    mostWanted: '',
    dOArrest: ''
  });

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
  });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform further actions with the form data, such as sending it to an API or processing it in any way you need.
  };

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <form onSubmit={handleSubmit} className="needs-validation" novalidate>
      {/* ------First Row ------*/}
  <div className="form-row">
    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">First name</label>
      <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom02">Last name</label>
      <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
    </div>


    <div className="col-md-4 mb-3">
      <label className='clr' for="validationCustomUsername">ID Number</label>
      {/* <div className="input-group"> */}
        <input name="idNumber" value={formData.idNumber} onChange={handleChange} type="text" className="form-control" id="validationCustomUsername" placeholder="ID Number" aria-describedby="inputGroupPrepend" required/>
        {/* <div className=" clr invalid-feedback">
          Please choose an Id Number.
        </div> */}
      {/* </div> */}
    </div>
  </div>

 {/* ------Second Row ------*/}

  <div className="form-row">
    <div className="col-md-5 mb-3">
      <label className='clr' for="validationCustom03">Address</label>
      <input name="address" value={formData.address} onChange={handleChange} type="text" className="form-control" id="validationCustom03" placeholder="Address" required/>
      <div className=" clr invalid-feedback">
        Please provide a valid city.
      </div>
    </div>


    <div className="col-md-3 mb-3 ">
      <label className='clr' for="validationCustom04">City</label>
      <input name="city" value={formData.city} onChange={handleChange} type="text" className="form-control" id="validationCustom04" placeholder="City" required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>


    {/* <div className="col-md-2 mb-3">
      <label className='clr'for="validationCustom05">Zip</label>
      <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div> */}
  </div>


 {/* ------Third Row ------*/}

  <div className="form-row">
    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Date Of Birth</label>
      <input name="dOB" value={formData.dOB} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Date Of Birth" required/>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom02">Gender</label>
      <input name="gender" value={formData.gender} onChange={handleChange} type="text" className="form-control" id="validationCustom02" placeholder="Gender" required/>
    </div>


    <div className="col-md-4 mb-3">
      <label className='clr' for="validationCustomUsername">Nationality</label>
      <div className="input-group">
       
        <input name="nationality" value={formData.nationality} onChange={handleChange} type="text" className="form-control" id="validationCustomUsername" placeholder="Nationality" aria-describedby="inputGroupPrepend" required/>
        <div className=" clr invalid-feedback">
          Please choose a Nationality.
        </div>
      </div>
    </div>
  </div>


 {/* ------Fourth Row ------*/}
  <div className="form-row">
    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Height</label>
      <input name="height" value={formData.height} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Height" required/>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom02">Weight</label>
      <input name="weight" value={formData.weight} onChange={handleChange} type="text" className="form-control" id="validationCustom02" placeholder="Weight" required/>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Eye Color</label>
      <select name="eyeColor" value={formData.eyeColor} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Eye Color" required>
      <option>
        Black
      </option>  
      <option>
        Blue
      </option> 
      <option>
        Brown
      </option>
      <option>
        Green
      </option> 
      <option>
        Hazel
      </option>
      <option>
        Undefined
      </option>
      </select>
    </div>
  </div>


 {/* ------Fifth Row ------*/}
 <div className="form-row">
    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Skin Color</label>
      <select name="skinColor" value={formData.skinColor} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Skin Color" required>
      <option>
        Black
      </option>  
      <option>
        Dark Brown
      </option> 
      <option>
        Light Brown
      </option>
      <option>
        Fair
      </option> 
      <option>
        Undefined
      </option>
      </select>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Race</label>
      <select name="race" value={formData.race} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Race" required>
      <option>
        Asian
      </option>  
      <option>
        African
      </option> 
      <option>
      Caucasian
      </option>
      <option>
        Undefined
      </option>
      </select>
    </div>


    <div className="col-md-5 mb-3">
      <label className='clr' for="validationCustomUsername">Scars, Marks or Tattoos</label>
      <div className="input-group">
        <input name="marks" value={formData.marks} onChange={handleChange} type="text" className="form-control" id="validationCustomUsername" placeholder="Scars, Marks or Tattoos" aria-describedby="inputGroupPrepend" required/>
      </div>
    </div>
  </div>

 {/* ------sixth Row ------*/}
 <div className="form-row">
 <div className="col-md-3 mb-3">
      <label className='clr' for="validationCustom01">Crime Type</label>
      <select name="crimeType" value={formData.crimeType} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="Crime Type" required>
      <option>
        Cybercrime
      </option>  
      <option>
      Violence
      </option> 
      <option>
      Domestic Violence
      </option>
      <option>
      Robbery
      </option>
      <option>
      Burglary
      </option>
      <option>
      Murder
      </option>
      <option>
      Drugs
      </option>
      <option>
      Drug trafficking
      </option>
      <option>
      Kidnapping
      </option>
      <option>
      Money laundering
      </option>
      <option>
      Identity theft
      </option>
      <option>
      Terrorism
      </option>
      </select>
    </div>


    <div className="col-md-3 mb-3">
      <label className='clr'>
        Most Wanted
      <br></br>
      <br></br>
    <label>
        <input className='clr'
          type="radio"
          name="mostWanted"
          value="Yes"
          checked={formData.mostWanted === 'Yes'}
          onChange={handleChange}
        />
        Yes
      </label>
      <label>
        <input className='clr'
          type="radio"
          name="mostWanted"
          value="No"
          checked={formData.mostWanted === 'No'}
          onChange={handleChange}
        />
        No
      </label>
      </label>
    </div>


    <div className="col-md-4 mb-3">
      <label className='clr' for="validationCustomUsername">Date Of Arrest</label>
      <div className="input-group">
        <input name="dOArrest" value={formData.dOArrest} onChange={handleChange} type="text" className="form-control" id="validationCustomUsername" placeholder="Date Of Arrest" aria-describedby="inputGroupPrepend" required/>
      </div>
    </div>
  </div>

 {/* ------seventh Row ------*/}
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className=" clr form-check-label" for="invalidCheck">
        I confirm that I am a member of the authority and I will not misuse of this website
      </label>


      <div className="invalid-feedback">
        You must confirm before submitting.
      </div>
    </div>
  </div>


  <button className="styling-btn" type="submit">Submit form</button>
</form>
    </>
  )
}
