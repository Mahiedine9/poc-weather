import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherCard.css';


interface WeatherCardProps {
  heading: string;
  location: string;
  temperature: number;
  weatherCondition: string;
  forecast: { date: string; condition: string; temp: number }[];
}

const WeatherCard: React.FC<WeatherCardProps> = ({ heading, location, temperature, weatherCondition, forecast }) => {
  return (
    <div className={`weather-card ${weatherCondition.toLowerCase()}`}>
      <div className="top">
        <div className="wrapper">
          <div className="mynav">
            <a href="#"><span className="lnr lnr-chevron-left"></span></a>
            <a href="#"><span className="lnr lnr-cog"></span></a>
          </div>
          <h1 className="heading">{heading}</h1>
          <h3 className="location">{location}</h3>
          <p className="temp">
            <span className="temp-value">{temperature}</span>
            <span className="deg">0</span>
            <a href="#"><span className="temp-type">C</span></a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <ul className="forecast">
            <a href="#"><span className="lnr lnr-chevron-up go-up"></span></a>
            {forecast.map((day, index) => (
              <li key={index} className={index === 0 ? 'active' : ''}>
                <span className="date">{day.date}</span>
                <span className={`lnr lnr-${day.condition.toLowerCase()} condition`}>
                  <span className="temp">{day.temp}<span className="deg">0</span><span className="temp-type">C</span></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
