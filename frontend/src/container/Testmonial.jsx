import { Star } from "lucide-react";
import { PiQuotesFill } from "react-icons/pi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { client } from "../client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
    <section className="md:mt-32 mt-16 mx-auto relative w-full flex justify-center">
      <div className="flex-col w-full justify-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="flex flex-col text-center text-2xl md:text-3xl font-bold mb-8"
        >
          <span className="text-accent text-base">Testmonials</span> What
          clients say about us
        </motion.h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          focusOnSelect={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`flex cursor-pointer flex-col shadow-sm p-5 rounded-2xl w-full gap-8 bg-gradient-to-br from-blue-400/30 via-pink-200/20 to-slate-200/20`}
            >
              <div className="flex gap-8">
                <div className="flex gap-4 items-center">
                  <div className="overflow-hidden rounded-full">
                    <img
                      width={42}
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
                          className="fill-yellow-400 text-yellow-400  w-5 h-5"
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
                <PiQuotesFill size={32} className="text-purple-600" />{" "}
                {item.message}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="-z-50  absolute flex justify-end top-0 left-0 overflow-hidden">
        <img
          src="pattern2.png"
          alt=""
          className="opacity-5 object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default Testmonial;
