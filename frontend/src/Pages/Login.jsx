import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Modules/forms.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message) => toast(message);

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/user/login`, {
        email,
        password,
      });
      console.log(response, 'response')
      const is_Alert = response.data.message;

      toast.info(is_Alert, {
        position: "top-center"
      });

      const tokenReceived = response.data.token;
      console.log("TOKEN :" + tokenReceived);

      if (tokenReceived) {
        localStorage.setItem("token", tokenReceived);
        Navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <form className="formss" onSubmit={handleLoginForm}>
          <h2>User Login</h2>

          <label>Enter Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Enter Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default Login;
