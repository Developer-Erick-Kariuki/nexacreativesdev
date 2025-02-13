import { FcProcess } from "react-icons/fc";
import { easeIn, motion } from "framer-motion";

const services = [
  { name: "Graphic Design", src: "/graphic.png" },
  { name: "Website Design", src: "/webdesign.png" },
  { name: "Branding Identity", src: "/media.png" },
];
const processes = [
  {
    name: "Discover",
    icon: <FcProcess />,
    desc: "This is the initial stage of the project",
  },
  {
    name: "Difine",
    icon: "",
    desc: "This is the initial stage of the project",
  },
  {
    name: "Design",
    icon: "",
    desc: "This is the initial stage of the project",
  },
  {
    name: "Lauch",
    icon: "",
    desc: "This is the initial stage of the project",
  },
];

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: easeIn }}
      id="services"
      className="z-10 w-full mt-16 "
    >
      <div className="flex flex-col w-full mx-auto justify-center items-center">
        <h2 className="text-base font-bold text-accent">Services</h2>
        <p className="text-3xl max-w-xs md:max-w-md font-bold text-center">
          We offer the best services in
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center hover:-translate-y-3 transition-transform duration-300 ease-in-out cursor-pointer w-[20rem]"
          >
            <a href="#" className="absolute text-xl font-bold mx-auto">
              {service.name}
            </a>
            <img
              className="rounded-full object-contain ring-1"
              src={service.src}
              alt="graphic design"
              width={200}
            />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeIn }}
        className="flex justify-center mt-16 flex-col"
      >
        <h2 className="text-accent font-bold text-center">Our Process</h2>
        <p className="text-center text-3xl font-bold ">Our Solution Process</p>
        <div className="flex flex-wrap gap-8 mt-8 justify-center">
          {processes.map((process, index) => (
            <div
              key={index}
              className="flex hover:bg-slate-900 px-2 py-3 rounded-xl justify-center hover:-translate-y-2 transition-all duration-300 ease-linear"
            >
              <div className="flex justify-center gap-4 items-center">
                <div className="h-[4rem] w-[4rem] ring-1 flex justify-center items-center border-dashed rounded-full">
                  <FcProcess size={38} />
                </div>
                <div className="flex justify-start flex-col gap-2 ">
                  <h2 className=" text-accent font-semibold">{process.name}</h2>
                  <p className=" transition-all duration-500 ease-in-out">
                    {process.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
