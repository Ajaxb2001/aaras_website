import React from "react";
import "../CSS/Footer.css";

// Import your social media icons
import YoutubeIcon from "../images/youtube.png";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/insta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section card">
          <p>&copy; {new Date().getFullYear()} AARA's. All rights reserved.</p>
          <p>Follow us on social media:</p>
          <ul className="footer-socials">
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeIcon} alt="YouTube" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section card">
          <h4>Contact Us</h4>
          <p>AARA's </p>
          <p>HBR Layout</p>
          <p>Bengaluru, India</p>
          <p>Email: 2024aaras@gmail.com</p>
          <p>Phone: +917972898248</p>
        </div>
        <div className="footer-section card">
          <h4>Our Location</h4>
          <div className="map-container">
            <iframe
              title="Bengaluru Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.191678579185!2d77.59456241590287!3d12.971598515117088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d1c0e4f555%3A0x6f0d14ddbfa0f1ec!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2s!4v1644579876889"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
