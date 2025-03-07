import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We provide top-notch courses to help you enhance your skills and
            advance in your career. Join us and start learning today!
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Use Link instead of <a> */}
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms_and_Condition">Terms & Condition</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@avaintern.com</p>
          <p>Phone: +91 9606670754</p>
          <h3>Address:</h3>
          <p className="address">
            <br /> <b>Branch1 :-</b> Banglore, Neraluru SMS complex 1st floor,
            Karnataka, 562107
            <br /> <b>Branch2 :-</b> RTC colony, Srinivas Nagar, Madhurwada,
            Vishakhapatnams
          </p>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a
                href="https://instagram.com/ava_intern?igshid=YmMyMTA2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ava-intern/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@avainternedutechpvt.ltd.?si=ttnnLsrvYf0n3JI5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 EdTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
