import { TimerIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../constants";

export default function BlogList({ posts }) {
  // scroll to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`flex flex-col sticky w-full mx-auto items-start`}>
      <h2 className="text-base font-bold uppercase tracking-widest">
        Most Recent Blogs
      </h2>
      <hr className={`w-full mt-2 mb-4`} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.customId}>
            <img
              src={post.imageUrl}
              fill
              className="w-full max-h-[300px] h-[200px] object-cover object-center rounded-lg"
              alt={post.title}
            />

            <div className="flex flex-col justify-center">
              <h2 className="hover:opacity-85 md:text-xl text-lg  transition font-semibold">
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
          </div>
        ))}
      </div>
    </section>
  );
}
