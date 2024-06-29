import DefaultLayout from "./ui/partials/DefaultLayout";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}