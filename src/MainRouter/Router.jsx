import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pagess/HomePage";
import Login from "../Pages/Login";
import Admin from "../Pagess/Admin";
import Cart from "../Pagess/Cart";
import PrivateRoute from "../Components/PrivateRoute";
import ProductDetails from "../Pagess/SingleProductPage";
import EditPage from "../Pagess/EditPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/products/:id"
        element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
