import { useUser } from "@clerk/clerk-react";

export default function useClerk() {
  const { user, isLoaded, isSignedIn } = useUser();

  return {
    user,
    isLoaded,
    isSignedIn
  };
}