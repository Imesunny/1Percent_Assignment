import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import axios from "axios";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = `http://localhost:8080/`;

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <>
     <ToastContainer />
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
