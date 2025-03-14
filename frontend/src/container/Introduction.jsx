import { useContext } from "react";
import IntroImg from "/intro.png";
import { easeIn, easeInOut, motion } from "framer-motion";
import { ThemeContext } from "../components/ThemeContextProvider";

const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="mt-32 w-screen flex px-2 md:px-0 justify-center">
      <div
        className={`${
          theme === "dark" ? "bg-slate-800" : "bg-slate-200"
        } max-w-6xl px-6 justify-between items-center rounded-2xl flex md:flex-row flex-col w-full`}
      >
        <motion.div
          initial={{ opacity: 0, y: 200, z: 200 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 1, delay: 1, ease: easeInOut }}
          viewport={{ once: true }}
        >
          <div className="flex max-w-lg">
            <img
              src={IntroImg}
              className="h-full w-full object-cover"
              alt="model image"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeIn }}
          viewport={{ once: true }}
        >
          <div className="flex max-w-md justify-center items-center">
            <p className="text-xl md:text-3xl text-center md:text-start font-semibold">
              Commited to delivering exceptional
              <span className="text-accent"> online </span> experiences
              <span className="text-accent">.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
