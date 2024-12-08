import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Start = () => {
  // Images for the slider
  const sliderImages = [
    'https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1585393948915-011d724d4c2e?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1716339362685-f3e74cabaf69?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1696775111322-ae6e7a046964?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    'https://images.unsplash.com/photo-1597783406018-d862f18be776?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1653655165500-a4d942520d91?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1516083649464-1740d081bc44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRheGl8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1530327316698-3ced5209f50a?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
  
  
  ];

  // State for current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url(${sliderImages[currentIndex]})`,
          transform: 'scale(1.02)',
          filter: 'brightness(0.7)' 
        }}
      />

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition z-20"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 transition z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Uber Logo */}
      <img 
        className='absolute top-8 left-8 w-16 z-20' 
        src='https://www.logo.wine/a/logo/Uber/Uber-White-Dark-Background-Logo.wine.svg' 
        alt="Uber Logo" 
      />

      {/* Bottom Content */}
      <div className='absolute bottom-0 left-0 right-0 bg-white pb-7 py-4 px-4 z-20'>
        <h2 className='text-3xl font-extralight'>Get started with Uber</h2>
        <Link 
          to='/login' 
          className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 hover:bg-gray-800 transition'
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start