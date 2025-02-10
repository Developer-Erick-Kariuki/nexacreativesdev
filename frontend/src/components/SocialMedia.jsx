import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const socialLinks = [
  { image: <FaXTwitter /> },
  { image: <FaThreads /> },
  { image: <FaFacebookF /> },
  { image: <FaBehance /> },
  { image: <FaInstagram /> },
];

const SocialMedia = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isLeftSide, setIsLeftSide] = useState(false);
  const [topPosition, setTopPosition] = useState(100); // Initial top position

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer"); // Ensure your footer has this class
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top < window.innerHeight);
      }

      // Alternate side every 1000px of scroll
      setIsLeftSide(window.scrollY % 1000 < 500);

      // Change top position dynamically based on scroll position
      setTopPosition(100 + window.scrollY * 0.2); // Adjust multiplier for speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: isFooterVisible ? 0 : 1,
        x: isFooterVisible ? 20 : 0,
        top: isFooterVisible ? "100%" : `${topPosition}px`, // Moves dynamically
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`md:flex flex-col absolute gap-4 ring-slate-500  ring-1 p-2 rounded-full w-8 
        ${isFooterVisible ? "hidden" : "block"}
        ${isLeftSide ? "left-2" : "right-2"}
      `}
      style={{ top: `${topPosition}px` }}
    >
      {socialLinks.map((icon, index) => (
        <div key={index}>{icon.image}</div>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
