import React, { createContext, useContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const handleAuth = (state) => {
    setAuth(!state)
  };
  return <AuthContext.Provider value={{auth,handleAuth}}>{children}</AuthContext.Provider>;
};
