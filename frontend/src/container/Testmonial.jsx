import { Star } from "lucide-react";
import { PiQuotesFill } from "react-icons/pi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { client } from "../client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import ButtonGroup from "../components/CustomRightArrow";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const item = "mt-8";
const container = "py-8";

const Testmonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = `*[_type == "testimonial"]{
        name, rating, designation, profile{asset->{url}}, message
      }`;
      const data = await client.fetch(query);
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="md:mt-32 mt-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col text-center text-2xl md:text-3xl font-bold mb-8"
      >
        <span className="text-sm uppercase tracking-widest font-bold">
          Testmonials
        </span>{" "}
        What clients say about us
      </motion.h2>
      <Carousel
        containerClass={container}
        arrows={false}
        itemClass={item}
        responsive={responsive}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer py-16 px-8 flex-col dark:bg-gray-600/30 bg-slate-300/25 rounded-2xl w-full gap-8`}
          >
            <div className="flex items-center gap-x-4">
              <div className="flex gap-4  items-center">
                <div className="overflow-hidden rounded-full">
                  <img
                    width={64}
                    src={item.profile.asset.url}
                    className="object-cover"
                    alt="default"
                  />
                </div>
              </div>
              <p className="text-base font-bold flex flex-col">
                <div className="flex gap-4">
                  {item.name} <FcGoogle size={20} />
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-yellow-400 text-yellow-400  w-4 h-4"
                      />
                    ))}

                    {/* Render unfilled stars */}
                    {[...Array(5 - item.rating)].map((_, i) => (
                      <Star
                        key={i + item.rating}
                        className="text-slate-700 fill-transparent w-5 h-5"
                      />
                    ))}
                  </div>
                </div>

                <span className="opacity-50 text-sm font-normal">
                  {item.designation}
                </span>
              </p>
            </div>

            <p className="leading-relaxed text-base">
              <PiQuotesFill size={64} className="text-purple-600" />{" "}
              {item.message}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testmonial;
