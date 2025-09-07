import { useContext, useEffect, useState } from "react";
import { client } from "../client"; // Ensure client is correctly imported
import { easeIn, motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import moment from "moment";
import { timeAgo } from "../constants";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Comment");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch comments on component mount or when postId changes
  useEffect(() => {
    if (!postId) return; // Avoid fetching if postId is not available

    const fetchComments = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "comment" && postId == $postId] | order(createdAt desc)`,
          { postId }
        );
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setButtonText("Please fill all fields");
      setTimeout(() => setButtonText("Comment"), 2000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setButtonText("Invalid Email");
      setTimeout(() => setButtonText("Comment"), 2000);
      return;
    }

    setIsLoading(true);
    setButtonText("Submitting...");

    try {
      await client.create({
        _type: "comment",
        postId,
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      });

      setButtonText("Success!");
      setName("");
      setEmail("");
      setMessage("");

      // Fetch updated comments after submission
      const updatedComments = await client.fetch(
        `*[_type == "comment" && postId == $postId] | order(createdAt desc)`,
        { postId }
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error submitting comment:", error);
      setButtonText("Failed");
    } finally {
      setIsLoading(false);
      setTimeout(() => setButtonText("Comment"), 3000);
    }
  };

  return (
    <section className="py-8 px-5 rounded-2xl w-full md:flex-row justify-center items-center flex gap-6 flex-col-reverse">
      <div className="flex w-full flex-col">
        <h2 className="text-2xl font-bold">Leave us a comment</h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none bg-transparent"
              placeholder="Enter your name"
              required
            />
            <hr className="h-2" />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent"
              placeholder="Enter your email"
              required
            />
            <hr className="h-2" />
          </div>

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`outline-none bg-transparent`}
            placeholder="Comment"
            required
          />
          <button
            className={`${
              buttonText === "Success!"
                ? "bg-green-500"
                : buttonText === "Failed"
                ? "bg-red-500"
                : " bg-purple-600"
            } px-5 py-3 rounded-full flex items-center gap-4 justify-center text-lg text-white outline-none mt-8`}
            type="submit"
            disabled={isLoading}
          >
            <span>
              <BsFillSendFill />
            </span>
            {buttonText}
          </button>
        </form>

        {/* Display Comments */}
        <h1 className="font-bold mt-8 text-xl">Recent Comments</h1>
        <div className="mt-4 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="p-4 ">
                <h3 className="font-semibold">{comment.name}</h3>
                <p className="text-xs text-gray-500">
                  {timeAgo(comment.createdAt)}
                </p>
                <p className="text-sm text-gray-400">{comment.subject}</p>
                <p className="mt-2">{comment.message}</p>

                <hr className="my-2" />
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comment;
