import { SystemProvider } from "./context/SystemContext";
import { UserProvider } from "./context/UserContext";
import { PrimeReactProvider } from 'primereact/api';
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "./router/hooks/useRouter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext";
import axios, { AxiosError } from "axios";
import Theme from "./Theme";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          const { status } = axiosError.response || {};
          if ([401, 403].includes(status as number)) {
            return;
          }

          if (status) {
            return;
          }
        }
      },
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if ([401, 403].includes(axiosError.response?.status as number)) {
            return;
          }
        }
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if ([401, 403].includes(axiosError.response?.status as number)) {

          return;
        }
      }
    },
  }),
});

function ContentRouters() {
  const { routes } = useRouter();
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default function App() {

  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY}>
      <PrimeReactProvider value={Theme ?? null}>
        <QueryClientProvider client={queryClient}>
          <SystemProvider>
            <UserProvider>
              <MessageProvider>
                <ContentRouters />
              </MessageProvider>
            </UserProvider>
          </SystemProvider>
        </QueryClientProvider>
      </PrimeReactProvider>
    </ClerkProvider>
  )
}