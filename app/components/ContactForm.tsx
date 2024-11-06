import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-name'>
        <div>
            <label htmlFor="name">Name:</label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
       <div className='form-name'>
        <div>
            <label htmlFor="email">Email:</label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div> 
      <div className='form-name'>
        <div>
             <label htmlFor="message">Message:</label>
        </div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className='button-container'>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
