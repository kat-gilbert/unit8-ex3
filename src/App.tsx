import React from 'react';
import './App.css';
import { UpDownCounter } from './components/UpDownCounter';

function App() {
  return (
    <div className="container">
<h1>Up Down Counter</h1>
    <UpDownCounter />
    <UpDownCounter />
    <UpDownCounter />
    </div>
  );
}

export default App;
