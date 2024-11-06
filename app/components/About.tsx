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
                Welcome to Lisa Marie Photography! I'm dedicated to capturing life's unique and 
                beautiful moments—whether it's family love, the joy of friendship, 
                the bond of couples, or the personality of pets. As a budding photographer, 
                
                </p>
                <p>
                I aim to tell your story in a genuine way, making each session relaxed 
                and fun so your true essence shines. Every photo is a blend of creativity 
                and passion, and I'm excited to capture memories that matter. 
                Let's make some magic together!
                </p>
                {/* <p>
                    Every photograph I take is a blend of creativity, dedication, and an eagerness to grow and learn. I'm 
                    excited to embark on this journey with you and capture the special moments that matter most.
                    Let’s create some memories together!
                </p> */}
            </div>
        </div>
    );
};
