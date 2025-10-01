import { useEffect, useState } from "react";

import { icons, links } from "../constants";
import { Link } from "react-router-dom";

import NexaLogo from "/nexalogo.png";
import "../index.css";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const imageSize = 150;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`${
        isScrolled ? "opacity-85 dark:border-gray-800 border-b" : ""
      } fixed w-full m-auto z-50 bg-white dark:bg-black`}
    >
      <nav className="hidden w-full text-base md:flex px-6 items-center py-4 justify-between max-w-[1440px] mx-auto">
        <Link to="/">
          <div className="flex">
            <img width={150} src="/nexalogo.png" alt="site-logo" />
          </div>
        </Link>

        <div className="flex justify-between gap-6 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              className="hover:opacity-65 transition duration-300 ease-linear"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-2 ">
          {icons.map(({ icon: Icon, href }) => (
            <a href={href}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </nav>
      {/* mobile navigation */}
      <nav
        className={`flex md:hidden z-40  items-center justify-between py-2 w-full px-2`}
      >
        <Link to="/">
          <img src="/logo light.png" width={180} alt="logo" />
        </Link>
        {!isOpen && (
          <HiBars3
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
            size={32}
          />
        )}
        {isOpen && (
          <div
            className={`absolute top-0 flex flex-col p-4 gap-6 dark:bg-black bg-white w-full h-screen ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-[200px] opacity-0"
            }`}
          >
            <div className="flex justify-between">
              <img src={NexaLogo} width={150} alt="" />
              <MdClose
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
                size={32}
              />
            </div>

            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <a
                  className="py-6  px-5"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-purple-600 text-white rounded-full px-5 py-3">
                Get a quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
