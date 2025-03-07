import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import SanityBlockContent from "@sanity/block-content-to-react";
import { easeInOut, motion } from "framer-motion";

import Header from "../container/Header";
import { client } from "../client";
import Footer from "../container/Footer";
import Comment from "../container/Comment";

// serializers

const serializers = {
  types: {
    block: ({ node, children }) => {
      const { style = "normal" } = node;

      switch (style) {
        case "h1":
          return (
            <h1 className="text-5xl font-extrabold mt-10 mb-6">{children}</h1>
          );
        case "h2":
          return <h2 className="text-3xl font-bold mt-8 mb-5">{children}</h2>;
        case "h3":
          return (
            <h3 className="text-2xl font-semibold mt-6 mb-4">{children}</h3>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-gray-400 bg-gray-100 p-5 italic rounded-md mb-6">
              {children}
            </blockquote>
          );
        case "normal":
        case "p":
          return <p className="text-lg leading-relaxed mb-5">{children}</p>;
        default:
          return <p className="text-lg leading-relaxed mb-5">{children}</p>;
      }
    },

    list: ({ type, children }) => {
      if (type === "bullet") {
        return <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>;
      }
      if (type === "number") {
        return <ol className="list-decimal pl-6 space-y-2 mb-6">{children}</ol>;
      }
      return <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>;
    },

    listItem: ({ children }) => <li className="ml-2">{children}</li>,

    image: ({ node }) => {
      const { asset, caption } = node;
      if (!asset) return null;

      return (
        <figure className="flex flex-col items-center text-center my-8">
          <img
            src={asset.url}
            alt={caption}
            className="w-full max-w-3xl h-auto rounded-lg shadow-md object-cover"
          />
          {caption && (
            <figcaption className="text-sm text-gray-500 mt-2 italic">
              {caption}
            </figcaption>
          )}
        </figure>
      );
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
        body[]{
          ...,
          asset->{
            _id,
            url
          }
        },
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
                    <h1 className="text-3xl md:text-6xl font-bold mt-4 text-center">
                      {current.title}
                    </h1>
                    <p className=" text-accent text-center my-4">
                      <span className="text-primary">
                        Written By Nexa Creatives{" "}
                      </span>
                      {moment(current.publishedAt).format("MMMM DD, YYYY")}
                    </p>
                    <img
                      className="object-cover rounded-md w-full"
                      src={current.imageUrl}
                      alt={current.title}
                    />
                  </div>

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
                        to={`/blog/BlogPost/${post.customId}`}
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
