import React, { useEffect, useState } from "react";
import { getWeatherByCoords, getWeatherByCityName } from '../services/WeatherService'; 
import WeatherCard from './WeatherCard';
import './Loader.css'

const Weather: React.FC = () => {
  const [coords, setCoords] = useState<{ lat: number, lon: number } | null>(null);
  const [weather, setWeather] = useState<any>(null); 
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeatherByCoords(coords.lat, coords.lon);
    }
  }, [coords]);

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      const data = await getWeatherByCoords(lat, lon);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data by coordinates:', error);
    }
  };

  const fetchWeatherByCity = async (city: string) => {
    try {
      const data = await getWeatherByCityName(city);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data by city:', error);
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeatherByCity(city);
  };

  const isDaytime = (sunrise: number, sunset: number) => {
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime > sunrise && currentTime < sunset;
  };

  return (
    <div className="container">
      <div className="row">
        {weather ? (
          <div className="col">
            <WeatherCard
              heading={weather.weather[0].main}
              location={weather.name}
              temperature={weather.main.temp}
              weatherCondition={weather.weather[0].main}
              isDaytime={isDaytime(weather.sys.sunrise, weather.sys.sunset)}
              feelsLike={weather.main.feels_like}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              windSpeed={weather.wind.speed}
              sunrise={weather.sys.sunrise}
              sunset={weather.sys.sunset}
              city={city}
              handleCityChange={handleCityChange}
              handleSearch={handleSearch}
            />
          </div>
        ) : (
          <div className="water"></div>
        )}
      </div>
    </div>
  );
};

export default Weather;
