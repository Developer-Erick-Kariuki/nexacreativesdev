import { useContext, useState } from "react";

import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { links } from "../constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ThemeToggle from "../components/ToggleTheme";
import { ThemeContext } from "../components/ThemeContextProvider";
import NexaLogo from "/nexalogo.png";
import LightLogo from "/logo light.png";

const Header = () => {
  const [isActive, setisActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={` ${
        theme === "dark"
          ? "bg-slate-900 text-primary"
          : "bg-slate-200 text-secondary"
      } px-6 mx-auto md:px-10 fixed drop-shadow-sm top-0 z-50 w-full`}
    >
      {/* navigation for desktops */}
      <nav className="hidden md:flex mx-auto max-w-7xl items-center tex-sm py-3 justify-between">
        <Link to="/">
          <div className="flex">
            <img
              width={150}
              src={theme === "dark" ? LightLogo : NexaLogo}
              alt="site-logo"
            />
          </div>
        </Link>

        <div className="flex justify-between gap-x-1 items-center">
          {links.map((link, index) => (
            <li
              className={`no-underline list-none cursor-pointer transition-all duration-300 ${
                isActive === index && theme === "dark"
                  ? "bg-gradient-to-tr bg-gradient-tl from-blue-600 to-purple-600 text-primary"
                  : ""
              } hover:bg-gradient-to-tr hover:from-blue-600/50 hover:to-purple-600/50  px-3 py-1 rounded`}
              key={link.name}
              onClick={() => {
                setisActive(index);
              }}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <div className="mx-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav
        className={`md:hidden w-full flex py-3 justify-between items-center`}
      >
        <div className="flex justify-between w-full">
          <Link to="/" className="cursor-pointer">
            <img
              width={120}
              src={theme === "dark" ? LightLogo : NexaLogo}
              alt="site-logo"
            />
          </Link>

          <div className="flex gap-2">
            <ThemeToggle />
            <div className={`text-primar rounded-full`}>
              {!isOpen && (
                <HiBars3BottomRight
                  className="cursor-pointer"
                  size={32}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`${
                theme === "dark" ? "bg-secondary" : "bg-primary"
              } flex drop-shadow-md h-screen right-0 fixed top-0 flex-col gap-8 sm:w-1/2 w-3/4 z-10 py-6 items-end px-6`}
            >
              <div className="flex justify-between w-full">
                <img
                  src={theme === "dark" ? LightLogo : NexaLogo}
                  width={100}
                  alt="logo"
                />
                <MdClose
                  size={32}
                  className="cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              {links.map((link, index) => (
                <li
                  id={link.href}
                  className={`no-underline flex items-center justify-between list-none cursor-pointer hover:scale-105 py-5 px-5 rounded-2xl w-full transition-all duration-300 ${
                    isActive === index || theme === "dark"
                      ? "w-full bg-secondary text-primary"
                      : "bg-primary text-secondary"
                  }`}
                  key={link.name}
                  onClick={() => {
                    setisActive(index);
                    toggleMenu();
                  }}
                >
                  <a href={link.href}>{link.name}</a>
                  {isActive == index && <FaArrowRight />}
                </li>
              ))}
            </motion.div>
          )}

          {isOpen && (
            <div className="fixed z-0 w-screen h-screen inset-0 bg-slate-900 overscroll-y-none  opacity-75"></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
