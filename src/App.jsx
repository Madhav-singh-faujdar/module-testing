// src/FormComponent.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ShareButton from './Share';

const FormComponent = () => {
  // const [formData, setFormData] = useState({
  //   field1: '',
  //   field2: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted with data:', formData);
  // };

  return (
    <>
    {/* // <form onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label className="form-label">Event Name:</label>
    //     <input type="text" className="form-control" name="field1" value={formData.field1} onChange={handleChange} />
    //   </div>
  
    //   <div className="mb-3">
    //     <label className="form-label">Event Date:</label>
    //     <input type="date" className="form-control" name="field2" value={formData.field2} onChange={handleChange} />
    //   </div> */}



    {/* //   <button type="submit" className="btn btn-primary">Submit</button> */}
<ShareButton/>



<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M200 400C310.457 400 400 310.457 400 200C400 89.5431 310.457 0 200 0C89.5431 0 0 89.5431 0 200C0 310.457 89.5431 400 200 400ZM200 366.667C292.047 366.667 366.667 292.047 366.667 200C366.667 107.953 292.047 33.3333 200 33.3333C107.953 33.3333 33.3333 107.953 33.3333 200C33.3333 292.047 107.953 366.667 200 366.667Z" fill="url(#paint0_angular_2_125)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M379.694 160.012C388.823 158.834 397.178 165.28 398.356 174.409C399.451 182.895 400 191.443 400 200C400 209.205 392.538 216.667 383.333 216.667C374.129 216.667 366.667 209.205 366.667 200C366.667 192.869 366.209 185.746 365.297 178.674C364.119 169.545 370.565 161.189 379.694 160.012Z" fill="#103D66"/>
<defs>
<radialGradient id="paint0_angular_2_125" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) scale(200)">
<stop stop-color="#27AE60" stop-opacity="0"/>
<stop offset="0.0001" stop-color="#3AE180" stop-opacity="0"/>
<stop offset="1" stop-color="#3AE180"/>
</radialGradient>
</defs>
</svg>


    {/* // </form> */}
    </>
  );
};

export default FormComponent;
