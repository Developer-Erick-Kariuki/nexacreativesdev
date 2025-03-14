import { useContext, useState } from "react";
import { client } from "../client";
import { easeIn, motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { ThemeContext } from "../components/ThemeContextProvider";

const Comment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State for button text and loading indicator
  const [buttonText, setButtonText] = useState("Post a comment");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation for all fields
    if (!name || !email || !subject || !message) {
      setButtonText("Please fill all fields");
      setTimeout(() => setButtonText("Send"), 2000);
      return;
    }

    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setButtonText("Invalid Email");
      setTimeout(() => setButtonText("Submit"), 2000);
      return;
    }

    // Set loading state
    setIsLoading(true);
    setButtonText("Loading...");

    try {
      // Create a new document in Sanity using the "contactForm" schema
      await client.create({
        _type: "contactForm",
        name: name,
        email: email,
        subject: subject,
        message: message,
        createdAt: new Date().toISOString(),
      });

      setButtonText("Success!");
      // Optionally clear the form fields after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setButtonText("Failed");
    } finally {
      // Clear the loading state and revert button text after a delay
      setIsLoading(false);
      setTimeout(() => setButtonText("Submit"), 3000);
    }
  };

  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="contact"
      className="py-8 px-5 w-full mt-16  md:flex-row justify-center items-center flex "
    >
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold"> Leave Us a comment </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none bg-transparent"
            placeholder="Enter your name"
            required
          />
          <hr className="h-2" />

          <input
            type="email"
            id="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent"
            placeholder="Enter your email"
          />

          <hr className="h-2" />
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="outline-none bg-transparent"
            required
            placeholder="Comment Title e.g feedback"
          />
          <hr className="h-2" />
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={`${
              theme === "dark" ? "bg-slate-800" : "bg-slate-200"
            } outline-none p-2 h-48`}
            placeholder="Type your message here"
          />

          <button
            className={`${
              buttonText === "Success!"
                ? "bg-green-500"
                : buttonText === "Failed"
                ? "bg-red-500"
                : "bg-gradient-to-tr from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600"
            } px-6 py-3 rounded-xl flex items-center gap-4 justify-center text-lg outline-none mt-8 text-primary`}
            type="submit"
            disabled={isLoading}
          >
            <span>
              <BsFillSendFill />
            </span>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Comment;
