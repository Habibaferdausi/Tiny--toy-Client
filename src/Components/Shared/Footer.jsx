import React from "react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="items-center mb-6 lg:mb-0">
          <img
            src="https://i.ibb.co/8mS34pQ/Screenshot-1-removebg-preview.png"
            alt="Website Logo"
            className="h-20 w-20 mr-4"
          />
          <p
            className="text-purple-600   text-lg lg:text-2xl"
            style={{ fontFamily: "Goodvibes, cursive" }}
          >
            TINY <span className="text-blue-400 ">TOYS</span>
          </p>
        </div>
        <div className="text-center mb-6 lg:mb-0">
          <p className="text-base">
            Contact: hf@gmail.com <br />
            Phone: 123-456-7890
          </p>
          <p className="text-base block lg:inline-block ml-0 lg:ml-6">
            Address: 1234 Main St, City, State, ZIP
          </p>
        </div>
        <div>
          <p className="text-base mb-3">Social Media Links</p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-400 transition-colors duration-300 text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 mt-6 py-4">
        <div className="container mx-auto text-center">
          <span className="text-base">
            &copy; {new Date().getFullYear()} TINY TOY. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
