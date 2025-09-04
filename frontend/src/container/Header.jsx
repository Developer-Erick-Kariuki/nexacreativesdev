import { useEffect, useState } from "react";

import { links } from "../constants";
import { Link } from "react-router-dom";

import NexaLogo from "/nexalogo.png";
import "../index.css";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const imageSize = 180;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <header className={`relative overflow-x-hidden  w-full top-0`}>
      {/* navigation for desktops */}
      <nav
        className={`hidden w-full fixed z-40 text-base md:flex mx-auto max-w-[1920px] px-6 lg:px-10 items-center py-3 justify-between ${
          isScrolled
            ? "bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <Link to="/">
          <div className="flex">
            <img width={imageSize} src={NexaLogo} alt="site-logo" />
          </div>
        </Link>

        <div className="flex justify-between gap-6 items-center">
          {links.map((link) => (
            <a className="hover:font-semibold" href={link.href}>
              {link.name}
            </a>
          ))}
          <button className="bg-purple-600 shadow-md px-5 py-3 text-white hover:bg-black transition duration-300 ease-in-out rounded-full">
            Get a quote
          </button>
        </div>
      </nav>
      {/* mobile navigation */}
      <nav
        className={`flex fixed md:hidden z-40  items-center justify-between py-2 w-full px-2 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <img src={NexaLogo} width={180} alt="" />
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
            className={`absolute top-0 flex flex-col p-4 gap-6 bg-white w-full h-screen ${
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
