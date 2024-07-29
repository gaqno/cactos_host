import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './styles/index';

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