import React, { useEffect, useRef } from 'react';
import './WeatherDisplay.css';

const Rain = () => {
  const rainContainerRef = useRef(null);

  useEffect(() => {
    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.classList.add('rain');
      raindrop.style.left = `${Math.random() * 100}%`;
      raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
      raindrop.style.opacity = `${0.5 + Math.random() * 0.5}`;
      rainContainerRef.current.appendChild(raindrop);

      raindrop.addEventListener('animationend', () => {
        raindrop.remove();
      });
    };

    const interval = setInterval(createRaindrop, 50);

    return () => clearInterval(interval);
  }, []);

  return <div ref={rainContainerRef} className="rain-container"></div>;
};

export default Rain;
