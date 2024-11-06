import React from 'react';
import '../styles/about.css';

const image = "https://lisamariephotography.s3.us-west-1.amazonaws.com/portrait-1.jpg";

export const About: React.FC = () => {
    return (
        <div className="about">
            <div className="image-container-about">
                <img 
                    src={image}
                    alt="About me"
                    className="about-me-image"
                />
            </div>
            <div className="about-me-text-container">
                <h1>ABOUT ME</h1>
                <p>
                Welcome to Lisa Marie Photography! I&apos;m dedicated to capturing life&apos;s unique and 
                beautiful moments—whether it&apos;s family love, the joy of friendship, 
                the bond of couples, or the personality of pets.  
                </p>
                <p>
                As a budding photographer, I aim to tell your story in a genuine way, making each session relaxed 
                and fun so your true essence shines. Every photo is a blend of creativity 
                and passion, and I&apos;`m excited to capture memories that matter. 
                Let&apos;`s make some magic together!
                </p>
            </div>
        </div>
    );
};
