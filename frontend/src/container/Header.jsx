import { icons, links } from "../constants";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import React, { useState, useEffect } from 'react';

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => 
    {
      if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    }
  };

  useEffect(() => {
     window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]); 
  
  return (
    <header
      className={`${isScrolled ? "bg-white dark:bg-black" : "bg-transparent"} transition w-full fixed top-0 w-full m-auto px-4 z-50`}
    >
      <Container>
        <nav
          className={` hidden w-full py-3 font-bold md:flex items-center justify-between mx-auto`}
        >
          <Link to="/">
            <img width={150} src="/nexalogo.png" alt="site-logo" />
          </Link>

          <div className="flex justify-between gap-6 items-center">
            {links.map((link, index) => (
              <a
                key={index}
                className="group transition duration-300 ease-linear"
                href={link.href}
              >
                {link.name}
                <div
                  className={`w-0 group-hover:w-full transition-all duration-700 h-[3px] bg-violet-800`}
                ></div>
              </a>
            ))}
          </div>
          <Button name="Portfolio" href="#portfolio" />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
