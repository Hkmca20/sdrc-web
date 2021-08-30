import React from "react";
import NavApp from "../components/nav/NavHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Vision from "../components/Vision";
import Contactus from "../components/Contactus";

const HomePage = () => {
  return (
    <>
      <NavApp />
      <Header />
      <Aboutus/>
      <Services/>
      <Vision/>
      <Contactus/>
      <Footer />
    </>
  );
};

export default HomePage;
