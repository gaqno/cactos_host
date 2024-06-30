interface ISideMenu {
  options: React.ReactNode;
  children: React.ReactNode;
}

export default function Sidemenu({ children, options }: ISideMenu) {
  return (
    <>
      <div className="border self-start rounded-box">
        {options}
      </div>
      <div className="border h-full w-full self-start rounded-box">
        {children}
      </div>
    </>
  );
}