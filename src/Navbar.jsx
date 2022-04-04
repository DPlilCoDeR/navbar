import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle'> <FaBars /></button>
        </div>
      </div>
      <div className="links-container show-container">
        <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li>
              <a key={id} href={url}>
                {text}
              </a>
            </li>
          );
        })}
        </ul>
        <ul className="social-icons">
        {social.map((rrss) => {
          const { id, url, icon } = rrss;
          return (
            <li>
              <a key={id} href={url}>{icon}</a>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
