import { links } from "../constants";
import WhatsAppButton from "../components/Whatsapp";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContextProvider";
import NexaLogo from "/nexalogo.png";
import LightLogo from "/logo light.png";
import { Link } from "react-router-dom";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

// Define socialLinks array
export const socialLinks = [
  { image: <FaGithub size={20} />, href: "https://github.com" },
  { image: <FaInstagram size={20} />, href: "https://instagram.com" },
  { image: <FaTiktok size={20} />, href: "https://tiktok.com" },
  { image: <FaThreads size={20} />, href: "https://threads.net" },
  { image: <FaXTwitter size={20} />, href: "https://twitter.com" },
];

const year = new Date().getFullYear();

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`${
        theme === "dark"
          ? "bg-slate-900 text-primary"
          : "bg-slate-200 text-secondary"
      }  text-primary shadow-xl mx-auto  w-full`}
    >
      <div className="flex  py-6 w-full flex-wrap gap-6 justify-between px-6 md:px-12">
        <div className="flex flex-col gap-3">
          <img
            src={theme === "dark" ? LightLogo : NexaLogo}
            alt="logo"
            width={150}
          />
          <p className="max-w-sm mt-3">
            Enhancing online presence simply the best
          </p>
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

        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Our Services</h2>
          <ul className="flex flex-col gap-2">
            <li>Web Design & Development</li>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Social Media Management</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Quick links</h2>

          <ul className="gap-2 flex flex-col">
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

      <hr className={`${theme === "dark" ? "" : "border-gray-950"} `} />

      <div className="flex mt-8  flex-wrap justify-center items-center gap-6">
        <p className="">Follow us</p>{" "}
        {socialLinks.map((image, index) => (
          <div
            className="size-8 rounded-full ring-1 ring-slate-500 hover:ring-accent transition-all duration-300 ease-linear flex justify-center items-center"
            key={index}
          >
            {image.image}
          </div>
        ))}
      </div>
      <div className="flex text-center w-full bg-black text-white py-2 text-sm mt-8 flex-wrap items-center justify-center gap-4">
        <p className="text-sm">
          Copyrights © {year}{" "}
          <span className="text-accent">Nexa Creative Solution </span> All
          rights reserved
        </p>
        <Link onClick={handleScrollToTop} to="/terms">
          Terms & Conditions
        </Link>
        <Link onClick={handleScrollToTop} to="/privacy">
          Privacy policy
        </Link>
      </div>
      <WhatsAppButton />
    </section>
  );
};

export default Footer;
