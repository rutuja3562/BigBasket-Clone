import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "./Context/AuthContext";


export const PrivateComponent = ({ children}) => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate()
  if (auth) {
    return children
  }
  return <Navigate to="/login" />;
  
};
