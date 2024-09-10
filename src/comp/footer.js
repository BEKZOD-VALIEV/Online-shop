import React from "react";
import "./footer.css";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Great Saving</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>free delivery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadphonesAlt />
              </div>
              <div className="detail">
                <h3>24x7 support</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>money back</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="header">
              <img src="image/logo.webp" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum reiciendis delectus ad libero nisi.</p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>Products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Order</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className="box">
                <h3>Contact Us</h3>
                <ul>
                  <li>Gangnam city Apple shop.</li>
                  <li>+8210 7854 1661</li>
                  <li>appleshop@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
