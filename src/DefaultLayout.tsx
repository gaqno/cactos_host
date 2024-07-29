import Navbar from "@/ui/components/Navbar/Navbar";
import Drawer from "@/ui/components/Drawer/Drawer";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "primereact/button";
import { Outlet } from "react-router-dom";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <SignedOut>
        <div className="h-screen flex flex-column align-items-center justify-content-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Olá, por favor faça login!
          </h1>

          <p className="mt-4 text-gray-500">
            Para acessar o chat e os arquivos carregados, faça login.
          </p>

          <SignInButton>
            <Button style={{ marginTop: 4 }}  severity="danger" label="Entrar" />
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="h-screen flex flex-row">
          <Drawer />
          <div className="flex flex-column w-screen">
            <Navbar />
            <div className="overflow-y-auto h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  )
}