import React, { useEffect, useRef } from 'react';
import './WeatherDisplay.css';

const Snow = () => {
  const snowContainerRef = useRef(null);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
      snowflake.style.opacity = `${0.5 + Math.random() * 0.5}`;
      snowflake.style.width = `${2 + Math.random() * 3}px`;
      snowflake.style.height = `${2 + Math.random() * 3}px`;
      snowContainerRef.current.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    };

    const interval = setInterval(createSnowflake, 100);

    return () => clearInterval(interval);
  }, []);

  return <div ref={snowContainerRef} className="snow-container"></div>;
};

export default Snow;
