import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route to="/home" element={<h1>Home</h1>} />
          <Route to="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
