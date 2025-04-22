import { useState, useEffect, useContext } from "react";
import { client } from "../client";
import { easeIn, easeInOut, motion } from "framer-motion";
import "../index.css";
import { ThemeContext } from "../components/ThemeContextProvider";
import "../index.css";
import Carousel from "react-multi-carousel";
import { responsive } from "../constants";
import { Link } from "lucide-react";

const Portfolioa = () => {
  const { theme } = useContext(ThemeContext);

  const [images, setImages] = useState([]);
  const [isSlug, setIsSlug] = useState(null);
  const [isActive, setIsActive] = useState(0);

  // Fetch images from Sanity
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "imageAsset"]{
          title,
          slug,
          "imageUrl": image.asset->url,
          category,
          description,
        }`;
        const data = await client.fetch(query);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeIn }}
      viewport={{ once: true }}
      id="portfolio"
      className="px-6 mt-16 md:px-10  bg-slate-100"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-center text-2xl  flex flex-col">
          <span className="text-accent text-base mt-4 font-bold">
            Portfolio
          </span>
          Our Recent Projects
        </h2>
      </div>

      <ul className="flex w-full flex-wrap justify-center gap-2 mt-8 md:gap-8">
        {[
          "All",
          "Social Media",
          "Branding",
          "Print Design",
          "Website Design",
        ].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-linear px-5 py-2 rounded-full ${
              isActive === index
                ? "bg-gradient-to-tr from-purple-600 to-blue-600 text-slate-200"
                : theme === "light"
                ? "bg-slate-300/50"
                : theme === "dark"
                ? "bg-slate-800/50"
                : ""
            }`}
            onClick={() => {
              setIsActive(index);
              setIsSlug(item === "All" ? null : item.toLowerCase());
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Image Gallery */}

      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        focusOnSelect={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="mt-8 pb-8"
      >
        {images
          .filter((image) => (isSlug ? image.category === isSlug : true))
          .map((image, index) => (
            <div
              key={index}
              className={`${
                theme === "dark" ? "bg-slate-800" : "bg-slate-200"
              } m-2 rounded-md group`}
            >
              <a href={image.description} className="relative" target="_blank">
                <motion.img
                  loading="lazy"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: easeInOut,
                  }}
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full object-top rounded hover:object-bottom transition-opacity duration-300 ease-linear h-full object-cover"
                />
                <div className="w-full h-full flex justify-center text-white items-center opacity-0 group-hover:opacity-75 transition-all duration-1000 absolute inset-0  bg-gray-900">
                  <Link size={32} />
                </div>
              </a>
            </div>
          ))}
      </Carousel>
    </motion.section>
  );
};

export default Portfolioa;
