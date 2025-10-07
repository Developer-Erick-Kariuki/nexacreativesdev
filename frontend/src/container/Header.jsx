import { useEffect, useState } from "react";

import { icons, links } from "../constants";
import { Link } from "react-router-dom";

import NexaLogo from "/nexalogo.png";
import "../index.css";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY < 500) {
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
        className={`${
          isScrolled ? "-translate-y-[100%]  bg-white" : "translate-y-0"
        } transition bg-white max-w-[1440px]  w-full m-auto top-0 fixed px-4 z-50  dark:bg-black`}
      >
        <nav
          className={` hidden w-full py-3 font-bold md:flex items-center justify-between mx-auto`}
        >
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
            {icons.map(({ icon: Icon, href }, index) => (
              <a key={index} href={href}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </nav>
      </header>
      {/* mobile navigation */}
      <nav
        className={`flex md:hidden items-center justify-between max-w-[1440px] z-50 px-2 fixed py-2 w-full bg-white dark:bg-black `}
      >
        <Link to="/">
          <img src="/nexalogo.png" width={180} alt="logo" />
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
            className={`absolute inset-0 flex flex-col p-4 gap-6 dark:bg-black bg-white w-full h-screen ${
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
                  key={index}
                  className="py-6  px-5"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2 ">
                {icons.map(({ icon: Icon, href }, index) => (
                  <a key={index} href={href}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
