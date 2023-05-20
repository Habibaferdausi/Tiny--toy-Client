import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  if (user) {
    return children;
  } else {
    Swal.fire("You have to log in first to view details");
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
