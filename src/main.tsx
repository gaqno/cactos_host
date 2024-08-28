import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './global.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';// theme
import 'primereact/resources/primereact.css'; // core css

declare global {
  interface ImportMeta {
    env: {
      VITE_APP_CLERK_PUBLISHABLE_KEY: string;
      VITE_APP_OPENAI_API_KEY: string;
    };
  }
}

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);