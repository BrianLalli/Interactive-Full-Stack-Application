import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebar />
    <Footer />
  </React.StrictMode>
);
