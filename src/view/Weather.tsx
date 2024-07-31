import { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY = "c6dea39f86ea31dc114f0a4f0eec8fa9";
export const Weather = () => {
    const [coords, setCoords] = useState<{ lat: number, lon: number } | null>(null);
    const [weather, setWeather] = useState<any>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoords({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        });
    }, []);

    const getWeather = async () => {
        if (coords) {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: coords.lat,
                    lon: coords.lon,
                    appid: API_KEY,
                    units: 'metric',
                }
            });
            setWeather(response.data);
        }
    };

    useEffect(() => {
        if (coords) {
            getWeather();
        }
    }, [coords]);

    return (
        <div>
            {weather ? (
                <div>
                    <h1>{weather.name}</h1>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );


};
