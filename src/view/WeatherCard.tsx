import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherCard.css';

interface WeatherCardProps {
  heading: string;
  location: string;
  temperature: number;
  weatherCondition: string;
  isDaytime: boolean;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  heading,
  location,
  temperature,
  weatherCondition,
  isDaytime,
  feelsLike,
  humidity,
  pressure,
  windSpeed,
  sunrise,
  sunset,
}) => {
  const weatherClass = weatherCondition.toLowerCase();

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <div className={`weather-card ${weatherClass} ${isDaytime ? 'daytime' : 'nighttime'}`}>
      <div className="top">
        <div className="wrapper">
          <div className="mynav">
            <a href="#"><span className="lnr lnr-cog"></span></a>
          </div>
          <h1 className="heading">{heading}</h1>
          <h3 className="location">{location}</h3>
          <p className="temp">
            <span className="temp-value">{temperature}</span>
            <span className="deg">°</span>
            <a href="#"><span className="temp-type">C</span></a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <ul className="forecast">
            <li>
              <span className="label">Feels Like:</span>
              <span className="value">{feelsLike}°C</span>
            </li>
            <li>
              <span className="label">Humidity:</span>
              <span className="value">{humidity}%</span>
            </li>
            <li>
              <span className="label">Pressure:</span>
              <span className="value">{pressure} hPa</span>
            </li>
            <li>
              <span className="label">Wind Speed:</span>
              <span className="value">{windSpeed} m/s</span>
            </li>
            <li>
              <span className="label">Sunrise:</span>
              <span className="value">{formatTime(sunrise)}</span>
            </li>
            <li>
              <span className="label">Sunset:</span>
              <span className="value">{formatTime(sunset)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
