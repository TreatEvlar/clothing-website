import React, { useState, useEffect } from "react";
import "./index.css";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import logo from './images/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg'
import pic1 from './images/ChatGPT Image May 6, 2025, 09_37_21 PM.png'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const cards = [
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'},
    {img:pic1, heading:'T-Shirts', price:'$15.00', para:'Men wear with new style'}
  ];

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
            <div className="countdown-timer">
              Sale ends in: {formatTime(timeLeft)}
            </div>
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
              <a href="#contact" className="nav-link">
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
            <span className="FaMagnifyingGlass"><FaMagnifyingGlass id="FaMagnifyingGlass" /></span>
            <input type="text" placeholder="S E A R C H  F O R . . ." />
            <span className="FaXmark"><FaXmark onClick={toggleSearch} id="FaXmark"/></span>
          </div>
        </div>
      </nav>

      <div className="hero-section" id="Home">
        <div className="first-section">
            <h1>Discover<span>NEWGENES</span> &nbsp;for Every Occasion</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Officia id ea ex quos cupiditate nemo nam quae aut sunt eum 
                iste est labore alias tempora doloribus maiores, repudiandae 
                minima maxime!
            </p>
            <button><a href="#">Shop Now</a></button>
        </div>
        <div className="second-section">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="seller" id="Shop">
        <h1>BEST SELLERS</h1>
        <div className="seller-container">
          {cards.map((card, index) => (
            <div className="child" key={index}>
              <img src={card.img} alt={card.heading} />
              <h2>{card.heading}</h2>
              <h3>{card.price}</h3>
              <p>{card.para}</p>
              <button>Shop Now</button>
            </div>
          ))}
        </div>
      </div>

      <section id="contact">
        <div className="contact container">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            id="Contact-form"
            onSubmit={handleSubmit}
          > 
            <div className="form">
              <div className="form-txt">
                <h4>INFORMATION</h4>
                <h1>Contact Us</h1>
                <span>As you might expect of a company that began as a high-end premium product supplier, we pay strict attention.</span>
                <h3>India</h3>
                <p>1/199 Trilok puri near Subhash market<br />+91 991-020-0151</p>
                <h3>Worldwide</h3>
                <p>HW95+C9C, Lorem ipsum dolor sit.<br />411014</p>
              </div>
              <div className="form-details">
                <input type="hidden" name="access_key" value="2405baea-dcd5-4d6a-9d06-5e48cbdeb54e" />
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
                <textarea 
                  name="message" 
                  id="message" 
                  cols="52" 
                  rows="7" 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit">SEND MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-container container">
            <div className="content_1">
                <h1>NEWGENES</h1>
                <p>The customer is at the heart of our<br />unique business model, which includes<br />design.</p>
                <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
            </div>
            <div className="content_2">
                <h4>SHOPPING</h4>
                <a href="#sellers">Premium Store</a>
                <a href="#sellers">Trending products</a>
                <a href="#sellers">Accessories</a>
                <a href="#sellers">Sale</a>
            </div>
            <div className="content_3">
                <h4>SHOPPING</h4>
                <a href="./contact.html">Contact Us</a>
                <a href="https://payment-method-sb.netlify.app/" target="_blank" rel="noopener noreferrer">Payment Method</a>
                <a href="https://delivery-status-sb.netlify.app/" target="_blank" rel="noopener noreferrer">Delivery</a>
                <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank" rel="noopener noreferrer">Return and Exchange</a>
            </div>
            <div className="content_4">
                <h4>NEWLETTER</h4>
                <p>Be the first to know about new<br />arrivals, look books, sales & promos!</p>
                <div className="f-mail">
                    <input type="email" placeholder="Your Email" />
                    <i className='bx bx-envelope'></i>
                </div>
                <hr />
            </div>
        </div>
        <div className="f-design">
            <div className="f-design-txt container">
                <p>Design and Code by Kuldeep Kumar</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default App;