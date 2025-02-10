import { useState } from "react";
import LogoSVG from "/logo.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { links } from "../constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setisActive] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-7xl mx-auto hidden md:flex top-0 py-4 z-30 bg-gray-950/50 justify-between fixed w-full items-center">
        <div className="w-48 flex">
          <img src={LogoSVG} alt="site-logo" />
        </div>
        <div className="flex justify-between gap-6 items-center">
          {links.map((link, index) => (
            <li
              className={`no-underline list-none cursor-pointer transition-all duration-300 ${
                isActive === index ? "text-accent" : "text-primary"
              }`}
              key={link.name}
              onClick={() => {
                setisActive(index);
              }}
            >
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="w-full md:hidden flex justify-between items-center">
        <div className="w-36 flex">
          <img src={LogoSVG} alt="site-logo" />
        </div>
        <div className="flex absolute h-screen top-0 right-0 p-3 z-30 transition-all duration-300 w-3/4">
          <div className="right-4 absolute bg-accent rounded-md">
            {isOpen ? (
              <MdClose
                size={36}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <HiBars3BottomRight
                className="cursor-pointer"
                size={36}
                onClick={toggleMenu}
              />
            )}
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex mt-8 shadow-2xl bg-secondary min-h-[100vh] absolute top-4 z-20 flex-col gap-8 w-full py-6 items-end px-6"
            >
              {links.map((link, index) => (
                <li
                  id={link.href}
                  className={`no-underline list-none cursor-pointer hover:bg-accent p-2 rounded-sm w-full transition-all duration-300 ${
                    isActive === index ? "w-full " : "text-primary"
                  }`}
                  key={link.name}
                  onClick={() => {
                    setisActive(index);
                    toggleMenu();
                  }}
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
