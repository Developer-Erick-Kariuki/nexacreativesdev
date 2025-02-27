import Carousel from "react-multi-carousel";
import { client } from "../client";
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../index.css";
import moment from "moment";

import { Link } from "react-router-dom";
import CallToAction from "../components/callToAction";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 2,
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

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        customId,
        body,
        publishedAt,
        "imageUrl": image.asset->url,
        
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeIn }}
      id="blog"
      className="w-full px-6 md:px-10 mt-32 flex flex-col md:flex-row gap-8 justify-center"
    >
      <div className="flex flex-col">
        <h2 className="text-accent">News & Blogs</h2>
        <h1 className="text-5xl font-bold">Our Latest News & Blogs</h1>
        <p className="mt-2 text-32 ">
          Insights and Trends from Nexa Creative Solutions
        </p>
        <CallToAction
          name="Get intouch"
          href="#contact"
          className="bg-gradient-to-tr from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600  mt-8"
        />
      </div>

      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        focusOnSelect={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        sliderClass="mine"
        itemClass="item"
        containerClass="container"
        dotListClass="dots"
      >
        {posts.map((post) => (
          <div className="mx-4" key={post.title}>
            <img src={post.imageUrl} alt="" width={500} />
            <Link to={`/blog/BlogPost/${post.customId}`}>
              <h2 className="font-bold cursor-pointer max-w-md text-xl mt-6">
                {post.title}
              </h2>
            </Link>
            <h3 className="text-accent">
              {moment(post.publishedAt).format("DD, MMMM, YYYY")}
            </h3>
          </div>
        ))}
      </Carousel>
    </motion.section>
  );
};

export default Blog;
