import React from 'react'; // Make sure React is imported
import ReactDOM from 'react-dom/client'; // Use standard React DOM
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Use standard React mounting
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);