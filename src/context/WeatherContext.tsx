import React, { createContext, useState, useContext } from 'react';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

interface WeatherContextType {
  history: WeatherData[];
  addWeatherData: (data: WeatherData) => void;
  clearHistory: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<WeatherData[]>([]);

  const addWeatherData = (data: WeatherData) => setHistory((prev) => [...prev, data]);
  
  const clearHistory = () => setHistory([]);

  return (
    <WeatherContext.Provider value={{ history, addWeatherData, clearHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a WeatherProvider");
  return context;
};
