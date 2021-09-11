import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="col-12 header-left-side d-flex justify-content-center flex-column align-items-start ">
            <h4 className="display-2">
              Privacy Policy
            </h4>
            <h3>
              SDR Healthcare offers a comprehensive service in Home Sample Collection with a network of highly skilled Phlebotomists covering the whole of Delhi-NCR and adjoining Northern States.The reports are available24-Hour through Mail and WhatsApp.
              We relentlessly strive towards providing accurate, reliable and quality health services through our dedicated team of competent and experienced professionals.
              <br/><br/>
              An effortless integration of Knowledge and Technology committed to providing world class Diagnostic services, maintaining the highest standards of quality and ethics.
              Our technology driven processes aim to make staying healthy convenient, accessible and affordable.
              <br/><br/>
              SDR Healthcare offers a comprehensive service in Home Sample Collection with a network of highly skilled Phlebotomists covering the whole of Delhi-NCR and adjoining Northern States.The reports are available24-Hour through Mail and WhatsApp.
              We relentlessly strive towards providing accurate, reliable and quality health services through our dedicated team of competent and experienced professionals.
            </h3>
            {/* <h3>to be continue...</h3> */}
          </div>
          {/*  --------------- main header right side--------------  */}
          {/* <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
            <img
              src="./images/hero1.jpg"
              alt="heroimg"
              className="img-fluid"
            /> */}
            {/* <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              /> */}
          {/* </div> */}
        </section>
      </header>
    </>
  );
};

export default Header;
