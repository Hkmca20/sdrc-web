import React from "react";
import NavHome from "../components/nav/NavHome";
// import Header from "../components/Header";
import Footer from "../components/Footer";
// import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Vision from "../components/Vision";
// import Contactus from "../components/Contactus";
// import BannerHome from "../components/banner1/Banner";
import Banner2 from "../components/banner1/Banner2";

const HomePage = () => {
  return (
    <>
      <NavHome />
      <Banner2 />
      {/* <Header /> */}
      {/* <BannerHome /> */}
      {/* <Aboutus/> */}
      <Services/>
      <Vision/>
      {/* <Contactus/> */}
      <Footer />
    </>
  );
};

export default HomePage;
