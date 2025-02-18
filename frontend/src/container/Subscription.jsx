import { useState } from "react";
import { client } from "../client";

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
    <section className="w-full bg-gray-950 mt-16 p-3 rounded-3xl">
      <div className="flex flex-col md:flex-row justify-center">
        <div>
          <img src="/Background.png" alt="send" width={500} />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 w-full items-start justify-center">
          <h1 className="text-4xl font-bold max-w-md">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-slate-500 max-w-sm">
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
              className="w-full outline-none py-3 bg-transparent ring-1 ring-slate-700 rounded-xl px-2"
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
                  : "bg-accent"
              }  w-full py-3 px-4 rounded-xl mt-2`}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
