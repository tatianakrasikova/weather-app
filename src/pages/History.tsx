import React from 'react';
import { useWeather } from '../context/WeatherContext';
import { WeatherCard } from '../components/WeatherCard';

export const History: React.FC = () => {
  const { history, clearHistory } = useWeather();

  return (
    <div>
      <h2>History</h2>
      {history.length > 0 ? (
        <>
          <button onClick={clearHistory}>Delete all cards</button>
          {history.map((data, index) => (
            <WeatherCard key={index} {...data} />
          ))}
        </>
      ) : (
        <p>No history yet</p>
      )}
    </div>
  );
};
