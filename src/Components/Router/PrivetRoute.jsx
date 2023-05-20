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
    Swal.fire("Any fool can use a computer");
  }
  return <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoute;
