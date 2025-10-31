import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import UpperNav from "../components/UperNav/UpperNav";

function Layout() {
  return (
    <div>
      <UpperNav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
