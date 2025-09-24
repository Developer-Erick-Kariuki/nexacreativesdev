import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import SanityBlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { client } from "../client";
import Footer from "../container/Footer";
import Comment from "../container/Comment";
import "../blog/blog.css";
import { TimerIcon } from "lucide-react";
import { timeAgo } from "../constants";

// serializers

const serializers = {
  types: {
    block: ({ node, children }) => {
      const { style = "normal" } = node;

      switch (style) {
        case "h1":
          return <h1 className="text-3xl font-bold mt-10 mb-6">{children}</h1>;
        case "h2":
          return <h2 className="text-2xl font-bold mt-8 mb-5">{children}</h2>;
        case "h3":
          return (
            <h3 className="text-xl font-semibold mt-6 mb-4">{children}</h3>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-gray-400 bg-gray-100 p-5 italic rounded-md mb-6">
              {children}
            </blockquote>
          );
        case "normal":
        case "p":
          return <p className="leading-relaxed text-base mb-5">{children}</p>;
        default:
          return <p className="leading-relaxed mb-5">{children}</p>;
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
            className="w-full shadow-md rounded-xl object-cover"
          />
          {caption && (
            <figcaption className="text-base text-gray-500 mt-2 italic">
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

  if (!SinglePost)
    return (
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    );

  return (
    <main className="py-20 px-6 max-w-7xl flex-col md:flex-row flex mx-auto">
      <section className="w-full  relative justify-center flex">
        <div className="flex flex-col md:flex-row">
          {SinglePost.map((current) => (
            <div className={`px-4 max-w-4xl`} key={current.customId}>
              <div className="w-full overflow-clip">
                <h1 className="text-3xl font-bold mb-2">{current.title}</h1>
                <p className="flex gap-2 mb-4 text-sm items-center">
                  Nexa Digital
                  <span className="opacity-75">
                    {timeAgo(current.publishedAt)}
                  </span>
                </p>

                <img
                  loading="lazy"
                  className="object-cover rounded-xl w-full"
                  src={current.imageUrl}
                  alt={current.title}
                />
              </div>

              <SanityBlockContent
                blocks={current.body}
                serializers={serializers}
              />
              <Comment postId={current.customId} />
            </div>
          ))}
        </div>
      </section>

      {/* section other blogs */}
      <section
        className={` flex flex-col h-fit md:sticky max-w-full inset-0 md:max-w-md  p-3`}
      >
        <h2 className="text-base font-bold uppercase tracking-widest">
          Most Recent Blogs
        </h2>
        <hr className={`w-full mt-2 mb-4`} />
        <div className="flex flex-col flex-wrap gap-4">
          {posts.map((post) => (
            <div key={post.title} className="shadow-xl p-4 rounded-2xl">
              <Link
                onClick={handleScrollToTop}
                className="flex flex-col justify-between"
                to={`/blog/BlogPost/${post.customId}`}
              >
                <img
                  loading="lazy"
                  src={post.imageUrl}
                  className="rounded-xl md:max-h-[200px] h-[300px] object-cover object-left mb-2"
                  alt={post.title}
                />

                <div className="flex flex-col justify-center w-full">
                  <h2 className="hover:opacity-75 transition-colors duration-300 ease-in-out font-semibold">
                    {post.title}
                  </h2>

                  <p className="text-xs flex mt-2 items-center gap-2 opacity-80">
                    <TimerIcon size={16} /> {timeAgo(post.publishedAt)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
