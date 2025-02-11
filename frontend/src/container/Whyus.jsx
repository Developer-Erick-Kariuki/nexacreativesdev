import { motion, easeIn } from "framer-motion";

const Whyus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: easeIn }}
      viewport={{ once: true }}
      className="flex mt-32 mx-6 md:mx-10 flex-col-reverse gap-8 py-6 md:py-0 ring-slate-800 ring-1 items-center bg-slate-900 px-3 rounded-3xl  md:flex-row"
    >
      <div className="flex ml-16 flex-col justify-center">
        <h2 className="text-3xl text-accent font-bold mb-8">Why Choose Us?</h2>
        <ul className="list-outside gap-4 flex flex-col list-disc">
          <li className="text-base font-light leading-relaxed">
            <b className="font-bold">Tailored Solutions:</b> We create
            customized strategies that align with your brand’s goals and target
            audience.
          </li>
          <li className="text-base font-light leading-relaxed">
            <b className="font-bold">Attention to Detail:</b> Every project is
            crafted with meticulous attention to detail, ensuring a polished
            final product.
          </li>
          <li className="text-base font-light leading-relaxed">
            <b className="font-bold">Commitment to Excellence:</b> Our
            commitment to quality and client satisfaction is unwavering. We go
            above and beyond to ensure your vision is realized.
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-full">
        <img src="/whyus.png" alt="" width={500} />
      </div>
    </motion.div>
  );
};

export default Whyus;
