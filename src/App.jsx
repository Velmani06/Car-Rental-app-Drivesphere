import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import VechicleListing from "./Pages/VechicleListing";
import DealerLocation from "./Pages/DealerLocation";
import GetApp from "./Pages/GetApp";
import OurNews from "./Pages/OurNews";
import Contact from "./Pages/Contact";
import LogInSection from "./Pages/LogInSection";
import SignUp from "./Pages/SignUp";
import VehicleDetails from "./components/Rental fleets/VehicleDetails";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/loginUser" replace />
            )
          }
        />

        {/* Public Routes */}
        <Route path="/loginUser" element={<LogInSection />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Layout /> : <Navigate to="/loginUser" replace />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="vechileListing" element={<VechicleListing />} />
          <Route path="vehicle/:id" element={<VehicleDetails />} />
          <Route path="dealerLocation" element={<DealerLocation />} />
          <Route path="getApp" element={<GetApp />} />
          <Route path="ourNews" element={<OurNews />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Unknown paths redirect */}
        <Route path="*" element={<Navigate to="/loginUser" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
