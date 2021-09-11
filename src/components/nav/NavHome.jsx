import React, { useState } from 'react'
import "./navHomeStyle.css"
// import { FaWhatsappSquare } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from 'react-router-dom'

const NavHome = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st Logo part */}
                <div className="logo">
                    <NavLink to="/">
                        {/* <div className="col-12 col-lg-20 text-center">
                            <img src="./images/logo_header.jpeg" className="d-block h-100 w-100" alt="img" />
                        </div> */}
                        <h2>
                            <span>SDR CARES</span>
                            {/* <span>C</span>ares */}
                        </h2>
                    </NavLink>
                </div>
                {/* 2nd Menu part */}
                <div className={showMenuIcon ? "menu-link mobile-menu-link" : "menu-link"}>

                    {/* <div className="menu-link"> */}
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Services</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li> */}
                    </ul>
                </div>
                {/* 3rd Social Media part */}
                <div className="social-media">
                    <ul className="social-media-desktop" >
                        <li>
                            {/* <a href="https://facebook.com/sdrcares" target="_self"> */}
                            {/* <FaFacebookSquare className="facebook" /> */}
                            <NavLink className="navbar navbar-light text-black" to="/contact">
                                    info@sdrcares.com<br /> +91 - 7838828589
                            </NavLink>
                            {/* </a> */}
                        </li>
                        {/* <li><a href="https://instagram.com/sdrcares" target="_self">
                            <FaInstagramSquare className="instagram" />
                        </a></li> */}
                        {/* <li><a href="https://youtube.com/sdrcares" target="_self">
                            <FaYoutubeSquare className="youtube" />
                        </a>
                        </li> */}
                    </ul>
                    {/* hamburger menu start */}
                    <div className="hamburger-menu">
                        <a href={() => false} onClick={() => setShowMenuIcon(!showMenuIcon)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default NavHome;