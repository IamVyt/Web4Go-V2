import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initAdaptiveGrid } from './lib/adaptive-grid';
import { initLenis } from './lib/scroll';

initAdaptiveGrid();
initLenis();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
