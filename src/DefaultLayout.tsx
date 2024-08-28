import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "primereact/button";
import { Outlet } from "react-router-dom";
import { Fab } from "./ui/components/Fab/Fab";
import Navbar from "@/ui/components/Navbar/Navbar";

export default function DefaultLayout() {
  return (
    <div>
      <SignedOut>
        <div className="h-screen flex gap-2 bg-white items-center dark:bg-slate-800 flex-row text-center justify-center">
          <img src="http://via.placeholder.com/1000x1200" alt="Logo" />
          <div className="items-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Olá, por favor faça login!
            </h1>

            <p className="mt-4 text-gray-500">
              Para acessar o conteúdo da aplicação, por favor faça login.
            </p>

            <SignInButton>
              <Button className="w-sm" severity="danger" label="Entrar" />
            </SignInButton>

          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex flex-row">
          <Navbar />
          <div className="overflow-y-auto h-[calc(100vh_-_5rem)] w-screen p-2 bg-[#F6F6F6] dark:bg-slate-600">
            <Fab />
            <Outlet />
          </div>
        </div>
      </SignedIn>
    </div>
  )
}