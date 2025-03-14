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
      viewport={{ once: true }}
      id="blog"
      className="w-full px-6 md:px-10 mt-32 flex flex-col md:flex-row gap-8 justify-center"
    >
      <div className="flex max-w-7xl">
        <div className="flex flex-col">
          <h2 className="text-accent">News & Blogs</h2>
          <h1 className="md:text-4xl text-3xl font-bold">
            Our Latest News & Blogs
          </h1>
          <p className="mt-2 text-slate-300">
            Insights and Trends from Nexa Creative Solutions
          </p>
          <CallToAction
            name="Get intouch"
            href="#contact"
            className="bg-gradient-to-tr w-full  from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600  mt-8"
          />
        </div>

        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          partialVisbile={true}
          focusOnSelect={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          sliderClass="mine"
          itemClass="item"
          containerClass="container"
          dotListClass="dots"
        >
          {posts.map((post) => (
            <div className="mx-4" key={post.title}>
              <div className="overflow-hidden w-full h-[200px]">
                <img
                  src={post.imageUrl}
                  alt="default"
                  className="object-cover w-full h-full"
                />
              </div>
              <Link to={`/blog/BlogPost/${post.customId}`}>
                <h2 className="cursor-pointer hover:text-orange-600 mt-6">
                  {post.title}
                </h2>
              </Link>
              <h3 className="text-sm text-slate-500">
                {moment(post.publishedAt).format("MMMM DD, YYYY")}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Blog;
