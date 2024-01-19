// import React from "react";
import { Navigate } from "react-router-dom";
// import Spinner from "../components/Spinner/Spinner";

const checkGuest = (Component) => {
  const AuthenticatedComponent = (props) => {
    if (props.logged) {
      return <Navigate to="/dashboard" />;
    }
    if (!props.logged) {
      return <Component {...props} />;
    }
  };

  return AuthenticatedComponent;
};

export default checkGuest;
