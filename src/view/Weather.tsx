import { useEffect, useState } from "react";
import axios from 'axios';
import WeatherCard from './WeatherCard';

const API_KEY = "c6dea39f86ea31dc114f0a4f0eec8fa9";

interface WeatherData {
    coord: { lon: number; lat: number };
    weather: Array<{ id: number; main: string; description: string; icon: string }>;
    main: { temp: number; feels_like: number; temp_min: number; temp_max: number; pressure: number; humidity: number };
    wind: { speed: number; deg: number };
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: number;
    name: string;
}

const Weather: React.FC = () => {
    const [coords, setCoords] = useState<{ lat: number, lon: number } | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
        }, (error) => {
            console.error('Error getting location:', error);
        });
    }, []);

    useEffect(() => {
        if (coords) {
            getWeather();
        }
    }, [coords]);

    const getWeather = async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: { lat: coords?.lat, lon: coords?.lon, appid: API_KEY, units: 'metric' }
            });
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
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
                        />
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Weather;
