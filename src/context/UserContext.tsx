import {
  ReactNode,
  createContext,
  useContext,
} from "react";
import { useUser } from "@clerk/clerk-react";
import LoadingPage from "../ui/templates/LoadingPage";

interface IUserContextValue {
  user: ClerkAuthorization;
}

const UserContext = createContext({} as IUserContextValue);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <LoadingPage />;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
