"use client";
import React, { useEffect } from 'react';
import '../../styles/gallery.css';
import Link from 'next/link';
import { galleryPhotos } from '@/app/pictures';


interface GalleryPageProps {
  params: Promise<{ id: string }>;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ params }) => {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const project = galleryPhotos.find((project) => project.id === id);


  return (
    <div>
      <div className="gallery-container">
        <div className='home'>
            <Link href="/">
                <h2>Home</h2>
            </Link>
            </div>
            <h3>{project?.title}</h3>
                <h1>GALLERY</h1>
                <div className='styled-line'></div>
        <div className="photo-grid">
          {project?.images.map((photo, index) => (
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
