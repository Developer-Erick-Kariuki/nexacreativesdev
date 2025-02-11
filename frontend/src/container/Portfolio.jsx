import { useState } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/4.jpg";
import image4 from "../assets/5.jpg";
import image5 from "../assets/6.jpg";
import image6 from "../assets/2024-1.jpg";
import image7 from "../assets/2024-2.jpg";
import image8 from "../assets/2024-4.jpg";
import image9 from "../assets/2024-6.jpg";
import image10 from "../assets/2024-8.jpg";
import image11 from "../assets/2024-9.jpg";
import image12 from "../assets/businsess-flyer.jpg";
import image13 from "../assets/car.png";
import image14 from "../assets/joyce-21.jpg";
import image15 from "../assets/joyce-32.jpg";

const images = [
  { image: image1, slug: "social-media" },
  { image: image2, slug: "social-media" },
  { image: image3, slug: "social-media" },
  { image: image4, slug: "social-media" },
  { image: image5, slug: "social-media" },
  { image: image6, slug: "social-media" },
  { image: image7, slug: "flyer" },
  { image: image8, slug: "flyer" },
  { image: image9, slug: "flyer" },
  { image: image10, slug: "social-media" },
  { image: image11, slug: "flyer" },
  { image: image12, slug: "layout" },
  { image: image13, slug: "layout" },
  { image: image14, slug: "layout" },
  { image15, slug: "layout" },
];

const categories = [
  { name: "All", slug: null },
  { name: "Flyer Design", slug: "flyer" },
  { name: "Branding", slug: "branding" },
  { name: "Layout", slug: "layout" },
  { name: "Website", slug: "website" },
];

const Portfolio = () => {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [activeIndex, setActiveIndex] = useState(4);

  // Filter images based on the selected slug
  const filteredImages =
    selectedSlug === null
      ? images
      : images.filter((img) => img.slug === selectedSlug);

  return (
    <section id="portfolio" className="mt-16">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold flex flex-col text-center">
          <span className="text-accent  font-bold">Portfolio</span>
          Our Recent Projects
        </h2>
      </div>
      <ul className="flex w-full mt-8 justify-center text-sm md:text-base md:gap-8 gap-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`${
              activeIndex === index ? "bg-accent" : ""
            } cursor-pointer ring-2 ring-accent md:px-5 md:py-2 px-3 py-2 rounded-[3rem]`}
            onClick={() => {
              setActiveIndex(index);
              setSelectedSlug(category.slug);
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {filteredImages.map((image, index) => (
          <img
            key={index}
            src={image.image}
            width={500}
            className={`h-full object-contain`}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
