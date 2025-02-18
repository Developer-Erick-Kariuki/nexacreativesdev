import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";

import SpinningBorderButton from "../components/Button";

const Hero = () => {
  return (
    <section className="mt-16 relative justify-between w-full flex flex-col-reverse md:flex-row">
      <div className="flex flex-col mt-20">
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl max-w-lg leading-slug  font-semibold leading-snug uppercase"
        >
          Transforming your vision into
          <span className="bg-gradient-to-r from-purple-600 via-green-500 to-red-400 text-transparent font-extrabold bg-clip-text">
            {" "}
            stunning visual designs
          </span>{" "}
        </motion.h1>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base font-light max-w-lg mt-8 leading-loose"
        >
          Our award-winning design agency blends creativity with cutting-edge
          technology to deliver unique and engaging digital experiences. Let’s
          create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, stiffness: 100, delay: 1 }}
          className="flex z-50 md:z-10 gap-4 flex-col md:flex-row mt-16"
        >
          <a href="#contact">
            <SpinningBorderButton
              name="Have yours Today"
              className="bg-black"
            />
          </a>
          <a href="#portfolio">
            <button className="bg-transparent px-8 text-sm py-3 w-full ring-1 ring-primary rounded-xl ">
              Our Work
            </button>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ z: 0, x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          stiffness: 100,
        }}
        className="flex"
      >
        <img className=" object-contain" width={600} src="/hero1.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute -z-10"
      >
        <h1 className=" hidden text-[400px] md:flex font-extrabold text-slate-200/5">
          NEXA
        </h1>
      </motion.div>
      <SocialMedia />
    </section>
  );
};

export default Hero;
