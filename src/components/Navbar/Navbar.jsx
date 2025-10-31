// Navbar.jsx
import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // ✅ Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Scroll behavior for background transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle login/logout click
  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/loginUser");
    } else {
      navigate("/loginUser");
    }
  };

  return (
    <>
      {/* ---- TOP CONTACT BAR ---- */}
      <div className="fixed top-0 left-0 w-full bg-[#000000e0] text-white text-sm z-50 flex justify-between items-center px-[10%] h-10 max-md:hidden">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <i className="ri-phone-line text-[#DC2D13]"></i>
            +91 9345418101
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-mail-line text-[#DC2D13]"></i>
            velmani0006@gmail.com
          </span>
        </div>

        {/* Top bar right-side socials */}
        <div className="flex items-center gap-3">
          <Link to="https://facebook.com" target="_blank">
            <i className="ri-facebook-circle-line hover:text-[#DC2D13]"></i>
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <i className="ri-instagram-line hover:text-[#DC2D13]"></i>
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <i className="ri-twitter-line hover:text-[#DC2D13]"></i>
          </Link>
          <Link to="https://youtube.com" target="_blank">
            <i className="ri-youtube-line hover:text-[#DC2D13]"></i>
          </Link>
        </div>
      </div>

      {/* ---- MAIN NAVBAR ---- */}
      <div
        className={`fixed top-10 left-0 w-full z-40 flex items-center justify-between px-[10%] h-20 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000cc] backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        {/* LEFT: Logo */}
        <div className="left-nav flex items-center">
          <Link to={isLoggedIn ? "/home" : "/"}>
            <img
              src={Logo}
              alt="Logo"
              className="w-28 object-contain select-none"
              draggable="false"
            />
          </Link>
        </div>

        {/* RIGHT: Nav Links + Profile */}
        <div className="right-nav text-white flex items-center gap-8">
          {/* Desktop Menu */}
          <ul className="flex items-center gap-6 text-sm font-bold max-lg:hidden relative">
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150"
              to={isLoggedIn ? "/home" : "/"}
            >
              <li>HOME</li>
            </Link>

            <div
              onMouseEnter={() => setIsDropdownVisible(true)}
              className="relative group"
            >
              <Link
                className="hover:text-[#DC2D13] transition-all duration-150 flex items-center"
                to="/vechicleListing"
              >
                OUR CARS <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <Dropdown
                setIsDropdownVisible={setIsDropdownVisible}
                isDropdownVisible={isDropdownVisible}
              />
            </div>

            <Link
              className="hover:text-[#DC2D13] transition-all duration-150"
              to="/getApp"
            >
              <li>GET APP</li>
            </Link>

            <Link
              className="hover:text-[#DC2D13] transition-all duration-150"
              to="/contact"
            >
              <li>CONTACT</li>
            </Link>
          </ul>

          {/* ✅ Profile Section Fixed */}
          <div
            className="profile flex items-center gap-2 max-[440px]:hidden cursor-pointer"
            onClick={handleAuthClick}
          >
            <i className="ri-user-line bg-white text-black p-3 text-2xl rounded-full hover:bg-[#DC2D13] hover:text-white transition-all duration-150"></i>
            <div className="profile-dets">
              <p className="text-white font-bold text-sm">
                {isLoggedIn ? "HI, USER" : "WELCOME"}
              </p>
              <div className="log-in font-bold text-white text-xs flex gap-1 hover:text-[#DC2D13] transition-all duration-150">
                <i
                  className={`${
                    isLoggedIn ? "ri-logout-box-line" : "ri-login-box-line"
                  }`}
                ></i>
                <p>{isLoggedIn ? "LOGOUT" : "LOGIN"}</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="menu-icon hidden max-lg:block w-7 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </div>
        </div>
      </div>

      {/* ---- Mobile Menu ---- */}
      <Hamburger
        isHamburgerVisible={isMenuOpen}
        setisHamburgerVisible={setIsMenuOpen}
      />
    </>
  );
}

export default Navbar;
