import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProtectedRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const notify = (message) => toast(message);

  useEffect(() => {
    let login = localStorage.getItem("token");
    console.log(login, 'from protected component');
    if (!login) {
      const is_Alert= "Please Login First"
      toast.error(is_Alert, {
        position: "top-center"
      });
      navigate('/login');
    }
  },[]);

  return (
    <div>
      {/* abc -for check */}
      <Component />
    </div>
  );
};

export default ProtectedRoutes;
