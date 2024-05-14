
import React from 'react';

const InputField = ({ label, type, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default InputField;
