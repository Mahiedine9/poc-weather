import { useEffect, useState } from "react";
import axios from 'axios';
import WeatherCard from './WeatherCard'; 

const API_KEY = "c6dea39f86ea31dc114f0a4f0eec8fa9";

interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    name: string;
}

const Weather: React.FC = () => {
    const [coords, setCoords] = useState<{ lat: number, lon: number } | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        }, (error) => {
            console.error('Error getting location:', error);
        });
    }, []);

    useEffect(() => {
        const cachedWeather = localStorage.getItem('weatherData');
        const cachedCoords = localStorage.getItem('coords');

        if (cachedWeather && cachedCoords) {
            const parsedWeather = JSON.parse(cachedWeather);
            const parsedCoords = JSON.parse(cachedCoords);
            const currentTime = new Date().getTime();
            const cacheTime = parsedWeather.timestamp;
            const cacheDuration = 10 * 60 * 1000; 

            if (currentTime - cacheTime < cacheDuration &&
                parsedCoords.lat === coords?.lat && parsedCoords.lon === coords?.lon) {
                setWeather(parsedWeather.data);
                return;
            }
        }

        if (coords) {
            getWeather();
        }
    }, [coords]);

    const getWeather = async () => {
        if (coords) {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        lat: coords.lat,
                        lon: coords.lon,
                        appid: API_KEY,
                        units: 'metric',
                    }
                });
                const weatherData = { data: response.data, timestamp: new Date().getTime() };
                localStorage.setItem('weatherData', JSON.stringify(weatherData));
                localStorage.setItem('coords', JSON.stringify(coords));
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    };

    const isDaytime = (sunrise: number, sunset: number) => {
        const now = new Date().getTime() / 1000;
        return now > sunrise && now < sunset;
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
                            forecast={[{          // The API with the current URL does not allow retrieving the temperature based on the date, so this option is currently static.
                                date: 'Tomorrow',
                                condition: 'Sunny', 
                                temp: weather.main.temp 
                            }]}
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