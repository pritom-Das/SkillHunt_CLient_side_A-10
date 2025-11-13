import React from "react";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* Your footer content */}
      <div className=" ">
        <footer className="footer sm:footer-horizontal bg-[#31363f]  text-neutral-content p-10">
          <nav className="nunito-font">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover ">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="nunito-font">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="nunito-font">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h2>Socials</h2>
            <div className=" text-2xl flex space-x-3">
              <FaFacebook />
              <FaSquareInstagram />
              <FaSquareXTwitter />
            </div>
          </nav>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
