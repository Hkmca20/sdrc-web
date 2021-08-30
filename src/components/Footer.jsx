import React from "react";
import logo from "../banner1.jpeg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <img src={logo} alt="banner" className="common-img" />
                </div>

                <div className="col-6 col-lg-3">
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Info</h2>
                  <ul>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/vision">Our Vision</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/termsandconditions">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.facebook.com/sdrcares/"
                        target="_self">
                        <i class="fab fa-facebook-f fontawesome-style"></i> 
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/sdrcares/"
                        target="_self">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.youtube.com/sdrcares/"
                        target="_self">
                        <i class="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.tweeter.com/sdrcares/"
                        target="_self">
                        <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021&nbsp;&nbsp;
                  <a
                    className="main-hero-para text-center w-100"
                    href="https://www.sdrcares.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sdrcares.com
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;<a href="/termsandconditions">Terms and conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
