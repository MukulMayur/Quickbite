import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to={"/"}>
            <img src={assets.logo1} alt="Logo" className="logo" />
          </Link>

          <p>
            Quickbite – Fresh, Fast, Flavorful Discover a variety of tasty
            meals, from quick snacks to hearty dishes, all delivered fast and
            fresh to your door. Order easily and satisfy your cravings with
            Quickbite today!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 987-654-321</li>
            <li>contact@quickbite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div>© 2024 Quickbite. All rights reserved.</div>
        <div>Version: 0.1.0.0</div>
      </div>
    </div>
  );
};

export default Footer;
