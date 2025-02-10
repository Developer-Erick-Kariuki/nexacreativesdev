import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/254797710074" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
      className="fixed bottom-4 right-12 md:bottom-6 md:right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  );
};

export default WhatsAppButton;
