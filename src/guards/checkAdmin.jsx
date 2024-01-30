// import React from "react";
import { Navigate } from "react-router-dom";
// import Spinner from "../components/Spinner/Spinner";

const checkAdmin = (Component) => {
  const AuthenticatedComponent = (props) => {
    if (!props.logged) {
      return <Navigate to=".." />;
    }

    if (props.logged) {
      return <Component {...props} />;
    }
  };

  return AuthenticatedComponent;
};

export default checkAdmin;
