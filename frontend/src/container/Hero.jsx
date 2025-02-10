import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative mt-16 items-start justify-between flex flex-col md:flex-row">
        <div className="flex w-full flex-col z-20 mt-20">
          <motion.h1
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-3xl md:text-4xl max-w-md leading-slug font-zenDots uppercase"
          >
            Transforming your vision into stunning
            <span className="text-accent"> websites...</span>{" "}
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
            className="flex gap-8 flex-col md:flex-row mt-16"
          >
            <a href="#contact">
              <button className="cursor-pointer w-full md:w-auto justify-center flex gap-4 items-center bg-accent text-white px-8 text-sm py-3 rounded-2xl font-bold">
                Have yours today
                <span className="rotate-45">
                  <FaLocationArrow />
                </span>
              </button>
            </a>
            <a href="#portfolio">
              <button className="flex gap-4 w-full md:w-auto justify-center items-center cursor-pointer ring-2 ring-white text-white px-8 text-sm py-3 rounded-2xl font-bold">
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
          className="z-10 hidden md:flex float-start"
        >
          <img className=" object-contain" src="/hero.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute z-0"
        >
          <h1 className="text-[400px] hidden md:flex font-extrabold text-slate-500/50 opacity-10">
            NEXA
          </h1>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
