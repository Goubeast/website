import "./FooterStyles.css";
import portfolio from "../portfolio";

import React from 'react'
import { FaCity, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaCity size={20} style={{color:"white", marginRight: "2rem"}} />
                    <div>
                        <p>{portfolio.city}</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"white", marginRight: "2rem"}} />
                        {portfolio.phone}
                    </h4>
                </div>
                <div className="email">
                    <h4> <a href={`mailto:${portfolio.email}`}>
                        <FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/>
                        {portfolio.email}</a>
                    </h4>
                </div>
            </div>
            <div className="right">
                
                <div className="profile-title">
                    Profiles
                </div>
                <div className="profile-icons">
                    <a href={portfolio.github}><FaGithub size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.linkedin}><FaLinkedin size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.twitter}><FaTwitter size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                    <a href={portfolio.instagram}><FaInstagram size={30} style={{color:"white", marginRight: "1rem"}} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer