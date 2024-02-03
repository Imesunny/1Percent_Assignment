import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Modules/signUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const notify = (message) => toast(message);
  const Navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userObject = {
        username,
        email,
        password,
        profileImage,
      };

      const response = await axios.post(`/user/signup`, userObject);

      const toAlert = response.data.message;
      toast.info(toAlert, {
        position: "top-center",
      });
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form className="formss" onSubmit={handleFormSubmit}>
          <h2>User Signup</h2>
          <label>Enter User Name: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>

          <label>Enter Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Enter Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <label>Upload Profile Image (Optional): </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          ></input>

          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default SignUp;
