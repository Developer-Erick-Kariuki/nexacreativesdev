import { useState } from "react";

import { HiBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { links } from "../constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";

const BlogHeader = () => {
  const [isActive, setisActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="hidden md:flex h-16  max-w-7xl mx-auto items-center text-primary tex-sm py-3 justify-between">
        <Link to="/">
          <div className="flex">
            <img width={120} src="/logo light.png" alt="site-logo" />
          </div>
        </Link>

        <div className="flex justify-between gap-6 items-center">
          <Link to="/">
            <Button
              className="bg-gradient-to-tr from-purple-600 to-blue-600"
              name="Go back Home"
            />
          </Link>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="md:hidden container text-primary top-0 px-6 z-20 py-6 right-0 left-0 flex justify-between items-center">
        <div className="flex">
          <Link to="/" className="cursor-pointer z-40">
            <img width={150} src="/logo light.png" alt="site-logo" />
          </Link>
        </div>
        <div className="flex absolute min-h-screen top-2 right-0 p-3 z-30 transition-all duration-300 w-full">
          <div className="right-4 absolute bg-slate-800  rounded-md">
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
              className="flex mt-8 shadow-2xl bg-secondary min-h-[100vh] absolute top-[5%] z-20 flex-col gap-8 w-full py-6 items-end px-6"
            >
              {links.map((link, index) => (
                <li
                  id={link.href}
                  className={`no-underline flex items-center justify-between list-none cursor-pointer hover:scale-105 py-5 px-5 rounded-2xl w-full transition-all duration-300 ${
                    isActive === index ? "w-full bg-slate-800" : "text-primary"
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
        </div>
      </nav>
    </>
  );
};

export default BlogHeader;
