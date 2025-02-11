import { Star } from "lucide-react";
import { PiQuotesFill } from "react-icons/pi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { client } from "../client";
import { useEffect, useState } from "react";

const responsive = {
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
    <section className="mt-32 px-6 md:px-10 w-full">
      <div className="flex flex-col">
        <h2 className="flex flex-col text-center text-3xl font-bold">
          <span className="text-accent text-base">Testmonials</span> Review from
          Our Clients
        </h2>

        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          focusOnSelect={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          sliderClass="mine"
          itemClass="item"
          containerClass="container"
          dotListClass="dots"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`flex cursor-pointer mx-2 shadow shadow-slate-500 flex-col bg-slate-900 ring-2 ring-slate-800 p-3 rounded-3xl gap-8 mt-16`}
            >
              <div className="flex justify-between gap-4">
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent w-5 h-5" />
                  ))}

                  {/* Render unfilled stars */}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <Star
                      key={i + item.rating}
                      className="text-gray-400 fill-transparent w-5 h-5"
                    />
                  ))}
                </div>

                <div className="bg-accent/20 -mt-10 -mr-5  rounded-full w-16 h-16 flex items-center justify-center">
                  <PiQuotesFill size={48} />
                </div>
              </div>
              <p className="leading-relaxed font-light text-slate-400 text-sm">
                {item.message}
              </p>
              <div className="flex gap-4">
                <img
                  src={item.profile.asset.url}
                  className="w-12 h-12 ring-2 ring-white rounded-full"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-xs max-w-[10rem] text-gray-400">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testmonial;
