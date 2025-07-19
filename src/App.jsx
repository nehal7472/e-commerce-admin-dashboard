import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import NewUser from "./pages/NewUser";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />} />
            <Route path="products" element={<Product />} />
            <Route path="customer" element={<Customer />} />
            <Route path="search" element={<Search />} />
            <Route path="create-new-customer" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
