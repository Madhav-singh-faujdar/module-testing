// src/FormComponent.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ShareButton from './Share';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="mb-3">
    //     <label className="form-label">Event Name:</label>
    //     <input type="text" className="form-control" name="field1" value={formData.field1} onChange={handleChange} />
    //   </div>
  
    //   <div className="mb-3">
    //     <label className="form-label">Event Date:</label>
    //     <input type="date" className="form-control" name="field2" value={formData.field2} onChange={handleChange} />
    //   </div>



    //   <button type="submit" className="btn btn-primary">Submit</button>
<ShareButton/>
    // </form>
  );
};

export default FormComponent;
