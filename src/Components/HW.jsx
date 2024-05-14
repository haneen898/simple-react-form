
import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';

const HW = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextAreaField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HW;
