import { UserButton } from "@clerk/clerk-react";
import SYSTEM_CONFIGURATION from "@cactos_tools/SystemConfiguration"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed z-10 border-b">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{SYSTEM_CONFIGURATION.title}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <UserButton />
      </div>
    </div>
  )
}