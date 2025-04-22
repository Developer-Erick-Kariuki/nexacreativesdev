import { motion } from "framer-motion";
import { socialLinks } from "../container/Footer";

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
      className={`hidden md:flex w-fit absolute z-20 gap-3 md:px-12 `}
    >
      {socialLinks.map((icon, index) => (
        <div
          className={`cursor-pointer text-slate-400 hover:text-accent`}
          key={index}
        >
          {icon.image}
        </div>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
