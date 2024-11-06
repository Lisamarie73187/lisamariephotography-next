import React from 'react';
import '../styles/description.css';

export const Description: React.FC = () => {
  return (
    <div className='description'>
      <h3>Capturing Love, Life, and Laughter</h3>
      <h1>LIFESTYLE PHOTOGRAPHY</h1>
      <div className='styled-line'></div>
      <p className='bold'>Specializing in families, couples, friends, students, and pets.</p>
      <p>
        I believe in the power of capturing joyful moments and heartfelt laughter that make life special, 
        while highlighting the unique personality and spirit of each subject. Let me help you preserve your most cherished moments with photographs.
      </p>
    </div>
  );
};

export default Description;
