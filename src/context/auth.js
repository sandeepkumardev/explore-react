import { createContext, useContext, useState } from "react";

const AppAuth = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <AppAuth.Provider value={user}>{children}</AppAuth.Provider>;
};

export const useAuth = () => {
  const context = useContext(AppAuth);

  if (context === undefined) {
    throw new Error("Store should be used in AuthProvider!");
  }

  return context;
};

export default AuthProvider;
