import React from 'react';
import '../styles/about.css';

const image = "https://lisamariephotography.s3.us-west-1.amazonaws.com/IMG_4384.jpeg";

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
                    Welcome to Lisa Marie Photography! I am a passionate photographer dedicated to capturing 
                    the unique and beautiful moments of your life. Whether it's the love between families, the joy of friends, 
                    the bond between couples, or the personality of your beloved pets, I'm here to make those moments last 
                    forever through my lens.
                </p>
                <p>
                    As a novice in the photography world, my goal is to create stunning images that tell your story 
                    in the most genuine way. I believe in making every session relaxed and enjoyable, so you can be 
                    yourself and let your true essence shine through.
                </p>
                <p>
                    Every photograph I take is a blend of creativity, dedication, and an eagerness to grow and learn. I'm 
                    excited to embark on this journey with you and capture the special moments that matter most.
                    Let’s create some memories together!
                </p>
            </div>
        </div>
    );
};
