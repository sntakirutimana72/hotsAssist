import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Root Element cannot be of type null');
}
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
