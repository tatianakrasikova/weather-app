import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { WeatherProvider } from './context/WeatherContext';

const App: React.FC = () => (
  <WeatherProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  </WeatherProvider>
);

export default App;
