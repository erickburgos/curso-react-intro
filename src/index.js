import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Creamos una variable root, y ese root nos renderiza dentro del div que teniamos en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
