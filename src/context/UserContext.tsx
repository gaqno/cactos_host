import {
  ReactNode,
  createContext,
  useContext,
} from "react";
import { useUser } from "@clerk/clerk-react";

interface IUserContextValue {
  user: ClerkAuthorization;
}

const UserContext = createContext({} as IUserContextValue);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return "<LoadingPage />";
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
