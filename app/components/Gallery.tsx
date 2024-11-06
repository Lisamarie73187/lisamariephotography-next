import React from 'react';

interface GalleryProps {
    image: string;
    title: string;
}

export const Gallery: React.FC<GalleryProps> = ({image, title}) => {
    return (
        <div className="portfolio-container">
            <div className='image-container'>
            <img src={image} className='zoom-hover'/>
        </div>
           <p>{title}</p>
        </div>
    );
};

