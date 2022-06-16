import React from "react";
import Stars from './components/Stars.js';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Демонстрация отображения рейтинга</h1>
      <Stars />
      <Stars count={1} />
      <Stars count={3} />
      <Stars count={5} />
    </>
  );
}
