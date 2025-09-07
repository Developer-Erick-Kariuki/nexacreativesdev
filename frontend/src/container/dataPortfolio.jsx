import { useState, useEffect } from "react";
import { client } from "../client";
import { easeIn, easeInOut, motion } from "framer-motion";
import "../index.css";
import "../index.css";

import { Link } from "lucide-react";
import { Tooltip } from "react-tooltip";

const Portfolioa = () => {
  const [images, setImages] = useState([]);
  const [isSlug, setIsSlug] = useState(null);
  const [isActive, setIsActive] = useState(null);

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
    <section id="portfolio" className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="font-bold text-center text-2xl  flex flex-col">
          <span className="text-accent text-base mt-4 font-bold">
            Portfolio
          </span>
          Our Recent Projects
        </h2>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-wrap my-8 justify-center items-center space-y-6 space-x-2 "
      >
        {[
          "All",
          "Social Media",
          "Branding",
          "Print Design",
          "Website Design",
        ].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-linear rounded-full `}
            onClick={() => {
              setIsActive(index);
              setIsSlug(item === "All" ? null : item.toLowerCase());
            }}
          >
            {index !== 0 && (
              <span
                className={`${
                  isActive === index
                    ? "bg-purple-600 text-white "
                    : "bg-slate-50"
                } rounded-full px-5 py-3`}
              >
                {item}
              </span>
            )}
          </li>
        ))}
      </motion.ul>

      {/* Image Gallery */}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images
          .filter((image) => (isSlug ? image.category === isSlug : true))
          .map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              key={index}
              className={`overflow-hidden group`}
            >
              <a href={image.description} className="relative" target="_blank">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full rounded-2xl object-cover"
                />
                <div className="w-full h-full flex justify-center text-white items-center opacity-0 group-hover:opacity-80 transition-all duration-1000 absolute inset-0 rounded-2xl bg-black">
                  <Link
                    size={32}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={image.description}
                  />
                  <Tooltip id="my-tooltip" />
                </div>
              </a>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Portfolioa;
