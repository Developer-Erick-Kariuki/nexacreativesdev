import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SanityBlockContent from "@sanity/block-content-to-react";

import { client } from "../client";

import "../blog/blog.css";

import { timeAgo } from "../constants";
import BlogList from "./BlogList";

// serializers

const serializers = {
  types: {
    block: ({ node, children }) => {
      const { style = "normal" } = node;

      switch (style) {
        case "h1":
          return <h1 className="text-5xl font-bold mt-10 mb-6">{children}</h1>;
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
          return <p className="leading-relaxed text-lg mb-5">{children}</p>;
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

  const SinglePost = posts?.filter((current) => current.customId === customId);

  if (!posts)
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
    <main className="w-full pt-24 flex-col mb-4 md:flex-row flex ">
      <section className="flex w-full ">
        <div className="flex flex-col md:flex-row">
          {SinglePost.map((current) => (
            <div className={`px-4 w-full`} key={current.customId}>
              <div className="w-full overflow-clip">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                  {current.title}
                </h1>
                <p className="flex gap-2 mb-4 text-sm items-center">
                  Nexa Digital
                  <span className="opacity-75">
                    {timeAgo(current.publishedAt)}
                  </span>
                </p>

                <div className=" flex justify-center rounded-xl items-center bg-slate-300">
                  <img
                    src={current.imageUrl}
                    alt={current.title}
                    className="w-full h-full max-h-[400px] rounded-xl object-cover object-center"
                  />
                </div>
              </div>

              <div className="max-w-4xl">
                <SanityBlockContent
                  blocks={current.body}
                  serializers={serializers}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section other blogs */}
      <BlogList posts={posts} />
    </main>
  );
};

export default BlogPost;
