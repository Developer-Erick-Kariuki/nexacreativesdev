import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../src/client";
import moment from "moment";
import Header from "../src/container/Header";
import SanityBlockContent from "@sanity/block-content-to-react";
import Footer from "../src/container/Footer";

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
        default:
          return (
            <p
              style={{ textAlign: "left" }}
              className="leading-loose text-right"
            >
              {props.children}
            </p>
          );
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

  const SinglePost = posts?.filter((current) => current.customId === customId);

  if (!SinglePost) return <p>Loading...</p>;

  return (
    <>
      <section className="text-primary px-6 md:px-10 mx-auto pt-4">
        <Header />
        <div className="flex justify-center">
          <div className="flex items-start gap-8 flex-col md:flex-row mt-20">
            {SinglePost.map((current) => (
              <div className="flex flex-col" key={current.customId}>
                <img
                  className="bg-slate-900"
                  src={current.imageUrl}
                  width={600}
                  alt={current.title}
                />
                <p className="mt-4 text-accent">
                  {moment(current.publishedAt).format("MMMM, YYYY")}
                </p>
                <h1 className="text-3xl mt-3 max-w-lg font-bold">
                  {current.title}
                </h1>
                <div className="max-w-lg mt-6 text-justify">
                  <SanityBlockContent
                    blocks={current.body}
                    serializers={serializers}
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col w-1/4  gap-6">
              {posts.map((post) => (
                <div key={post.title} className="flex max-w-xs flex-col">
                  <img
                    className="mx-8"
                    src={post.imageUrl}
                    width={200}
                    alt={post.title}
                  />
                  <Link to={`/blog/BlogPost/${post.customId}`}>
                    <h2 className="text-lg font-bold mt-2">{post.title}</h2>
                  </Link>
                  <p className="mt-2 text-accent">
                    {moment(post.publishedAt).format("MMMM, YYYY")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPost;
