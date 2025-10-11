import { Star } from "lucide-react";
import { PiQuotesFill } from "react-icons/pi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { client } from "../client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import ButtonGroup from "../components/CustomRightArrow";
import Container from "../components/Container";

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

const container = "pb-4";

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
    <section className="mt-16 w-full m-auto">
      <Container>
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-sm uppercase text-center tracking-widest font-bold"
          >
            Testmonials
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-center text-2xl md:text-3xl mb-4 font-bold"
          >
            What clients say about us
          </motion.h2>

          <Carousel
            containerClass={container}
            arrows={false}
            responsive={responsive}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer py-16 px-8 mt-8 flex-col dark:bg-gray-600/30 bg-slate-300/25 rounded-xl gap-8`}
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex gap-4 items-center">
                    <div className="overflow-hidden w-20 rounded-full">
                      <img
                        fill
                        src={item.profile.asset.url}
                        className="object-cover"
                        alt="default"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-2 items-center">
                      <FcGoogle size={20} />
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
                    <h2 className="text-lg font-bold mt-4 flex flex-col">
                      {item.name}
                    </h2>
                    <h3 className="opacity-50 uppercase tracking-widest text-xs font-normal">
                      {item.designation}
                    </h3>
                  </div>
                </div>

                <p className="leading-relaxed text-base">{item.message}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testmonial;
