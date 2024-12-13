import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ element }) {
  // Fetch the user data from session storage
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Check if user exists and is an admin
  if (user && user.token && user.isAdmin) {
    return element; // If user is an admin, render the protected route
  }

  // If not an admin, redirect to login or home
  return <Navigate to="/login" />;
}
