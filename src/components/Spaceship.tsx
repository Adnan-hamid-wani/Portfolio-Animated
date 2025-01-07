import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import animationData from '../astro.json';

const Spaceship: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Load the Lottie animation
  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, []);

  const positionStyle = {
    transform: `translateY(${scrollY * 0.98}px)`,  
    transition: 'transform 0.8s ease-out',  
  };

  return (
    <div
      ref={animationContainer}
      style={{
        width: '100%',     
        height: '100vh',   
        position: 'absolute',
        top: '30',        // Position from top to center
        left: '0',       // Position from left to center
        ...positionStyle,  
        overflow: 'hidden', 
        zIndex: -1,      
      }}
    />
  );
};

export default Spaceship;
