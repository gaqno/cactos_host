import { ISystemConfiguration } from "@cactos_tools/Interfaces";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import SYSTEM_CONFIGURATION from "@cactos_tools/SystemConfiguration";

const SystemContext = createContext({} as {
  system: ISystemConfiguration;
  setSystem: (newSystem: ISystemConfiguration) => void;
});

export const useSystemContext = () => useContext(SystemContext);

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [system, setSystem] = useState({ ...SYSTEM_CONFIGURATION } as ISystemConfiguration);

  return (
    <SystemContext.Provider value={{
      system,
      setSystem: (newSystem: ISystemConfiguration) => setSystem({ ...newSystem })
    }}>
      {children}
    </SystemContext.Provider>
  );
};
