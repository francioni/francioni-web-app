import React from 'react';
import logo from './logo.svg';
import data from './data';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <HomePage data={data.home} />
  );
}

export default App;
