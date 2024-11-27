import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, icon }) => (
  <div className="weather-card">
    <h2>{city}</h2>
    <p>{description}</p>
    <p>{temperature}°C</p>
    <img src={icon} alt="weather icon" />
  </div>
);
