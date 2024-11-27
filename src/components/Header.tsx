import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';



export const Header: React.FC = () => (

     <header className={styles.header}>
    <h1>Weather App</h1>
    <nav>
    
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/history"}>History</NavLink>
    </nav>
  </header>
);
