import axios from 'axios';

const API_KEY = "c6dea39f86ea31dc114f0a4f0eec8fa9";
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCoords = async (lat: number, lon: number) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data by coordinates:', error);
        throw error;
    }
};

export const getWeatherByCityName = async (cityName: string) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: cityName,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data by city name:', error);
        throw error;
    }
};
