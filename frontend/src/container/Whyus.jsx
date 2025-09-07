import { motion, easeInOut, easeIn, delay } from "framer-motion";

const Whyus = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full rounded-2xl flex flex-col md:flex-row justify-between overflow-x-clip items-center mt-32 mx-auto bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeIn }}
        className="mx-12 my-8 md:my-0"
      >
        <h2 className="text-3xl mb-8 font-bold">Why Choose Us?</h2>
        <ul className="list-outside leading-relaxed gap-4  flex flex-col list-disc">
          <li className="font-light max-w-lg leading-relaxed">
            <p className="font-bold  text-base">Tailored Solutions: </p>
            We create customized strategies that align with your brand’s goals
            and target audience.
          </li>
          <li className="font-light max-w-lg leading-relaxed">
            <p className="font-bold text-accent text-base">
              Attention to Detail:
            </p>
            Every project is crafted with meticulous attention to detail,
            ensuring a polished final product.
          </li>
          <li className="font-light max-w-lg leading-relaxed">
            <p className="font-bold text-accent taxt-base">
              Commitment to Excellence:
            </p>
            Our commitment to quality and client satisfaction is unwavering. We
            go above and beyond to ensure your vision is realized.
          </li>
        </ul>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        src="/whyus.png"
        alt="why-us"
        width={512}
        className="md:-mt-8"
      />
    </motion.section>
  );
};

export default Whyus;
