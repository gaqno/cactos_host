import Navbar from "../components/navigation/Navbar";
import Drawer from "../components/navigation/Drawer";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function DefaultLayout({ children }) {
  return (
    <div data-theme="cupcake">
      <SignedOut>
        <div className="flex h-screen flex-col bg-white">
          <div className="flex flex-1 items-center justify-center">
            <div className="mx-auto max-w-xl px-4 py-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Olá, por favor faça login!
              </h1>

              <p className="mt-4 text-gray-500">
                Para acessar o chat e os arquivos carregados, faça login.
              </p>

              <SignInButton>
                <button className="mt-8">Login</button>
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Navbar />
        <Drawer>
          {children}
        </Drawer>
      </SignedIn>
    </div>
  )
}