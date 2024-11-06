"use client";
import React from 'react';
import Image from 'next/image';
import '../styles/header.css';

interface HeaderProps {
    refs: {
        homeRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;
        profileRef: React.RefObject<HTMLDivElement>;
    };
}

const Header: React.FC<HeaderProps> = ({ refs }) => {



    const navigateAndScroll = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    return (
        <header className="header">
            <h2 onClick={() => navigateAndScroll(refs.homeRef)}>
                Home
            </h2>
            <h2 onClick={() => navigateAndScroll(refs.aboutRef)}>
                About Me
            </h2>
            <div className="image">
                <Image 
                    src="/assets/LisaMariePhotography.gif"
                    alt="About me image"
                    width={200}
                    height={300}
                />
            </div>
            <h2 onClick={() => navigateAndScroll(refs.profileRef)}>
                Gallery 
            </h2>
            <h2 onClick={() => navigateAndScroll(refs.contactRef)}>
                Contact
            </h2>
        </header>
    );
};

export default Header;
