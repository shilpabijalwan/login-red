import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Login from "../Pages/Login";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  // console.log(location);
  const { isAuth } = useSelector((data) => {
    return data.authReducer;
  });
  //   console.log(isAuth);
  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
}
