import { Link, useLocation } from "react-router-dom";

interface ISideMenu {
  children: React.ReactNode;
  options: {
    title: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
}

export default function Sidemenu({ children, options }: ISideMenu) {
  let location = useLocation();

  return (
    <>
      <div className="border bg-info w-[50%] self-start rounded-box">
        {options.map((option, index) => (
          <div key={index} className="p-2">
            <h3 className="text-lg font-bold">{option.title}</h3>
            {option.items.map((item, index) => (
              <Link key={index} to={item.href} className={`block ${location.pathname === item.href ? 'bg-gray-200' : ''} p-2 rounded`}>
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border w-full self-start rounded-box">
        {children}
      </div>
    </>
  );
}