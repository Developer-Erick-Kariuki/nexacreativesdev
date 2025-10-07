import { easeIn, motion } from "framer-motion";

import { FaBorderTopLeft } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { SiWebgpu } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { MdOutlineLinkedCamera } from "react-icons/md";

const size = 38;

const services = [
  {
    name: "Web Design & Development",
    description:
      "Designing and developing custom websites, landing pages, and eCommerce platforms optimized for performance and user experience.",
    icon: <SiWebgpu size={size} />,
  },
  {
    name: "UX/UI Design",
    icon: <FaBorderTopLeft size={size} />,
    description:
      "Designing intuitive and user-friendly digital experiencies, including mobile and web app interfaces that enhance usability and engagement",
  },
  {
    name: "Graphic Design",
    description:
      "Creating visually compelling designs, including logos, social media graphics, business cards, brochures, and other branding materials.",
    icon: <IoBulbOutline size={size} />,
  },
  {
    name: "Digital Marketing",
    description:
      "Crafting effective marketing strategies, managing social media, running paid ads, and boosting brand visibility through digital campaigns.",
    icon: <SiGooglemarketingplatform />,
  },
  {
    name: "Motion Graphics & Video Editing",
    icon: <MdOutlineAutoAwesomeMotion size={size} />,
    description:
      "Producing engaging animations, logo intros, promotional videos, and social media video content to enhance brand storytelling.",
  },

  {
    name: "Photography & Videography",
    description:
      "Capturing high-quality visuals for events, corporate needs, real estate, and creative studio shoots to elevate brand presence.",
    icon: <MdOutlineLinkedCamera size={size} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="z-10 relative  w-full mt-32 flex">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col w-full mx-auto justify-center items-center"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase">
            Services
          </h2>
          <p className="text-3xl max-w-xs md:max-w-md font-bold text-center">
            We offer the best services in
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeIn" }}
              key={index}
              className={`flex bg-slate-50 transition duration-300 ease-in-out p-8 py-16 flex-col rounded-2xl overflow-clip`}
            >
              <i className="text-yellow-500 mb-2">{service.icon}</i>
              <a
                href="#"
                className="uppercase mb-4 font-bold text-sm z-20 tracking-widest"
              >
                {service.name}
              </a>
              <p className="mt-2 opacity-75">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
