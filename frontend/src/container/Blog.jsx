import Carousel from "react-multi-carousel";
import { client } from "../client";
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../index.css";
import moment from "moment";

import { Link } from "react-router-dom";
import { handleScrollToTop, timeAgo } from "../constants";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      id="blog"
      className="w-full mt-16 flex flex-col md:flex-row gap-8 justify-between"
    >
      <div className="flex w-full flex-col">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          News & Blogs
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold">
          Our Latest News & Blogs
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Insights and Trends from Nexa Creative Solutions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 justify-center w-full mx-auto">
        {posts.slice(0, 2).map((post) => (
          <div key={post.title}>
            <div className="w-[372px] h-[250px] overflow-clip bg-slate-200 rounded-xl">
              <img
                src={post.imageUrl}
                alt="default"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <Link
              onClick={handleScrollToTop}
              to={`/blog/BlogPost/${post.customId}`}
            >
              <h3 className="cursor-pointer px-2 hover:opacity-75 text-lg font-semibold mt-2">
                {post.title}
              </h3>
            </Link>
            <h3 className="text-sm opacity-75 px-2">
              {timeAgo(post.publishedAt)}
            </h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
