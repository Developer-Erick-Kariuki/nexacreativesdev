import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { handleScrollToTop } from "../constants";

const WhatsAppButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${isScrolled ? "block" : "hidden"} items-center gap-2`}
    >
      <a
        href="https://wa.me/254797710074" // Replace with your WhatsApp number
        target="_blank"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Whatsup us now"
        rel="noopener noreferrer"
        className={`fixed  bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg  hover:bg-green-600 transition`}
      >
        <FaWhatsapp size={24} />
        <Tooltip id="my-tooltip" />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Back to the top"
        onClick={handleScrollToTop}
        className={`fixed bottom-20 right-7`}
      >
        <IoIosArrowDropup size={32} />
        <Tooltip id="my-tooltip" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
