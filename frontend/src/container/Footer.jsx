import { links } from "../constants";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import WhatsAppButton from "../components/Whatsapp";

const year = new Date().getFullYear();

const socialLinks = [
  { image: <FaXTwitter /> },
  { image: <FaThreads /> },
  { image: <FaFacebookF /> },
  { image: <FaBehance /> },
  { image: <FaInstagram /> },
];

const Footer = () => {
  return (
    <section className="mt-32 w-full py-4 mx-auto bg-slate-900 px-6 md:px-10 footer">
      <div className="flex w-full flex-wrap gap-6  justify-between">
        <div className="flex flex-col">
          <img src="/logo.svg" alt="logo" className="w-36" />
          <p className="max-w-sm mt-3">
            Enhancing online presence simply the best
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold md:text-4xl text-xl max-w-sm">
            Friendly and valuable services at your door step.
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Services</h2>
          <ul className="flex flex-col gap-2">
            <li>Graphic Design</li>
            <li>Social Media</li>
            <li>Web Design & Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Quick links</h2>
          <ul className="gap-2 flex flex-col">
            {links.map((link) => (
              <li key={link.name}>{link.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="h-1 border-accent my-12" />
      <div className="flex  flex-wrap justify-center items-center gap-6">
        {socialLinks.map((image, index) => (
          <div
            className="w-[2.5rem] h-[2.5rem] rounded-full ring-1 ring-slate-500 hover:ring-accent transition-all duration-300 ease-linear flex justify-center items-center"
            key={index}
          >
            {image.image}
          </div>
        ))}
      </div>
      <p className="text-center text-sm mt-8">
        {year} @copyrights all rights reserved
      </p>
      <WhatsAppButton />
    </section>
  );
};

export default Footer;
