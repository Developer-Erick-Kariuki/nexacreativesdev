import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
    <motion.a
      href="https://wa.me/254797710074" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
      className={`${
        isScrolled ? "block" : "hidden"
      } fixed  bottom-4 right-0 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition`}
    >
      <FaWhatsapp className="text-xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
