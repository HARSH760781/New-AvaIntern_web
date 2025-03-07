import React from "react";
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: support@avaintern.com</p>
          <p>Phone: +91 9606670754</p>
          <p>
            Address: Banglore,Neraluru SMS complex 1st floor , Karnataka,562107
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
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ava-intern/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
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
