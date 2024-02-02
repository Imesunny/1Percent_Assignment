// ProtectedRoutes.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ path, element: Element }) => {
  const isAuthenticated = localStorage.getItem("token") || null;

  return isAuthenticated ? (
    <Route path={path} element={<Element />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
