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
          return (
            <h1 className="text-3xl font-extrabold mt-10 mb-6">{children}</h1>
          );
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
    <main className="max-w-7xl mt-20 px-2  mx-auto">
      <div className="w-full  relative justify-center  flex">
        <div className="flex flex-col md:flex-row">
          {SinglePost.map((current) => (
            <div className={`px-4 max-w-4xl`} key={current.customId}>
              <div className="w-full overflow-clip">
                <h1 className="md:text-4xl text-3xl font-bold my-4">
                  {current.title}
                </h1>
                <p className="my-6 flex gap-2 items-center">
                  By Nexa Creative
                  <span className="opacity-85">
                    {" "}
                    {timeAgo(current.publishedAt)}
                  </span>
                </p>

                <img
                  loading="lazy"
                  className="object-cover rounded-xl w-full max-h-[35vh] md:max-h-[60vh]"
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

          <div
            className={` flex flex-col h-fit md:sticky max-w-full inset-0 md:max-w-md  p-3`}
          >
            <h2 className="text-base font-bold uppercase tracking-widest">
              Most Recent Blogs
            </h2>
            <hr className={`w-full mt-2 mb-4`} />
            <div className="flex flex-col flex-wrap gap-4">
              {posts.map((post) => (
                <div key={post.title} className="bg-slate-50 p-2 rounded-2xl">
                  <Link
                    onClick={handleScrollToTop}
                    className="flex flex-col justify-between"
                    to={`/blog/BlogPost/${post.customId}`}
                  >
                    <img
                      loading="lazy"
                      src={post.imageUrl}
                      className="rounded-xl md:max-h-[200px] h-[300px] md:h-[200px] object-cover object-left mb-2"
                      alt={post.title}
                    />

                    <div className="flex flex-col justify-center w-full">
                      <h2 className="text-base hover:opacity-75 transition-colors duration-300 ease-in-out font-semibold">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
