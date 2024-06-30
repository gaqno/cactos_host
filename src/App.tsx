import { SystemProvider } from "./context/SystemContext";
import { UserProvider } from "./context/UserContext";
import DefaultLayout from "./ui/templates/DefaultLayout";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <SystemProvider>
      <UserProvider>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </UserProvider>
    </SystemProvider>
  )
}