import { useContext } from "react";
import "../index.css";
import { easeIn, easeInOut, motion } from "framer-motion";
import { ThemeContext } from "../components/ThemeContextProvider";

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="about"
      className="mx-auto justify-center w-full px-6 items-center mt-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeIn }}
        viewport={{ once: true }}
        className="text-2xl flex-col font-bold flex mb-8 text-center"
      >
        <span className="text-accent text-lg">About</span> Nexa Creative
        Solutions
      </motion.h2>

      <div className="flex flex-col-reverse items-center justify-between  w-full">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base max-w-2xl text-center leading-relaxed mb-4"
        >
          At Nexa Creative Solutions, we believe that every brand has a unique
          story to tell. As a premier web design and development agency, we
          specialize in crafting innovative digital experiences that not only
          captivate but also convert. Our mission is to transform your vision
          into a powerful online presence that drives results.
        </motion.p>
      </div>
      <div className="flex flex-col gap-8 justify-center md:flex-row mt-8">
        <div className="flex max-w-md w-full h-full">
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            src="/aboutImg.png"
            className="object-contain"
          />
        </div>

        <div className="flex max-w-md w-full flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeIn }}
            viewport={{ once: true }}
            className={`${
              theme === "dark" ? "bg-slate-800" : "bg-slate-100"
            } flex p-5 rounded-3xl flex-col mt-8 md:mt-0`}
          >
            <h2 className="text-base text-accent font-bold">Our Story</h2>
            <p className="text-base leading-relaxed">
              Founded on a passion for creativity and technology, Nexa-Creative
              Solutions was born from a desire to bridge the gap between
              exceptional design and cutting-edge development. With years of
              experience in the industry, our team of experts brings a wealth of
              knowledge and a fresh perspective to every project we undertake.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeIn }}
            viewport={{ once: true }}
            className="flex max-w-md flex-col"
          >
            <div
              className={`${
                theme === "dark" ? "bg-slate-800" : "bg-slate-200"
              } flex  p-5 rounded-2xl flex-col mt-8 md:mt-0`}
            >
              <h2 className="text-base text-accent font-bold">
                Our Philosophy
              </h2>
              <p className="text-base leading-relaxed">
                Our Philosophy We approach each project with a commitment to
                excellence, blending artistic vision with technical precision.
                Our philosophy is simple: understand the client’s needs, create
                a tailored solution, and deliver beyond expectations. We are
                dedicated to building websites that are not only visually
                stunning but also functional and user-friendly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
