import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="section mt-[100px]">
      <div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
        <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
          GET IN TOUCH
        </h2>
        <p data-aos="fade-up">
          For other contacts, you can send me a message through my social media
          accounts.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <a
          href="https://www.facebook.com/billyjoel.ballola"
          className="social-media"
          data-aos="zoom-in"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/billy-joel-ballola-23b44a319"
          className="social-media"
          rel="noreferrer"
          data-aos="zoom-in"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/blly_joel"
          className="social-media"
          data-aos="zoom-in"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Footer;
