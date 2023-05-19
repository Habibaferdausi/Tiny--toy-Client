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
    const errorMessage = "Please login to access this page.";
    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
