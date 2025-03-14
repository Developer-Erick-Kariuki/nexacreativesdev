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

const size = 38;

const services = [
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
    name: "Web Design & Development",
    description:
      "Designing and developing custom websites, landing pages, and eCommerce platforms optimized for performance and user experience.",
    icon: <SiWebgpu size={size} />,
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
                } flex flex-col p-6 rounded-xl overflow-clip hover:-translate-x-3 transition-all duration-300 ease-in-out cursor-pointer`}
              >
                <i className="mb-4 text-accent">{service.icon}</i>
                <a href="#" className="uppercase z-20 font-light">
                  {service.name}
                </a>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed">
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
          className="flex justify-center w-full mt-16 flex-col"
        >
          <h2 className="text-accent font-bold text-center">Our Process</h2>
          <p className="text-center text-3xl font-bold ">
            Our Solution Process
          </p>
          <div className="flex flex-col md:flex-row max-w-7xl items-center mt-8 mb-32 gap-16 justify-center">
            <div className=" flex flex-col md:w-1/2 w-full gap-4">
              <div
                className={`${
                  theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                } flex flex-col  rounded-3xl p-6 space-y-4`}
              >
                <div className="flex items-center">
                  <div className="flex items-center space-x-[-8px]">
                    {avatars.map((src, index) => (
                      <div
                        key={index}
                        className="rounded-full ring-1 ring-accent overflow-clip"
                      >
                        <img
                          src={src.src}
                          alt={`Avatar ${index + 1}`}
                          width={38}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mx-4 text-sm text-slate-400">
                    Trusted by <span className="">10K+</span> brands
                  </p>
                </div>
                <hr className="h-1 border-slate-600" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 justify-end">
                    <img
                      src="/animation.gif"
                      alt="gif"
                      width={16}
                      height={16}
                    />
                    <p className="text-sm text-slate-400">
                      <span className="">24/7</span> Available support
                    </p>
                  </div>
                  <div className="flex gap-1 items-center justify-between">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} size={20} />
                      ))}
                    </div>
                    <p>4.9/5</p>
                  </div>
                </div>
              </div>

              {/* start navigation */}
              {cardNavigation.map((link, index) => (
                <div
                  key={index}
                  className="flex relative flex-col justify-between items-start w-full"
                >
                  <li
                    onClick={() => {
                      setisActive(index);
                      setistop(index);
                    }}
                    className={`${
                      isActive == index && index == 0
                        ? "bg-purple-50"
                        : isActive == index && index == 1
                        ? "bg-blue-50"
                        : isActive == index && index == 2
                        ? "bg-green-50"
                        : isActive == index && index == 3
                        ? "bg-orange-50"
                        : "hover:bg-purple-950/20 hover:scale-105"
                    } flex cursor-pointer p-2 items-center w-full overflow-clip rounded-2xl gap-4 transition-all duration-500 ease-linear`}
                  >
                    <h1
                      className={`${
                        isActive == index && index == 0
                          ? "bg-accent"
                          : isActive == index && index == 1
                          ? "bg-blue-500"
                          : isActive == index && index == 2
                          ? "bg-green-500"
                          : isActive == index && index == 3
                          ? "bg-orange-500"
                          : "bg-slate-50 text-slate-400"
                      }   text-xl p-3 rounded-2xl relative`}
                    >
                      {link.number}
                    </h1>

                    <p
                      className={`${
                        isActive === index
                          ? "text-secondary"
                          : "text-slate-400 "
                      } flex justify-between items-center w-full font-medium`}
                    >
                      {link.name}
                      {isActive === index && (
                        <FaArrowRightLong className="-rotate-45 text-slate-500" />
                      )}
                    </p>
                  </li>
                </div>
              ))}
            </div>

            {/* begin process cards  */}
            <div className="w-full h-[50vh] relative">
              {processes.map((process, index) => (
                <div
                  key={index}
                  className={`${process.className} 
              ${
                istop === index
                  ? "z-10 top-0 px-5 opacity-100 translate-x-0 translate-y-0"
                  : index == 0 && isActive !== index
                  ? "top-2 translate-x-4 translate-y-4 opacity-50"
                  : index == 1 && isActive !== index
                  ? "top-4 translate-x-6 translate-y-6 opacity-30"
                  : index == 2 && isActive !== index
                  ? "top-8 translate-x-8 translate-y-8 opacity-10"
                  : index == 3 && isActive !== index
                  ? "top-2 translate-x-4 translate-y-4 opacity-0"
                  : ""
              } text-slate-600 text-lg w-full p-4 flex absolute md:bottom-0 right-0 rounded-3xl transition-transform duration-500 delay-75 ease-ilinear`}
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
                          } text-white p-4 rounded-2xl mb-8 items-center"`}
                        >
                          <process.icon size={28} />
                        </div>
                      </div>
                      <p className="transition-all leading-relaxed  duration-500 ease-in-out">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
