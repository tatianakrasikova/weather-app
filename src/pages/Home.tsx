import React, { useState } from 'react';
import axios from 'axios';
import { useWeather } from '../context/WeatherContext';
import { WeatherCard } from '../components/WeatherCard';

const API_KEY = "5cb8d1d8de4951cd6e1df311b2b86b24";

// Определяем тип данных для состояния weather
interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

export const Home: React.FC = () => {
  const { addWeatherData } = useWeather();
  const [city, setCity] = useState<string>(""); // Явно задаем тип для city
  const [weather, setWeather] = useState<WeatherData | null>(null); // Указываем, что weather может быть null
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    if (!city.trim()) { // Проверяем, что город введен, убирая пробелы
      alert("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = response.data;

      const weatherData: WeatherData = {
        city: data.name,
        // Округляем температуру
        temperature:  Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      };

      setWeather(weatherData);
      addWeatherData(weatherData);
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard {...weather} />} {/* Пропсы передаются корректно */}
    </div>
  );
};
