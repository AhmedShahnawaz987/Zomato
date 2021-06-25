import React from "react";
import { Container } from "react-bootstrap";
import apple from "../apple.webp";
import android from "../android.webp";

function Footer() {
  return (
    <div className="footer-main">
      <Container>
        <div>
          <img
            className="zomato-image"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="zom"
          ></img>
          <select name="i" className="dropdown-place">
            <option value="india" className="dropdown-place-1">English</option>
            <option value="USA" className="dropdown-place-1">Arabic</option>
            <option value="canada" className="dropdown-place-1">Spanish</option>
          </select>
          <select name="i" className="dropdown-place">
            <option value="india" className="dropdown-place-1">india</option>
            <option value="USA" className="dropdown-place-1">UAE</option>
            <option value="canada" className="dropdown-place-1">Argentina</option>
          </select>
        </div>

        <div className="foot">
          <div className="foot-1">
            <h2>COMPANY</h2>
            <div className="footer-2">
              <a href="acv">Who We Are</a>
              <a href="acv">Blog</a>
              <a href="acv">Careers</a>
              <a href="acv">Report Fraud</a>
              <a href="acv">Contact</a>
              <a href="acv">Financial Information</a>
            </div>
          </div>

          <div className="foot-1">
            <h2>FOR FOODIES</h2>
            <div className="footer-2">
              <a href="acv">Code of Conduct</a>
              <a href="acv" >Community</a>
              <a href="acv">Blogger Help</a>
              <a href="acv">Mobile Apps</a>
            </div>
          </div>

          <div className="foot-1">
            <h2>FOR RESTAURANTS</h2>
            <div className="footer-2">
              <a href="acv">Add restaurant</a>
              <a href="acv">Business App</a>
              <a href="acv">Restaurant Widgets</a>
              <a href="acv">Products for Businesse</a>
            </div>
          </div>

          <div className="foot-1">
            <h2>FOR YOU</h2>
            <div className="footer-2">
              <a href="acv">Privacy</a>
              <a href="acv">Terms</a>
              <a href="acv">Security</a>
              <a href="acv">Sitemap</a>
            </div>
          </div>

          <div className="foot-1">
            <h2>SOCIAL LINKS</h2>
            <div className="footer-3">
            <a href="ac"><img src="facebook.svg" alt="insta" className="social"></img></a>
            <a href="ac"><img src="twitter.svg" alt="insta"  className="social"></img></a>
              <a href="ac"><img src="insta.svg" alt="insta" className="social"></img></a>
              </div>
              <div className="apple1">
                  <a href="abcc"><img src={apple} alt="apple" className="apple"></img></a>
              </div>
              <div className="apple1">
                  <a href="abcc"><img src={android} alt="apple" className="apple"></img></a>
              </div>
              
              
          </div>
        </div>

        <div className="line"></div>
        <div className="copy-write">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2021 © Zomato™ Ltd. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
