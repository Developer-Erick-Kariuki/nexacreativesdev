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
        <div className="flex w-full md:mt-0 flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-5xl md:text-6xl text-center capitalize md:text-start font-bold mt-12"
          >
            We Create Designs that Engage, Delight & Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="mt-4 md:max-w-md w-full text-center md:text-start"
          >
            We craft lightning-fast websites for ambitious brands. From UX to
            launch — we don’t just build pretty sites. We build results.
          </motion.p>
          <div className="flex-col gap-4 mt-16 flex md:flex-row">
            <Button
              name="Get in touch"
              className="bg-black/95 dark:bg-white/95 dark:text-black  text-white"
            />
            <Button
              name="Our work"
              className="text-black dark:outline-2 dark:bg-transparent dark:text-white bg-white"
            />
          </div>
        </div>
        <img src="/hero.png" alt="" width={512} className="drop-shadow-2xl" />
      </div>
    </motion.section>
  );
};

export default Hero;
