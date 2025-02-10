import { useEffect, useRef, useState } from "react";
import "../index.css";
import { easeIn, easeInOut, motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";

const info = [
  { name: "Innovative", icon: "/innovative.svg" },
  { name: "Client Satisfaction", icon: "/success.svg" },
  { name: "Quality guaranteed", icon: "/client.svg" },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && !isVisible) {
        setIsVisible(true);
      } else if (scrollY <= 50 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  return (
    <section
      id="about"
      className="mx-auto justify-center relative w-full items-center mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: easeIn }}
        className="flex flex-col"
      >
        <h2 className="text-lg flex-col font-bold flex text-center">
          <span className="text-accent text-base">About</span> Nexa Creative
          Solutions
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeIn }}
        className="flex flex-col w-full justify-between md:flex-row  mt-16"
      >
        <p className="text-base max-w-full text-left md:max-w-md my-8 leading-relaxed">
          At Nexa Creative Solutions, we believe that every brand has a unique
          story to tell. As a premier web design and development agency, we
          specialize in crafting innovative digital experiences that not only
          captivate but also convert. Our mission is to transform your vision
          into a powerful online presence that drives results.
        </p>
        <div className="flex gap-6  items-center">
          {info.map((icon, index) => (
            <motion.div
              initial={{ width: 80 }}
              whileHover={{ width: 300 }}
              transition={{ duration: 0.5, ease: easeIn }}
              key={index}
              className={`p-4 hover items-center gap-8 flex ring-1 ring-accent rounded-full`}
            >
              <img src={icon.icon} alt="icon" width={48} />
              <p className="active transition-all  duration-300 ease-in">
                {icon.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="flex flex-col justify-between md:flex-row mx-0 md:mx-12 mt-16">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: easeIn }}
          src="/aboutImg.png"
          alt=""
          width={600}
        />

        <div className="flex max-w-md flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: easeIn }}
            className="flex ring-1 ring-slate-500 hover:ring-accent p-5 rounded-3xl flex-col mt-8 md:mt-0"
          >
            <h2 className="text-base text-accent font-bold mb-8">Our Story</h2>
            <p className="text-base  leading-relaxed">
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
            transition={{ duration: 1, delay: 1, ease: easeIn }}
            className="flex max-w-md flex-col"
          >
            <div className="flex ring-1 ring-slate-500 hover:ring-accent p-5 rounded-3xl flex-col mt-8 md:mt-0">
              <h2 className="text-base text-accent font-bold mb-8">
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
