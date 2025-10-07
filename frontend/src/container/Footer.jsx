import { handleScrollToTop, links } from "../constants";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const iconSize = 20;
// Define socialLinks array
export const socialLinks = [
  { image: <FaGithub size={iconSize} />, href: "https://github.com" },
  { image: <FaInstagram size={iconSize} />, href: "https://instagram.com" },
  { image: <FaTiktok size={iconSize} />, href: "https://tiktok.com" },
  { image: <FaThreads size={iconSize} />, href: "https://threads.net" },
  { image: <FaXTwitter size={iconSize} />, href: "https://twitter.com" },
];

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`mx-auto bg-black/95 rounded-t-xl text-white relative w-full`}
    >
      <div className="flex max-w-[1440px] mx-auto py-12 w-full flex-wrap gap-6 justify-between px-6 md:px-12">
        <div className="flex flex-col gap-8">
          <img src="/logo light.png" alt="logo" width={180} />
          <p className="max-w-sm opacity-75 mt-3">
            We blends creativity with cutting-edge technology to deliver unique
            and engaging digital experiences. Let’s create something
            extraordinary together.
          </p>
          <div className="flex flex-col">
            <a className="flex gap-2 items-center" href="tel:0797710074">
              {" "}
              <IoCall size={20} /> +254 797710074
            </a>
            <a
              className="flex gap-2 items-center"
              href="mailto:nexacreatives@gmail.com"
            >
              <SiMinutemailer size={20} /> info@nexacreatives.com
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((image, index) => (
              <div
                className="p-1 rounded-full transition-all duration-300 ease-linear flex justify-center items-center"
                key={index}
              >
                {image.image}
              </div>
            ))}
            @nexacreatives
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Our Services</h2>
          <ul className="flex flex-col text-gray-500 gap-2">
            <li>Web Design & Development</li>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Social Media Management</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Quick links</h2>

          <ul className="gap-2 text-gray-500 flex flex-col">
            {links.map((link, index) => (
              <li className="hover:text-accent" key={link.name}>
                {index !== 0 ? (
                  <a href={link.href}>{link.name}</a>
                ) : (
                  <a href="#">{link.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex text-center w-full py-2 text-xs flex-wrap items-center justify-center opacity-85 gap-4">
        <p className="text-sm">
          Copyrights © {year}{" "}
          <span className="text-accent">Nexa Creative Solution </span> All
          rights reserved
        </p>
        <div className="h-1 w-1 bg-black rounded-full"></div>
        <Link
          onClick={handleScrollToTop}
          className="text-sm hover:font-bold"
          to="/terms"
        >
          Terms & Conditions
        </Link>
        <div className="h-1 w-1 bg-black rounded-full"></div>
        <Link
          onClick={handleScrollToTop}
          className="text-sm hover:font-bold"
          to="/privacy"
        >
          Privacy policy
        </Link>
      </div>
    </motion.section>
  );
};

export default Footer;
