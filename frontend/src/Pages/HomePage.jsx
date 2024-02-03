// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AddUser from "../Components/AddUser";
// import Todos from "../Components/Todos";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/addUser");
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h1>Welcome to the Home Page!</h1>
//       </div>

//       <div className="add-user-container">
//         <button onClick={handleButtonClick}>ADD USER</button>
//       </div>

//       <Todos />
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";
import Todos from "../Components/Todos";

const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log(token,"token from HomePage");

  if (!token) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Please Login</h1>
      </div>
    );
  }

  const handleButtonClick = () => {
    navigate("/addUser");
  };

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

      <div className="add-user-container">
        <button onClick={handleButtonClick}>ADD USER</button>
      </div>

      <Todos />
    </>
  );
};

export default HomePage;
