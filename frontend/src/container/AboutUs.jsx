import "../index.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="mx-auto justify-center mt-32 w-full items-center "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: false }}
        className="bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50 rounded-2xl p-5 mb-4"
      >
        <h2 className="text-2xl flex-col font-bold flex mb-8 text-center">
          <span className="text-accent text-lg">About</span> Nexa Digital
          Solutions
        </h2>

        <div className="flex flex-col-reverse py-16  items-center justify-between  w-full">
          <p className="text-base max-w-2xl  leading-relaxed mb-4">
            At Nexa Digital Solutions, we believe that every brand has a unique
            story to tell. As a premier web design and development agency, we
            specialize in crafting innovative digital experiences that not only
            captivate but also convert. Our mission is to transform your vision
            into a powerful online presence that drives results.
          </p>
        </div>
      </motion.div>
      <div className="flex  flex-col gap-8 justify-between md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }}
          className="flex bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50 md:w-[512px]  rounded-2xl"
        >
          <img src="/about.png" className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }}
          className="flex  bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50 w-full  flex-col p-5 rounded-2xl"
        >
          <div className={` flex p-5 rounded-3xl flex-col mt-8 md:mt-0`}>
            <h2 className="text-base text-accent font-bold mb-2">Our Story</h2>
            <p className="text-base leading-relaxed max-w-xl ">
              Founded on a passion for creativity and technology, Nexa-Creative
              Solutions was born from a desire to bridge the gap between
              exceptional design and cutting-edge development. With years of
              experience in the industry, our team of experts brings a wealth of
              knowledge and a fresh perspective to every project we undertake.
            </p>
          </div>
          <div className="flex flex-col">
            <div className={`flex  p-5 rounded-2xl flex-col mt-8 md:mt-0`}>
              <h2 className="text-base text-accent mb-2 font-bold">
                Our Philosophy
              </h2>
              <p className="text-base max-w-xl leading-relaxed">
                We approach each project with a commitment to excellence,
                blending artistic vision with technical precision. Our
                philosophy is simple: understand the client’s needs, create a
                tailored solution, and deliver beyond expectations. We are
                dedicated to building websites that are not only visually
                stunning but also functional and user-friendly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
