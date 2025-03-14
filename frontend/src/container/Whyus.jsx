import { motion, easeInOut, easeIn } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContextProvider";

const Whyus = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="flex justify-center px-6 mt-16 w-full mx-auto">
      <div
        className={`${
          theme === "dark" ? "bg-slate-800" : "bg-slate-200"
        } flex items-center max-w-7xl rounded-2xl px-10 justify-between flex-col md:flex-row bg-slate-800`}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeIn }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className="text-3xl font-bold my-8">Why Choose Us?</h2>
          <ul className="list-outside leading-relaxed space-y-2 flex flex-col list-disc">
            <li className="font-light leading-relaxed">
              <b className="font-bold text-accent text-lg">
                Tailored Solutions:
              </b>
              We create customized strategies that align with your brand’s goals
              and target audience.
            </li>
            <li className="text-base font-light leading-relaxed">
              <b className="font-bold text-accent text-lg">
                Attention to Detail:
              </b>
              Every project is crafted with meticulous attention to detail,
              ensuring a polished final product.
            </li>
            <li className="text-base font-light leading-relaxed">
              <b className="font-bold text-accent taxt-lg">
                Commitment to Excellence:
              </b>
              Our commitment to quality and client satisfaction is unwavering.
              We go above and beyond to ensure your vision is realized.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeInOut }}
          viewport={{ once: true }}
          className="flex justify-center items-center overflow-hidden max-w-md"
        >
          <img src="/whyus.png" alt="why-us" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Whyus;
