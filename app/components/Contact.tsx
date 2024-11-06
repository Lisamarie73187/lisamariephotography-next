import React from 'react';
import ContactForm from './ContactForm';
import '../styles/contact.css';


const Contact: React.FC= () => {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <h3>Let&apos;s Make Some Memories</h3>
            <ContactForm/>
        </div>
    );
};

export default Contact;