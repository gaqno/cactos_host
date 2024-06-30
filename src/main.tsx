import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AssistantModuleMF from './pages/assistant';
import FinancingModuleMF from './pages/financing';
import Home from './pages/home';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/assistente', element: <AssistantModuleMF /> },
        { path: '/financeiro', element: <FinancingModuleMF /> },
      ],
    },
  ]);

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={process.env.VITE_APP_CLERK_PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </React.StrictMode>,
  );
}
