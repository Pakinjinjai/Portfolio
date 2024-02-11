import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between ">
        <p className="text-lg text-white font-semibold ">
          Address Nakhon Si Thammarat,TH
        </p>

        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white ">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="flex flex-col gap-5 text-md text-white ">
          <h1 className="text-lg font-bold">Contact</h1>
          <p>pakin.281244@gmail.com</p>
          <p>+66 65 235 8039</p>
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center justify-center pb-20 ">
        <p className="text-white font-semibold tracking-wider">Social Media</p>

        <div className="flex gap-10 text-white text-2xl mb-10 ">
          <p>
            <a href="https://www.facebook.com/profile.php?id=100047043649470">
              <BsFacebook className="hover:scale-125" />
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/ppakinjj?igsh=a3Rzamdtemx4NGJ5&utm_source=qr">
              <BsInstagram className="hover:scale-125" />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/pakin-jinjai-0b17802b2/">
              <BsLinkedin className="hover:scale-110" />
            </a>
          </p>
        </div>

        <p className="text-gray-400 text-md tracking-wider">@2024 PAKIN_DEV</p>
      </div>
    </footer>
  );
};

export default Footer;
