import React from "react";
const Header = () => {
  return (
    <>
      <header>
        <section src="./images/banner1.jpeg" className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Best Deal at Home <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Call/Online Book Appointment -  Verification call – Sample pickup from your door step – Test Run – Accurate &amps; best Quality Report – Report delivery Mail/Whats app – Feed back
              </p>
              <h3>Get a free call from us</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Mobile"
                />
                <div className="input-group-button">Send Request</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"

              ></img>
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
