import { easeIn, motion } from "framer-motion";
import { processes } from "../constants";
import { AiFillStar } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBorderTopLeft } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { SiWebgpu } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeContextProvider";
import { ArrowBigDown } from "lucide-react";

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

const avatars = [
  { src: "/avatar1.webp" },
  { src: "/avatar2.webp" },
  { src: "/avatar3.webp" },
];

const cardNavigation = [
  { name: "Discover", number: "01" },
  { name: "Define", number: "02" },
  { name: "Design", number: "03" },
  { name: "Launch", number: "04" },
];

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setisActive] = useState(0);
  const [istop, setistop] = useState(0);
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeIn }}
      viewport={{ once: true }}
      id="services"
      className="z-10 w-full mt-16 px-6 flex justify-center"
    >
      <div className="max-w-7xl">
        <div className="flex flex-col w-full mx-auto justify-center items-center">
          <h2 className="text-base font-bold text-accent">Services</h2>
          <p className="text-3xl max-w-xs md:max-w-md font-bold text-center">
            We offer the best services in
          </p>
        </div>

        <div className="w-full flex  justify-center px-6">
          <div className="grid grid-cols-1 max-w-7xl md:grid-cols-2 lg:grid-cols-3 grid-rows-2 justify-center gap-4 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                } flex flex-col p-6 rounded-xl overflow-clip hover:-translate-y-1 hover:ring-1 ring-accent transition-all duration-300 ease-in-out cursor-pointer`}
              >
                <i className="mb-4  text-accent">{service.icon}</i>
                <a href="#" className="uppercase z-20 font-light">
                  {service.name}
                </a>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeIn }}
          viewport={{ once: true }}
          className="flex justify-center  w-full mt-16 flex-col"
        >
          <h2 className="text-accent font-bold text-center">Our Process</h2>
          <p className="text-center text-3xl font-bold ">
            Our Solution Process
          </p>

          <div className="flex max-w-5xl w-full mx-auto p-6 items-center mt-8 mb-32">
            <div className="gap-2 flex w-full">
              <div className="flex justify-center md:w-full flex-col gap-y-2">
                {/* start navigation */}
                {cardNavigation.map((link, index) => (
                  <li
                    key={link}
                    onClick={() => {
                      setisActive(index);
                      setistop(index);
                    }}
                    className={`${
                      theme === "dark" && isActive === index
                        ? "bg-slate-900"
                        : theme === "light" && isActive === index
                        ? "bg-slate-200"
                        : isActive !== index && theme !== "dark"
                        ? "bg-slate-200"
                        : "bg-slate-800"
                    }  flex  cursor-pointer md:px-2 px-1 rounded-xl w-full overflow-clip  gap-x-2 transition-all duration-500 ease-linear`}
                  >
                    <h2
                      className={`${
                        isActive == index && index == 0
                          ? "bg-accent"
                          : isActive == index && index == 1
                          ? "bg-blue-500"
                          : isActive == index && index == 2
                          ? "bg-green-500"
                          : isActive == index && index == 3
                          ? "bg-orange-500"
                          : "bg-slate-100 text-slate-400"
                      }   text-sm  rounded-lg px-3 py-2 text-slate-200 relative`}
                    >
                      {link.number}
                    </h2>

                    <h3
                      className={`${
                        theme === "dark" && isActive === index
                          ? "text-slate-100"
                          : theme === "light" && isActive === index
                          ? "text-slate-700"
                          : theme !== "dark" && isActive !== index
                          ? "text-slate-400"
                          : "text-slate-500"
                      }  hidden md:flex w-full font-bold text-base justify-between items-center`}
                    >
                      {link.name}

                      {isActive === index && (
                        <FaArrowRightLong className="-rotate-45 text-slate-500" />
                      )}
                    </h3>
                  </li>
                ))}
              </div>
              {/* begin process cards  */}
              <div className="w-full relative">
                {processes.map((process, index) => (
                  <div
                    key={index}
                    className={`${process.className} 
              ${
                istop === index
                  ? "z-10 top-0 px-5 opacity-100 md:translate-x-0 md:translate-y-0"
                  : index == 0 && isActive !== index
                  ? "top-0 md:translate-x-4 md:translate-y-4 opacity-70"
                  : index == 1 && isActive !== index
                  ? "top-0 md:translate-x-6 translate-y-6 opacity-50"
                  : index == 2 && isActive !== index
                  ? "top-0 md:translate-x-8 translate-y-8 opacity-30"
                  : index == 3 && isActive !== index
                  ? "top-2 md:translate-x-4 md:translate-y-4 opacity-0"
                  : ""
              } ${
                      theme === "dark"
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200"
                    }  text-lg  py-6 px-2 flex absolute h-fit  rounded-md transition-transform duration-500 delay-75 ease-ilinear`}
                  >
                    <div className="flex justify-center gap-4 items-center">
                      <div className="flex justify-start flex-col gap-2 ">
                        <div className="flex items-center justify-start gap-y-4 ">
                          <div
                            className={`${
                              index == 0
                                ? "bg-accent "
                                : index == 1
                                ? "bg-blue-500"
                                : index == 2
                                ? "bg-green-500"
                                : index == 3
                                ? "bg-orange-400"
                                : ""
                            } text-white p-2 rounded my-2 items-center"`}
                          >
                            <process.icon size={20} />
                          </div>
                        </div>
                        <p
                          className={`${
                            isActive !== index ? "opacity-5" : "opacity-100"
                          } transition-all leading-relaxed md:text-sm text-xs  duration-500 ease-in-out`}
                        >
                          {process.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
