import { useState, useEffect } from "react";
import { client } from "../client";
import { motion } from "framer-motion";
import "../index.css";
import "../index.css";

import { Link } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Container from "../components/Container";

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
    <section id="portfolio" className="mt-16">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="flex flex-col justify-center items-center"
        >
          <h2 className="font-bold text-center text-2xl mb-4 flex flex-col">
            <span className="text-sm uppercase tracking-widest font-bold">
              Portfolio
            </span>
            Our Recent Projects
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="gap-2 flex justify-center flex-wrap flex-grow-0 mb-4 items-center"
        >
          {["Social Media", "Branding", "Print Design", "Website Design"].map(
            (item, index) => (
              <li
                key={index}
                className={`${
                  isActive === index ? "bg-violet-800 text-white " : ""
                } rounded-full bg-slate-300/25 dark:bg-gray-600/30 px-5 py-3`}
                onClick={() => {
                  setIsActive(index);
                  setIsSlug(item === "All" ? null : item.toLowerCase());
                }}
              >
                {item}
              </li>
            )
          )}
        </motion.ul>

        {/* Image Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images
            .filter((image) => (isSlug ? image.category === isSlug : true))
            .map((image, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                key={index}
                className={`overflow-hidden rounded-2xl group`}
              >
                <a
                  href={image.description}
                  className="relative"
                  target="_blank"
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full rounded-xl object-cover"
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
      </Container>
    </section>
  );
};

export default Portfolioa;
