import React from 'react';
import { Gallery } from './Gallery';
import '../styles/gallery.css';
import Link from 'next/link';

const imageOne = "https://lisamariephotography.s3.us-west-1.amazonaws.com/nature/nature-tall-1.jpg"
const imageTwo = "https://lisamariephotography.s3.us-west-1.amazonaws.com/portraits/portrait-tall-13.jpg"
const imageThree = "https://lisamariephotography.s3.us-west-1.amazonaws.com/families/families-tall-2.jpg"


export const GallerySection: React.FC = () => {
    return (
        <div className='portfolio'>
            <h1>Gallery</h1>
            <div className='portfolio-section'>   
                <Link href={`/gallery/nature`}>
                    <Gallery image={imageOne} title="Nature"/>
                </Link>
                <Link href={`/gallery/portraits`}>
                    <Gallery  image={imageTwo} title="Portraits"/>
                </Link>
                <Link href={`/gallery/families`}>
                    <Gallery image={imageThree} title="Families & Couples"/>
                </Link>
            </div>
        </div>

    );
};

