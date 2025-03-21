import { useContext, useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { links } from "../constants";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "../components/ToggleTheme";
import { ThemeContext } from "../components/ThemeContextProvider";
import NexaLogo from "/nexalogo.png";
import LightLogo from "/logo light.png";
import "../index.css";
import CallToAction from "../components/callToAction";

const imageSize = 150;

const Header = () => {
  const [isActive, setisActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { theme, isSet, setIsSet } = useContext(ThemeContext);

  const [isScrolled, setIsScrolled] = useState(false);

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
    <>
      <header
        className={` ${
          theme === "dark"
            ? "bg-secondary text-white"
            : "bg-white text-secondary"
        }       
        ${
          isScrolled ? " fixed" : ""
        } top-0 mx-auto drop-shadow static transition-all ease-in-out duration-500 z-40 w-full`}
      >
        {isSet && (
          <>
            <div
              className={` hidden  bg-purple-600 relative  transition-all py-2 duration-300 ease-linear md:flex items-center justify-center px-6 w-full  text-primary`}
            >
              <p className="text-sm text-center flex items-center gap-4 flex-wrap">
                Impressed by our work? Hire us for professional web development
                services
                <span className="flex justify-center items-center gap-2 bg-white hover:bg-purple-900 hover:text-white text-accent rounded-xl w-fit px-5 py-2">
                  <FaWhatsapp />
                  <a
                    href="https://wa.me/254797710074" // Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </span>
              </p>

              <MdClose
                size={20}
                className="absolute right-2 cursor-pointer hover:scale-110"
                onClick={() => setIsSet(false)}
              />
            </div>
          </>
        )}
        {/* navigation for desktops */}
        <nav className="hidden md:flex mx-auto py-4 max-w-7xl items-center h-full justify-between">
          <Link to="/">
            <div className="flex">
              <img
                width={imageSize}
                src={theme === "dark" ? LightLogo : NexaLogo}
                alt="site-logo"
              />
            </div>
          </Link>

          <div className="flex justify-between gap-x-4 items-center">
            {links.map((link, index) => (
              <li
                className={`no-underline list-none cursor-pointer onHover transition-all duration-300`}
                key={link.name}
                onClick={() => {
                  setisActive(index);
                }}
              >
                {index === 0 ? (
                  <Link to={link.href}>{link.name}</Link>
                ) : (
                  <a
                    href={link.href}
                    className={`${
                      index === links.length - 1
                        ? "bg-gradient-to-tr from-accent to-violet-500 text-white px-2 py-2  rounded"
                        : ""
                    }`}
                  >
                    {link.name}
                  </a>
                )}

                <div
                  className={`bg-gradient-to-tr mt-1 h-[2px] from-blue-500 to-purple-500 underline`}
                ></div>
              </li>
            ))}

            <div className="mx-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* mobile navbar */}
        <nav
          className={`md:hidden w-full h-full py-4 px-6 flex justify-between items-center`}
        >
          <div className="flex justify-between w-full">
            <Link to="/" className="cursor-pointer">
              <img
                width={imageSize}
                src={theme === "dark" ? LightLogo : NexaLogo}
                alt="site-logo"
              />
            </Link>

            <div className="flex gap-4 items-center">
              <ThemeToggle />

              {!isOpen && (
                <HiBars3
                  className="cursor-pointer"
                  size={32}
                  onClick={toggleMenu}
                />
              )}
            </div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className={`${
                  theme === "dark" ? "bg-secondary" : "bg-primary"
                } flex drop-shadow-md h-screen right-0 fixed top-0 flex-col gap-4 sm:w-1/2 w-3/4 z-50 py-6 items-end px-6`}
              >
                <div className="flex justify-between w-full">
                  <img
                    src={theme === "dark" ? LightLogo : NexaLogo}
                    width={imageSize}
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
                      isActive === index && theme === "dark"
                        ? "bg-gradient-to-tr from-purple-600 to-blue-600 text-primary"
                        : isActive === index && theme !== "dark"
                        ? "bg-gradient-to-tr from-purple-600 text-primary to-blue-600"
                        : ""
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
              <div
                className="fixed z-0 w-screen h-screen inset-0 bg-slate-900 overscroll-y-none  opacity-75"
                onClick={() => setIsOpen(false)}
              ></div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
