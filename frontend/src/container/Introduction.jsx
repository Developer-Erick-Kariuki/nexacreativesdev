import { useEffect, useState } from "react";
import IntroImg from "/intro.png";
import { motion } from "framer-motion";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && !isVisible) {
        setIsVisible(true);
      } else if (scrollY <= 50 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <section className="w-full  flex justify-center ring-1 ring-slate-500 hover:ring-accent  bg-slate-900 rounded-3xl  items-center mx-auto mt-32">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <img
          src={IntroImg}
          className="w-[750px] h-full object-cover"
          alt="model image"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 800 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p className="text-2xl lg:text-3xl font-semibold lg:max-w-sm max-w-xs  -ml-48 mt-20">
          Commitment to delivering exceptional{" "}
          <span className="text-accent">web</span> experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Introduction;
