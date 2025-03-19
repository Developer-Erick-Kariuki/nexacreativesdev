import { useState, useEffect, useContext } from "react";
import { client } from "../client";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import Masonry from "react-masonry-css";
import "../index.css";
import { ThemeContext } from "../components/ThemeContextProvider";
import "../index.css";

const Portfolioa = () => {
  const { theme } = useContext(ThemeContext);

  const [images, setImages] = useState([]);
  const [isSlug, setIsSlug] = useState(null);
  const [isActive, setIsActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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
  }, [images]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easeIn }}
      viewport={{ once: true }}
      id="portfolio"
      className=" px-6"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-center text-2xl my-4 flex flex-col">
          <span className="text-accent text-base mt-4 font-bold">
            Portfolio
          </span>
          Our Recent Projects
        </h2>
      </div>

      {/* Filter Buttons */}
      {/* <ul className="flex w-full flex-wrap justify-center gap-2 mt-8 md:gap-8">
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
      </ul> */}

      {/* Image Gallery */}
      <div className="flex justify-center mt-8">
        <div
          className={`p-2 grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 max-w-7xl rounded-md`}
        >
          {images
            .filter((image) => (isSlug ? image.category === isSlug : true))
            .map((image, index) => (
              <div key={index}>
                <div
                  className={`${
                    theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                  } w-[30rem] h-[20rem] overflow-y-scroll overflow-x-hidden `}
                >
                  <motion.img
                    loading="lazy"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full object-top hover:object-bottom transition-all duration-[2s] ease-linear h-full object-cover"
                  />
                </div>
                <p className="mt-2">{image?.description}</p>
              </div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolioa;
