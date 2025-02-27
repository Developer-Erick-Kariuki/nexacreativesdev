import { motion, easeInOut, easeIn } from "framer-motion";

const Whyus = () => {
  return (
    <section className="flex mt-32 flex-col-reverse gap-4 items-center bg-gray-800  rounded-3xl md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeIn }}
        className="flex flex-col p-5 mx-4 relative justify-center"
      >
        <h2 className="text-3xl text-primary font-bold mb-8">Why Choose Us?</h2>
        <ul className="list-outside leading-relaxed space-y-2 flex flex-col list-disc">
          <li className="font-light leading-relaxed">
            <b className="font-bold text-accent text-lg">Tailored Solutions:</b>{" "}
            We create customized strategies that align with your brand’s goals
            and target audience.
          </li>
          <li className="text-base font-light leading-relaxed">
            <b className="font-bold text-accent text-lg">
              Attention to Detail:
            </b>{" "}
            Every project is crafted with meticulous attention to detail,
            ensuring a polished final product.
          </li>
          <li className="text-base font-light leading-relaxed">
            <b className="font-bold text-accent taxt-lg">
              Commitment to Excellence:
            </b>{" "}
            Our commitment to quality and client satisfaction is unwavering. We
            go above and beyond to ensure your vision is realized.
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="flex justify-center items-center overflow-hidden h-[60vh] relative w-full"
      >
        <img src="/whyus.png" alt="" className="z-10 absolute top-0" />
        <img
          src="/abstract.png"
          className="absolute w-full h-full opacity-25"
          alt=""
        />
      </motion.div>
    </section>
  );
};

export default Whyus;
