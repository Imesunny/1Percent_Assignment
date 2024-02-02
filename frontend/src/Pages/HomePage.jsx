import React from "react";
import { Link } from "react-router-dom";
import AddUser from "../Components/AddUser";
import Todos from "../Components/Todos";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home Page!</h1>
      <div>
        <AddUser />
      </div>
      <div style={{ margin: "5% 0 0 25%" }}>
        <Todos />
      </div>
    </>
  );
};

export default HomePage;
