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
            <p className="leading-loose mt-4 text-justify">{props.children}</p>
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
    <section className="text-white px-6 md:px-10 max-w-7xl mx-auto pt-4">
      <Header />
      <div className="flex flex-col md:flex-row w-full justify-center gap-8 py-4">
        {SinglePost.map((current) => (
          <div key={current.customId}>
            <img src={current.imageUrl} width={600} alt={current.title} />
            <p className="mt-4 text-accent">
              {moment(current.publishedAt).format("MMMM, YYYY")}
            </p>
            <h1 className="text-3xl max-w-md font-bold">{current.title}</h1>
            <div className="max-w-lg mt-6">
              <SanityBlockContent
                blocks={current.body}
                serializers={serializers}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.title} className="flex max-w-sm flex-col">
              <img className="mx-8" src={post.imageUrl} alt={post.title} />
              <Link to={`/blog/BlogPost/${post.customId}`}>
                <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
              </Link>
              {moment(post.publishedAt).format("MMMM, YYYY")}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogPost;
