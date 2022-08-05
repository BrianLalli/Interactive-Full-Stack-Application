import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/footer";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    state = {
      
    }
  }


  render() {
    <>
      <Sidebar />
      <Footer />
    </>;
  }
}
