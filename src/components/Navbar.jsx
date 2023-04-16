import "./NavbarStyle.css";
import React from "react";

import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
// import {logo} from "../assets";

const Navbar =() =>{
    const[click, setClick]= useState(false);
    const handleClick = () => setClick(!click);
    return(
        <div className="header">
                 <Link to="/"> 
                <h2>ABSOLUTE DIMENSION</h2>
                </Link>
                {/* <div className="hamburger"> */}
                    {/* <FaBars size={20} style={{color:"#2e2d2b"}}/> */}
                {/* </div> */}
                <ul className={click ? "nav-menu active":"nav-menu"}>
                    <li>
                        <Link to="/forcompanies">ForCompanies</Link>
                    </li>
                    <li>
                        <Link to="/fordevelopers">ForDevelopers</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    {/* <li>
                        <Link to="/becomeadeveloper">BecomeaDeveloper</Link>
                    </li> */}
                </ul>
                <div className="hamburger" onClick={handleClick}>
                {click ?(
                <FaTimes size={20} style={{color:"#2e2d2b"}}/>
                ):(
                    <FaBars size={20} style={{color:"#2e2d2b"}}/>
                )}
                </div>

        </div>
    );
};
export default Navbar;