"use client";
import React, { useRef } from 'react';
import '../../styles/gallery.css';
import Header from '@/app/components/Header';
const use = React.use;

const photos: string[] = [
  'https://lisamariephotography.s3.us-west-1.amazonaws.com/nature/nature-long-1.jpg',
  'https://lisamariephotography.s3.us-west-1.amazonaws.com/nature/nature-tall-2.jpg',
  'https://lisamariephotography.s3.us-west-1.amazonaws.com/nature/nature-long-1.jpg',
  'https://lisamariephotography.s3.us-west-1.amazonaws.com/nature/nature-tall-2.jpg'
];

interface GalleryPageProps {
  params: Promise<{ id: string }>;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ params }) => {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  console.log({ id });

  return (
    <div>
      <div className="gallery-container">
        <h1>Gallery</h1>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index}>
              {photo.includes('tall') ? (
                <div className="photo-tall">
                  <img src={photo} alt={`Gallery Image ${index + 1}`} />
                </div>
              ) : (
                <div className="photo-long">
                  <img src={photo} alt={`Gallery Image ${index + 1}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
