import React, { useState } from 'react';
// import image1 from '../assets/images/banner2.jpg';
// import image2 from '../assets/images/banner3.jpg;'
// import image3 from '../assets/images/bannner4.avif'


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentSlide]} alt="Carousel slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
