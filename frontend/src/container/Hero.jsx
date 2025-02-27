import { easeInOut, motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import CallToAction from "../components/callToAction";

const Hero = () => {
  return (
    <section className="mt-16 relative justify-between w-full flex flex-col-reverse md:flex-row">
      <div className="flex flex-col mt-20">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0, ease: easeInOut }}
          className="text-3xl md:text-4xl max-w-lg leading-slug  font-semibold leading-snug uppercase"
        >
          Transforming your vision into
          <span className="bg-gradient-to-l from-purple-600 via-green-500 to-red-400 text-transparent font-extrabold bg-clip-text">
            {" "}
            stunning visual designs
          </span>{" "}
        </motion.h1>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
          className="text-base font-light max-w-lg mt-8 leading-loose"
        >
          Our award-winning design agency blends creativity with cutting-edge
          technology to deliver unique and engaging digital experiences. Let’s
          create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: easeInOut }}
          className="flex flex-col md:flex-row gap-8 z-50 md:z-10  mt-8"
        >
          <CallToAction
            href="#contact"
            name="Get started"
            className="bg-gradient-to-tr w-full hover:from-purple-600 hover:to-blue-600 transition-color duration-300 ease-linear from-blue-600 to-purple-600 "
          />
          <CallToAction
            href="#portfolio"
            name="Our Work"
            className="transition-color w-full duration-300 ease-linear bg-transparent ring-1 ring-white hover:ring-0 border-none hover:bg-gradient-to-tr from-blue-600 to-purple-600"
          />
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
        <img className=" object-contain" width={400} src="/hero1.png" alt="" />
      </motion.div>
      <motion.div
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute -z-10"
      >
        <h1 className=" hidden text-[400px] md:flex font-extrabold text-slate-800/25">
          NEXA
        </h1>
      </motion.div>
      <SocialMedia />
    </section>
  );
};

export default Hero;
