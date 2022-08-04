import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "../Pages/404/Error";
import LandingPage from "../Pages/Landing/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Team" element={<TeamPage />} />
        <Route path="Tasks" element={<Tasks />} />
        <Route path="User" element={<UserPage />} /> */}
        {/* <Route path="About" element={<AboutPage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
