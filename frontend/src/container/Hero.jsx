import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="mb-16 rounded-b-xl px-2 overflow-hidden  "
    >
      <Container>
        <div className="bg-[url(/gradient.png)] md:left-[40%] -top-64 h-[500px] w-96 bg-cover absolute -z-10 opacity-50 blur-3xl rounded-full"></div>
        <div className="w-full mx-auto justify-between items-center flex flex-col md:flex-row ">
          <div className="flex w-full md:mt-0 flex-col">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-3xl md:text-5xl text-center capitalize md:text-start md:max-w-xl font-bold mt-12 mb-16"
            >
              We Create Designs that Engage, Delight & Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className="md:max-w-md w-full text-base mb-4 text-center md:text-start"
            >
              We craft lightning-fast websites for ambitious brands. From UX to
              launch — we don’t just build pretty sites. We build results.
            </motion.p>
            <div className="flex-col gap-4 flex md:flex-row">
              <Button
                name="Get in touch"
                href="https://wa.me/254797710074"
                target="_blank"
                className="bg-black/95 dark:bg-white/95 dark:text-black  text-white"
              />
              <Button
                href="#services"
                name="What we do"
                className="text-black dark:outline-2 dark:bg-transparent dark:text-white bg-white"
              />
            </div>
          </div>
          <img src="/hero.png" alt="" fill className="drop-shadow-2xl" />
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;
