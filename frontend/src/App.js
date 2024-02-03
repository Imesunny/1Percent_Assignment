import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import axios from "axios";
import { ToastContainer } from "react-toastify";



function App() {
  // const notify = () => toast("Wow so easy!");
  axios.defaults.baseURL = `http://localhost:8080/`;
  // axios.defaults.baseURL = `https://important-sock-pike.cyclic.app/s`;
  return (
    <>
     <ToastContainer />
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
