import React from 'react';
import { Gallery } from './Gallery';
import '../styles/gallery.css';
import Link from 'next/link';
const imageOne = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-1.jpg"
const imageTwo = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-2.jpg"
const imageThree = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-3.jpg"


export const GallerySection: React.FC = () => {
    return (
        <div className='portfolio'>
            <h1>Gallery</h1>
            <div className='portfolio-section'>   
                <Link href={`/gallery/2`}>
                    <Gallery  image={imageOne} title="Nature"/>
                </Link>
                <Gallery  image={imageTwo} title="Pets"/>
                <Gallery  image={imageThree} title="Couples"/>
            </div>
        </div>

    );
};

