import { motion, easeInOut, easeIn } from "framer-motion";

const Whyus = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-center min-h-screen mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeIn }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold my-8">Why Choose Us?</h2>
        <ul className="list-outside leading-relaxed gap-4 px-4 flex flex-col list-disc">
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
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        viewport={{ once: true }}
        className="flex justify-center  items-center overflow-hidden"
      >
        <img src="/whyus.png" alt="why-us" width={512} />
      </motion.div>
    </section>
  );
};

export default Whyus;
