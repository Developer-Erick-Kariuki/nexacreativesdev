import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-gradient-to-br from-violet-400/10 via-pink-200/80 to-slate-200/50"
    >
      <div className="w-full h-screen mx-auto justify-between items-center flex flex-col md:flex-row max-w-7xl px-4">
        <div className="flex w-full mt-[20%] md:mt-0 flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-7xl font-bold mt-12 mb-8 capitalize"
          >
            We transform your vision into stuning visual reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="text-lg my-4 leading-relaxed tracking-wider"
          >
            We blends creativity with cutting-edge technology to deliver unique
            and engaging digital experiences. Let’s create something
            extraordinary together.
          </motion.p>
          <div className="flex-col gap-4 mt-8 flex md:flex-row">
            <motion.button
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: 1 }}
              className="rounded-full shadow bg-purple-600 py-3 px-5 text-white"
            >
              Get in touch
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: 1.2 }}
              className="rounded-full bg-white shadow py-3 px-5"
            >
              See Our Work
            </motion.button>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0 }}
          src="/Hero-image.webp"
          className="w-full"
          alt="hero image"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
