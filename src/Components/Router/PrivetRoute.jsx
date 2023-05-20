import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  } else {
    Swal.fire("You have to log in first to view details");
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
