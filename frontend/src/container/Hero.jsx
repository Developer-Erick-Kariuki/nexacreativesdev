import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";

const Hero = () => {
  return (
    <section className="mt-16 relative items-start justify-between flex flex-col md:flex-row">
      <div className="flex w-full flex-col mt-20">
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl max-w-md leading-slug font-zenDots uppercase"
        >
          Transforming your vision into stunning visual
          <span className="text-accent"> designs</span>{" "}
        </motion.h1>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base max-w-lg mt-8 leading-loose"
        >
          Our award-winning web design agency blends creativity with
          cutting-edge technology to deliver unique and engaging digital
          experiences. Let’s create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, stiffness: 100, delay: 1 }}
          className="flex z-10 gap-4 flex-col md:flex-row mt-16"
        >
          <a href="#contact">
            <button className="cursor-pointer w-full md:w-auto justify-center flex gap-4 items-center bg-accent text-white px-8 text-sm py-3 rounded-xl font-bold">
              Have yours today
              <span className="rotate-45">
                <FaLocationArrow />
              </span>
            </button>
          </a>
          <a href="#portfolio">
            <button className="flex gap-4 w-full md:w-auto justify-center items-center cursor-pointer ring-2 ring-white text-white px-8 text-sm py-3 rounded-xl font-bold">
              Our Work
              <span className="rotate-45">
                <FaLocationArrow />
              </span>
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
        className="hidden md:flex float-start"
      >
        <img className=" object-contain" width={1000} src="/hero.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute -z-10"
      >
        <h1 className="text-[28rem] text-center md:flex font-extrabold text-slate-600 opacity-10">
          NEXA
        </h1>
      </motion.div>
      <SocialMedia />
    </section>
  );
};

export default Hero;
