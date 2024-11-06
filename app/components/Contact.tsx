import React from 'react';
import ContactForm from './ContactForm';
import '../styles/contact.css';

interface HeaderProps {
    
}

const Contact: React.FC<HeaderProps> = () => {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <h3>Let's Make Some Memories</h3>
            <ContactForm/>
        </div>
    );
};

export default Contact;