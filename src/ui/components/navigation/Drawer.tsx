import SYSTEM_CONFIGURATION from "@cactos_tools/SystemConfiguration"
import { Link, useNavigation } from "react-router-dom";

export default function Drawer({ children }) {
  const navigation = useNavigation()
  
  return (
    <div className="drawer lg:drawer-open w-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-auto flex justify-center px-4 pt-20">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-20">
          {SYSTEM_CONFIGURATION.routes.map((route, index) => (
            <li key={index}>
              <Link to={route.href} className={`${navigation.state === route.href ? 'bg-slate-200' : ''}`}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}