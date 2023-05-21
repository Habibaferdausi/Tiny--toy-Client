import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (loading === false) {
      setAuthChecked(true);
    }
  }, [loading]);

  if (!authChecked) {
    return null; // Return null or a loading indicator while authentication status is being determined
  }

  if (user) {
    return children;
  } else {
    Swal.fire("You have to log in first to view details");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
