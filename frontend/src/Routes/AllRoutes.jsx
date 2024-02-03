import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import AddUser from "../Components/AddUser";
import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<ProtectedRoutes Component={HomePage} />} />

      <Route path="/addUser" element={<AddUser />} />
    </Routes>
  );
};

export default AllRoutes;
