import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pagess/HomePage";
import Login from "../Pages/Login";
import Admin from "../Pagess/Admin";
import Cart from "../Pagess/Cart";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
