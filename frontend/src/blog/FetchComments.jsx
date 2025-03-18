import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

const FetchComments = () => {
  const { postId } = useParams(); // Get the post ID from URL
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return; // Ensure postId exists

    const query = `*[_type == "comment" && post._ref == $postId] | order(createdAt desc) {
      name,
      comment,
      createdAt
    }`;

    client
      .fetch(query, { postId })
      .then((data) => setComments(data))
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setError(err.message);
      });
  }, [postId]);

  if (error) return <p>Error: {error}</p>;
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <div>
      <h3>Comments:</h3>
      {comments.map((c, index) => (
        <div key={index}>
          <strong>{c.name}</strong>{" "}
          <span>({new Date(c.createdAt).toLocaleString()})</span>
          <p>{c.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchComments;
