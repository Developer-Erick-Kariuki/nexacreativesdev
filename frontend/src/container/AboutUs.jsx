import Container from "../components/Container";
import "../index.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="mx-auto justify-center mt-4  w-full items-center "
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: false }}
          className="dark:bg-gray-600/30 bg-slate-300/20 flex flex-col md:flex-row justify-between p-8 items-center rounded-2xl mb-4"
        >
          <div>
            <h3 className="text-sm uppercase tracking-widest flex-col font-bold flex">
              About
            </h3>
            <h2 className="text-2xl font-semibold mb-8">
              Nexa Digital Solutions
            </h2>

            <p className="max-w-md">
              At Nexa Digital Solutions, we believe that every brand has a
              unique story to tell. As a premier web design and development
              agency, we specialize in crafting innovative digital experiences
              that not only captivate but also convert. Our mission is to
              transform your vision into a powerful online presence that drives
              results.
            </p>
          </div>
          <img src="hero1.png" width={350} alt="" className="shadow-sm" />
        </motion.div>

        <div className="flex md:px-8 pt-8  dark:bg-gray-600/30 bg-slate-300/25 rounded-2xl flex-col justify-between  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }}
            className="flex justify-between w-full flex-col-reverse gap-6 md:flex-row px-8 items-center  rounded-2xl"
          >
            <div className="max-h-[500px] overflow-clip">
              <img src="/about.png" fill className="object-cover" />
            </div>
            <div className={`flex rounded-2xl flex-col`}>
              <h2 className="text-sm uppercase tracking-widest  mb-8 font-bold">
                Our Philosophy
              </h2>
              <p className="text-base max-w-2xl leading-relaxed">
                We approach each project with a commitment to excellence,
                blending artistic vision with technical precision. Our
                philosophy is simple: understand the client’s needs, create a
                tailored solution, and deliver beyond expectations. We are
                dedicated to building websites that are not only visually
                stunning but also functional and user-friendly.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
