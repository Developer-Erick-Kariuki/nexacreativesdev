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
    <section id="services" className="z-10 relative w-full min-h-screen flex">
      <div className="max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex flex-col w-full mx-auto justify-center items-center"
        >
          <h2 className="text-base font-bold text-accent">Services</h2>
          <p className="text-3xl max-w-xs md:max-w-md font-bold text-center">
            We offer the best services in
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 justify-center gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeIn" }}
                key={index}
                className={`flex bg-gradient-to-br from-blue-400/30 via-pink-200/20 to-slate-200/20 hover:shadow transition duration-300 ease-in-out hover:ring-1 ring-purple-500 flex-col p-6 rounded-xl overflow-clip`}
              >
                <i className="mb-4 text-purple-600">{service.icon}</i>
                <a
                  href="#"
                  className="uppercase text-purple-600 z-20 tracking-widest"
                >
                  {service.name}
                </a>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src="/pattern3.png"
          className="object-cover opacity-10 w-full h-full"
          alt=""
        />
      </div>
    </section>
  );
};

export default Services;
