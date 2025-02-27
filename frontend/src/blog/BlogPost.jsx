import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import SanityBlockContent from "@sanity/block-content-to-react";
import { easeInOut, motion } from "framer-motion";

import Header from "../container/Header";
import { client } from "../client";
import Footer from "../container/Footer";
import Comment from "../container/Comment";

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      switch (style) {
        case "h1":
          return <h1 className="text-3xl py-4 font-bold">{props.children}</h1>;
        case "h2":
          return (
            <h2 className="text-2xl py-4 font-semibold">{props.children}</h2>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 py-4 pl-4 italic">
              {props.children}
            </blockquote>
          );
        case "p":
          return <p className="text-lg leading-relaxed">{props.children}</p>;
        default:
          return <p className="leading-relaxed text-lg">{props.children}</p>;
      }
    },
  },
};

const BlogPost = () => {
  const { customId } = useParams();
  const [posts, setPosts] = useState(null);

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const SinglePost = posts?.filter((current) => current.customId === customId);

  if (!SinglePost) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section className="text-primary px-6 md:px-10 border-red-500 mx-auto max-w-7xl">
        <div className="w-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0, ease: easeInOut }}
            className="max-w-5xl "
          >
            <div className="">
              {SinglePost.map((current) => (
                <motion.div
                  initial={{ opacity: 0, y: 800 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0, ease: easeInOut }}
                  className=""
                  key={current.customId}
                >
                  <div className="w-full overflow-clip">
                    <img
                      className="object-cover rounded-md w-full"
                      src={current.imageUrl}
                      alt={current.title}
                    />
                  </div>
                  <p className=" text-accent mt-2">
                    {moment(current.publishedAt).format("MMMM, YYYY")}
                  </p>
                  <h1 className="text-4xl font-bold max-w-2xl">
                    {current.title}
                  </h1>

                  <SanityBlockContent
                    blocks={current.body}
                    serializers={serializers}
                  />
                </motion.div>
              ))}

              <h1 className="text-xl text-yellow-400 font-bold mt-8">
                Related Posts
              </h1>
              <div className="flex justify-between mt-8 gap-8 flex-col md:flex-row">
                {posts.map((post) => (
                  <div key={post.title} className="font-bold max-w-lg text-lg">
                    <img
                      className="rounded-md"
                      src={post.imageUrl}
                      width={500}
                      alt={post.title}
                    />
                    <div className="flex flex-col ">
                      <Link
                        onClick={handleScrollToTop}
                        to={`/blog/BlogPost/${post.title}`}
                      >
                        <h2 className="mt-4">{post.title}</h2>
                      </Link>
                      <p className="text-base mt-2 text-green-400">
                        <span className="text-primary">Posted on </span>
                        {moment(post.publishedAt).format("DD, MMMM, YYYY")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <Comment />
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
