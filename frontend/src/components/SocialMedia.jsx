import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  { image: <FaXTwitter size={20} /> },
  { image: <FaThreads size={20} /> },
  { image: <FaFacebookF size={20} /> },
  { image: <FaBehance size={20} /> },
  { image: <FaInstagram size={20} /> },
];

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
      className={`hidden md:flex right-0 -bottom-20 mt-8 absolute border rounded-full z-20 gap-3 px-6 py-3`}
    >
      {socialLinks.map((icon, index) => (
        <div className={`cursor-pointer hover:text-accent`} key={index}>
          {icon.image}
        </div>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
