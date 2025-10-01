import { motion } from "framer-motion";
import Button from "../components/Button";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mb-16 rounded-2xl "
    >
      <div className="w-full py-20 mx-auto justify-between items-center flex flex-col md:flex-row ">
        <div className="flex md:w-1/2  md:mt-0 flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl font-bold mt-12"
          >
            Make Designs that Engage, Delight and Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="max-w-md mt-4"
          >
            We craft lightning-fast websites for ambitious brands. From UX to
            launch — we don’t just build pretty sites. We build results.
          </motion.p>
          <div className="flex-col gap-4 mt-16 flex md:flex-row">
            <Button
              name="Get in touch"
              className="bg-violet-800 border text-white"
            />
            <Button name="Our work" className="text-black bg-white" />
          </div>
        </div>
        <img src="/hero.png" alt="" width={512} className="drop-shadow-2xl" />
      </div>
    </motion.section>
  );
};

export default Hero;
