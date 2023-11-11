import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assest/index";
import { navLinksdata } from "../constants";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-around items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center justify-around">
        <img src={logo} alt="logo" />
        <h2 className="fs-6 fw-600">Tanveer Shah</h2>
      </div>
      <div>
        <ul className="items-center hidden gap-6 lg:gap-10 mdl:inline-flex">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer mdl:hidden text-designColor"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="relative flex flex-col gap-8 py-3">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <h2 className="py-3 fs-6 fw-600">Tanveer Shah</h2>
                <p className="mt-2 text-sm text-gray-400">
                  I am a front-end developer and UX/UI Designer with 3 years of
                  experience. I'm passionate about creating intuitive and
                  user-friendly experiences and strive to provide high-quality
                  work and customer service for every project.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li 
                  key={item._id}
                  className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor">
                    <Link
                    onClick={()=>setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="mb-4 text-base uppercase font-titleFont">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
