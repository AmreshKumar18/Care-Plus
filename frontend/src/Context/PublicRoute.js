import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ element }) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user && user.token) {
    return <Navigate to="/" />;
  }

  return element;
}

//
// export default function ProtectedRoute({element}){
//   const user = JSON.parse(sessionStorage.getItem("user"));
// }
