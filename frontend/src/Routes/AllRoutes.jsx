import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import AddUser from "../Components/AddUser";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path ='/addUser' element={<AddUser/>}/>
    </Routes>
  );
};

export default AllRoutes;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SignUp from "../Pages/SignUp";
// import Login from "../Pages/Login";
// import HomePage from "../Pages/HomePage";
// import ProtectedRoute from "./ProtectedRoutes";
// import AddUser from "../Components/AddUser";

// const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SignUp />} />
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="*"
//         element={
//           <ProtectedRoute>
//             <HomePage />
//           </ProtectedRoute>
//         }
//       />
//       <Route path ='/addUser' element={<AddUser/>}/>
//     </Routes>
//   );
// };

// export default AllRoutes;