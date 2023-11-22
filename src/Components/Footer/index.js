import { BiPhoneCall,  BiLogoGmail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VisitTracker from "../Tracker";


import "./index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    // {style={{ backgroundColor: "#353b66" }}}
    <div
      className="container-fluid p-4 bottom-fixed"
      style={{
        backgroundImage:
          'url("https://www.techasoft.com/debug/img/industries-back.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerContent pt-3">
            <p style={{ color: "white" }}>
            FAALIH CONSULTING SERVICES <br />
              has the required experience to help architect, design, develop and
              deliver any technical solution to your organization..
            </p>
            <div>
              <p>&copy; Faalih Consulting Services 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerContact">
            <h1 className="footerHeader">Contact info</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactListClumzi">
              <li className="footerContactListItem ListItem1">
                <div>
                  <BiPhoneCall size="15" color="#0edae8" />
                </div>
                <p className="pl-2" style={{ color: "white" }}>
                  +91 8919078185
                </p>
              </li>
              <li className="footerContactListItem ListItem2">
                <div className="footerIcon">
                  <BiLogoGmail size="15" color="#0edae8" />
                </div>
                <div className="Footerdiv">
                  <p className="pl-2" style={{ color: "white" }}>
                    info@labyrinthglobalsolutions
                    <br />
                    Address: Cyber Space Building, 5th Floor, Madhapur Hi-Tech
                    City, 500081
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 ">
          <div className="footerUsefullLinks">
            <h1 className="footerHeader">Useful Links</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactList">
              <li className="footerContactListItem ListItem3">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Home
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem4">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/aboutus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    About Us
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem5">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/contactus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    FAQ
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem6">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/contactus" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Policies
                  </p>
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className=" col-12 col-lg-3 col-md-6 ">
          <div className="footerServices">
            <h1 className="footerHeader">Our Services</h1>
            <hr className="footerHorizontalLine" />
            <ol className="footerContactList">
              
              
              <li className="footerContactListItem ListItem9">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/resellermendix" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    KissFlow Master
                  </p>
                </Link>
              </li>
              <li className="footerContactListItem ListItem10">
                <div className="footerIcon">
                  <FaGreaterThan size="15" color="#0edae8" />
                </div>
                <Link to="/mobileandappdevelopment" className="footer-link">
                  <p className="pl-2 pt-2" style={{ color: "white" }}>
                    Web Development
                  </p>
                </Link>
              </li>
              <VisitTracker visitCount={visitCount} />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
