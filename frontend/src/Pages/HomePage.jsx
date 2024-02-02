import React from "react";
import { Link } from "react-router-dom";
import AddUser from "../Components/AddUser";
import Todos from "../Components/Todos";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Welcome to the Home Page!</h1>
      </div>

      <AddUser />
      <Todos />
    </>
  );
};

export default HomePage;
