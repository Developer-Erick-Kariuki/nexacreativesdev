import { TimerIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../constants";

export default function BlogList({ posts }) {
  // scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`flex flex-col sticky top-0 `}>
      <h2 className="text-base font-bold uppercase tracking-widest">
        Most Recent Blogs
      </h2>
      <hr className={`w-full mt-2 mb-4`} />

      {posts.map((post) => (
        <figure className="flex flex-col gap-4 justify-between p-4 ">
          <div className="max-h-[20rem] h-[16rem] min-h-[16rem] bg-red-400 rounded-2xl">
            <img
              src={post.imageUrl}
              className="object-cover rounded-xl w-full h-full object-top"
              alt={post.title}
            />
          </div>
          <figcaption>
            <div className="flex flex-col justify-center w-full">
              <h2 className="hover:opacity-85 md:text-lg transition-colors duration-300 ease-in-out font-semibold">
                <Link
                  onClick={handleScrollToTop}
                  to={`/blog/BlogPost/${post.customId}`}
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-xs flex mt-2 items-center gap-2 opacity-80">
                <TimerIcon size={16} /> {timeAgo(post.publishedAt)}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
