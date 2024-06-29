import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AssistantModuleMF from './pages/assistant';
import FinancingModuleMF from './pages/financing';
import DefaultLayout from './ui/partials/DefaultLayout';
import Home from './pages/home';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const PUBLISHABLE_KEY = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY as string;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </React.StrictMode>,
  );
}
