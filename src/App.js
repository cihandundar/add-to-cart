import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "components";
import { Basket, Home, Login } from "pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
