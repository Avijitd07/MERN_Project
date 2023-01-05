import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated,user } = useSelector((state) => state.user);
 
    if(!isAuthenticated) {
      return   <Navigate to = "/login"/>}
      else if (user.role !== "admin") {
        return <Navigate to="/login" />;
      }

      return <Outlet/>

};

export default ProtectedRoute;