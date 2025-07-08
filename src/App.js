import React, { useState, useEffect } from 'react';
import { Button, Layout, Spin, Typography } from 'antd';
import './App.css';
import 'antd/dist/reset.css';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeatherByCoords } from './services/weatherService';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [weatherType, setWeatherType] = useState('sunny'); // Default weather type for display
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      setError(null);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeatherByCoords(latitude, longitude);
          if (data) {
            setCurrentWeather(data);
            // Determine weather type based on API data
            if (data.weather && data.weather.length > 0) {
              const mainWeather = data.weather[0].main.toLowerCase();
              if (mainWeather.includes('clear')) {
                setWeatherType('sunny');
              } else if (mainWeather.includes('cloud')) {
                setWeatherType('cloudy');
              } else if (mainWeather.includes('rain')) {
                setWeatherType('rainy');
              } else if (mainWeather.includes('snow')) {
                setWeatherType('snowy');
              } else {
                setWeatherType('sunny'); // Default if no match
              }
            }
          } else {
            setError('Failed to fetch weather data.');
          }
          setLoading(false);
        }, (err) => {
          console.error("Geolocation error:", err);
          setError('Geolocation denied or unavailable. Please enable location services.');
          setLoading(false);
        });
      } else {
        setError('Geolocation is not supported by your browser.');
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  const handleWeatherChange = (newWeather) => {
    setWeatherType(newWeather);
  };

  return (
    <Layout className="App">
      <Header className="App-header">
        <Title level={2} style={{ color: 'white', margin: 0 }}>Weather Motion</Title>
        <nav>
          <Button type="primary" onClick={() => handleWeatherChange('sunny')}>Sunny</Button>
          <Button type="primary" onClick={() => handleWeatherChange('cloudy')}>Cloudy</Button>
          <Button type="primary" onClick={() => handleWeatherChange('rainy')}>Rainy</Button>
          <Button type="primary" onClick={() => handleWeatherChange('snowy')}>Snowy</Button>
        </nav>
      </Header>
      <Content className="App-main">
        {loading && <Spin size="large" tip="Loading weather..." />}
        {error && <Title level={4} type="danger">{error}</Title>}
        {!loading && !error && currentWeather && (
          <div className="weather-info">
            <Title level={3}>{currentWeather.name}</Title>
            <Title level={4}>{currentWeather.main.temp}°C</Title>
            <Title level={4}>{currentWeather.weather[0].description}</Title>
          </div>
        )}
        <WeatherDisplay weather={weatherType} />
      </Content>
    </Layout>
  );
}

export default App;
