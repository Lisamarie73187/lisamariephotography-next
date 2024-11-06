import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const image = "https://lisamariephotography.s3.us-west-1.amazonaws.com/carousel/photo-4.jpg"
const imageTwo = "https://lisamariephotography.s3.us-west-1.amazonaws.com/carousel/photo-2.jpg"
const imageThree = "https://lisamariephotography.s3.us-west-1.amazonaws.com/carousel/photo-3.jpg"
const imageFour = "https://lisamariephotography.s3.us-west-1.amazonaws.com/carousel/photo-4-2.jpg"




export const CarouselComponent: React.FC = () =>  {

    return (
        <Carousel
            autoPlay
            centerMode
            centerSlidePercentage={60}
            infiniteLoop
            interval={4000}
            showArrows
            swipeable
            emulateTouch
            useKeyboardArrows
            transitionTime={2000}
            showThumbs={false}
        >
            <div className='carousel-item'>
                <img src={image} />
            </div>
            <div className='carousel-item'>
                <img src={imageTwo}/>
            </div>
            <div className='carousel-item'>
                <img src={imageThree}/>
            </div>
            <div className='carousel-item'>
                <img src={imageFour}/>
            </div>
        </Carousel>
    );
};

