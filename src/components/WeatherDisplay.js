import React from 'react';
import './WeatherDisplay.css';
import Rain from './Rain';
import Snow from './Snow';

const WeatherDisplay = ({ weather }) => {
  const renderWeather = () => {
    switch (weather) {
      case 'sunny':
        return <div className="weather-sunny"></div>;
      case 'cloudy':
        return <div className="weather-cloudy"></div>;
      case 'rainy':
        return (
          <div className="weather-rainy">
            <Rain />
          </div>
        );
      case 'snowy':
        return (
          <div className="weather-snowy">
            <Snow />
          </div>
        );
      default:
        return <div className="weather-sunny"></div>;
    }
  };

  return (
    <div className="weather-display">
      {renderWeather()}
    </div>
  );
};

export default WeatherDisplay;