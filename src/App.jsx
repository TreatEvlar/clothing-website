import React, { useState } from "react";
import "./index.css";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <section className="top-txt">
        <div className="head container">
          <div className="head-txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
            <p className="p2">Super Sale Up to 40% off</p>
          </div>
          <div className="sing_in_up">
            <a href="#">SIGN IN</a>
            <a href="#">SIGN UP</a>
          </div>
        </div>
      </section>
      

      <nav className="navbar">
        <div className="navbar-container">
          <div className="hamburger">
            <FaBars onClick={toggleNav} id="FaBars" />
          </div>
          <ul className={isNavOpen ? "active" : ""}>
            <FaXmark onClick={toggleNav} id="FaXmark" className="close-icon" />
            <li>
              <a href="#Home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#Shop" className="nav-link">
                Shop
              </a>
            </li>
            <li>
              <a href="#news" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#Review" className="nav-link">
                Review
              </a>
            </li>
            <li>
              <a href="#Contact-form" className="nav-link">
                Contact
              </a>
            </li>
            <hr />
            <div className="user" onClick={toggleLogin}>
              <FaUser id="FaUser" />
              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </div>
          </ul>

          <div className="logo">
            <h1>NEWGENES</h1>
          </div>

          <div className="icon">
            <FaMagnifyingGlass onClick={toggleSearch} id="FaMagnifyingGlass" />
            <FaUser id="FaUser" onClick={toggleLogin} />
            <FaShoppingCart id="FaShoppingCart" />
          </div>

          <div className={`search-box ${isSearchOpen ? "active" : ""}`}>
            <FaMagnifyingGlass id="FaMagnifyingGlass" />
            <input type="text" placeholder="S E A R C H  F O R . . ." />
            <FaXmark onClick={toggleSearch} id="FaXmark" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;