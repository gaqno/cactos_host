import { UserButton } from "@clerk/clerk-react";
import { Icon } from '@iconify/react';
import SYSTEM_CONFIGURATION from "@cactos_tools/SystemConfiguration"

export default function Navbar({ theme, onThemeChange }) {
  return (
    <div className="navbar bg-base-100 fixed z-10 border-b">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{SYSTEM_CONFIGURATION.title}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Pesquisar" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="hidden md:block">
          {theme === 'light' ? (
            <button onClick={onThemeChange} className="btn btn-ghost btn-sm">
              <Icon fontSize={24} icon="line-md:moon-alt-to-sunny-outline-loop-transition" />
            </button>
          ) : (
            <button onClick={onThemeChange} className="btn btn-ghost btn-sm">
              <Icon fontSize={24} icon="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition" />
            </button>
          )}
        </div>
        <UserButton />
      </div>
    </div>
  )
}