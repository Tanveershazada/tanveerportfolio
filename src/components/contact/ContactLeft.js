import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assest";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg
               shadow-shadowOne flex flex-col gap-8 justify-center"
    >
      <img
        className="object-cover w-full h-64 mb-2 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Tanveer Shah</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base tracking-wide text-gray-400">
          Crafting seamless user experiences with code, a frontend developer
          brings designs to life on websites and apps.
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          phone: <span className="text-lightText">+923 554330721</span>
        </p>
        <p className="flex items-center gap-2 text-base text-gray-400">
          Email:{" "}
          <span className="cursor-pointer text-lightText">
            tanveeralikhans1177@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/tanveershah.tanhasaai"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://twitter.com/Tanveer84132279" target="_blank">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/tanveer-ali-khan-9586ba248/" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
