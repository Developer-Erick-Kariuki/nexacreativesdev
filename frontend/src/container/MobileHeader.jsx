import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { icons, links } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`flex md:hidden items-center justify-between max-w-[1440px] z-50 px-2 py-2 w-full bg-white dark:bg-black `}
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
          className={`fixed inset-0 z-50 flex flex-col p-4 gap-6 dark:bg-black bg-white w-full h-screen ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-[200px] opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <img src="/nexalogo.png" width={150} alt="" />
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
  );
}
