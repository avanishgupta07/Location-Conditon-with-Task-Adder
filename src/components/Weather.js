import React, { useState, useEffect } from 'react';
import '../styles/App.css'; // Import the CSS file for styling

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aba6ff9d6de967d5eac6fd79114693cc&units=metric`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setError('Unable to retrieve your location. Please check your browser settings.');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getCurrentLocation();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading weather...</p>;
  }

  if (error) {
    return <p className="error-text">Error: {error}</p>;
  }

  return (
    <div className="weather-container">
      {weather && (
        <div className="weather-info">
          <h5 className="weather-title">Weather</h5>
          <div className="weather-details">
            <p className="temperature">
              <span className="temperature-value">{weather.main.temp}°C</span>
            </p>
            <p className="condition">
              <span className="condition-value">{weather.weather[0].description}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
