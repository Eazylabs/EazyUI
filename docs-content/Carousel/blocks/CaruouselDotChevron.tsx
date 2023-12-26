import React, { useState } from 'react';
import '../styles/style.css';

export default function CarouselDotChevron() {
  const [slideIndex, setSlideIndex] = useState(0);

  const imageSlide = [
    {
      img: 'https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <div className='carousel'>
      {imageSlide.map((item, index) => (
        <div className={`fade ${index != slideIndex && 'slide'}`}>
          <img src={item.img} alt='image' />
        </div>
      ))}

      <button
        className='prev'
        onClick={() => {
          setSlideIndex((prev) => (prev - 1 < 0 ? imageSlide.length - 1 : prev - 1));
        }}
      >
        &#8249;
      </button>
      <button
        className='next'
        onClick={() => {
          setSlideIndex((prev) => (prev + 1 > imageSlide.length - 1 ? 0 : prev + 1));
        }}
      >
        &#8250;
      </button>

      <div className='dots'>
        {imageSlide.map((_, i) => (
          <span
            className={`dot-chevron ${i == slideIndex && 'active'}`}
            onClick={() => {
              setSlideIndex(i);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
