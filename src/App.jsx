import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import QrCodeReader from "./components/reader/reader-custom";
import QRCodeGeneratorButton from "./components/generator/QRCodeGeneratorButton";
import Login from "./components/loginForm/login_form";
import LogoutButton from "./components/logout/LogoutButton";
import AdminDashboard from "./components/adminDashboard/AdminDashBoard";
import Navbar from "./components/navbar/navbar";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import About from "./components/about/About";
import Home from "./components/home/home_page";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí se renderizarán los componentes hijos */}
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            >              
              <Route path="readeru" element={<QrCodeReader />} />
              <Route path="generators" element={<QRCodeGeneratorButton />}
            />
            </Route>
            {/**<QrCodeGenerator value="googlemarisca.com" size={350} /> */}
            <Route
              path="/logout"
              element={
                <PrivateRoute>
                  <LogoutButton />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
