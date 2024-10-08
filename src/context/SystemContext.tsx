import HOST_CONFIGURE from "@/constant/Configure";
import { ReactNode, useState } from "react";
import { createContext, useContext } from "use-context-selector";

interface ISystemContextValue {
  app: typeof HOST_CONFIGURE;
  setApp: (config: typeof HOST_CONFIGURE) => void;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const SystemContext = createContext({} as ISystemContextValue);
export const useSystemContext = () => useContext(SystemContext);

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  let [app, setApp] = useState({
    ...HOST_CONFIGURE,
  });
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  function handleOpen() {
    setIsDrawerOpen(true);
  }

  function handleClose() {
    setIsDrawerOpen(false);
  }

  return (
    <SystemContext.Provider
      value={{
        app,
        setApp,
        isDrawerOpen,
        toggleDrawer: () => {
          isDrawerOpen ? handleClose() : handleOpen();
        },
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
