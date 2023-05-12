import React, { useEffect, useRef, useState } from 'react';
import 'animate.css/animate.min.css';
import './carousel.css';
import classNames from 'classnames';

const images = [
  'https://via.placeholder.com/500x300?text=Image+1',
  'https://via.placeholder.com/500x300?text=Image+2',
  'https://via.placeholder.com/500x300?text=Image+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    carouselRef.current.classList.add('animate__slideInLeft');
    setTimeout(() => {
      carouselRef.current.classList.remove('animate__slideInLeft');
    }, 1000);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    carouselRef.current.classList.add('animate__slideInRight');
    setTimeout(() => {
      carouselRef.current.classList.remove('animate__slideInRight');
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      carouselRef.current.classList.add('animate__slideInRight');
      setTimeout(() => {
        carouselRef.current.classList.remove('animate__slideInRight');
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div>
      <div
        className={classNames('carousel', 'animate__animated', {
          animate__slideInRight: currentIndex !== 0,
        })}
        ref={carouselRef}
      >
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;

/* CSS */
