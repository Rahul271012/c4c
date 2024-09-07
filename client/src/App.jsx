import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
