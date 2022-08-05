import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import App from "./App/App";
import PHnavbar from "./components/navbar/PHnavbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
