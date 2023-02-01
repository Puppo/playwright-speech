import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';

import AuthContext, { AuthType } from "../Contexts/authContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  priv: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, priv }) => {

  const { userData } = useContext(AuthContext) as AuthType;

  if (!!userData.email === priv) {
    return <>{children}</>;
  } else {
    return <Navigate to={{
      pathname: priv ? "/login" : "/"
    }} />
  }


};

export default ProtectedRoute;
