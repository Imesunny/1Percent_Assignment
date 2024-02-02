import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import ProtectedRoute from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
