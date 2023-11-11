import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiTailwindcss, SiFigma, SiNextdotjs, Si4D } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "React & Nuxtjs Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          {" "}
          Hi, I'm {""}
          <span className="capitalize text-designColor">Tanveer Shah</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
          I am a front-end developer and UX/UI Designer with 3 years of
          experience. I'm passionate about creating intuitive and user-friendly
          experiences and strive to provide high-quality work and customer
          service for every project.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me in
          </h2>
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
            <a href="https://www.instagram.com/tanveer_aly_khan/" target="_blank">
              <span className="bannerIcon">
                <FiInstagram />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <Si4D />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
