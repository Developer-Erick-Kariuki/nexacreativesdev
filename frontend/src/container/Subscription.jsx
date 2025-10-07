import { useContext, useState } from "react";
import { client } from "../client";
import { easeIn, motion } from "framer-motion";
import { IoMdNotifications } from "react-icons/io";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Subscribe");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setButtonText("Invalid Email");
      // Reset the button text after a short delay
      setTimeout(() => setButtonText("Subscribe"), 2000);
      return;
    }

    setIsLoading(true);
    setButtonText("Loading...");

    try {
      // Attempt to create a new document in Sanity
      await client.create({
        _type: "emailEntry",
        email: email,
        createdAt: new Date().toISOString(),
      });
      setButtonText("Success!");
      setEmail(""); // Clear the email input upon success
    } catch (error) {
      console.error("Error saving email:", error);
      setButtonText("Failed");
    } finally {
      // Ensure loading state is cleared, and revert button text after a delay
      setIsLoading(false);
      setTimeout(() => setButtonText("Subscribe"), 3000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full mx-auto  flex justify-between bg-slate-300/25 dark:bg-gray-600/30 p-4 rounded-2xl flex-col md:flex-row items-center mt-16"
    >
      <img
        src="/Background.png"
        className="hidden md:block"
        alt="send"
        width={512}
      />

      <div className="flex-col justify-center gap-4 w-full md:max-w-md flex">
        <h1 className="text-4xl font-bold">Join our team</h1>
        <p className="text-base max-w-md">
          Subscribe to our newsletter and stay ahead of the curve with cutting
          edge designs ideas and tips
        </p>
        <form
          className="flex flex-col w-full items-start gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none py-3 bg-transparent border-2 border-slate-300 rounded-full px-5"
            placeholder="Your Email address"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`${
              buttonText === "Success!"
                ? "bg-green-500"
                : buttonText === "Failed"
                ? "bg-red-500"
                : "bg-purple-600 text-white"
            } flex items-center justify-center gap-4 w-full py-3 px-5 rounded-full mt-2`}
          >
            <IoMdNotifications size={24} />
            {buttonText}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Subscription;
