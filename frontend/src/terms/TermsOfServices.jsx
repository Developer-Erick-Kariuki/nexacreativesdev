import React, { useContext } from "react";
import Header from "../container/Header";
import { Link } from "react-router-dom";
import Footer from "../container/Footer";
import { ThemeContext } from "../components/ThemeContextProvider";

const TermsOfServices = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body
      className={` ${
        theme === "dark" ? "bg-black text-white" : "bg-slate-50 text-black"
      }`}
    >
      <Header />
      <div
        className={` flex mt-16 mx-6 md:mx-auto max-w-4xl w-full flex-col justify-center h-auto static`}
      >
        <h1>Terms & Conditions</h1>
        <h2>Terms and Conditions of Naxa Creative Solutions</h2>
        <p>
          By accessing and using our website
          (https://www.nexacreativesolutions.com), you agree to comply with the
          following terms and conditions. If you do not agree with any part of
          these terms, please refrain from using our website.
        </p>
        <h2>Use of Cookies</h2>
        <p>
          We utilize cookies in accordance with our Privacy Policy. Cookies are
          used to enhance your experience and improve the functionality of
          certain areas on our website. Some affiliate/advertising partners may
          also use cookies.
        </p>
        <h2>Intellectual Property Rights</h2>
        <p>
          All materials on CodingNepal, unless otherwise stated, are owned by
          CodingNepal and its licensors, and all intellectual property rights
          are reserved. You may access and use our content for personal
          purposes, but you must not republish, sell, rent, reproduce, or
          redistribute it without our prior consent.
        </p>
        <h2>User Comments</h2>
        <p>
          Certain areas of our website allow users to post and exchange opinions
          and information. Please note that we do not filter or review these
          comments in advance. The views expressed in user comments do not
          necessarily reflect our views, and we are not liable for any content
          users post.
        </p>
        <h2>Hyperlinks to Our Content</h2>
        <p>
          Government agencies, search engines, and news organizations may link
          to our website without prior written approval. Other organizations may
          seek approval for hyperlinking based on specific criteria, including
          non-deceptiveness and contextual relevance.
        </p>
        <h2>iFrames</h2>
        <p>
          Creating frames around our web pages that alter the visual
          presentation of our website is not permitted without our prior
          approval.
        </p>
        <h2>Content Liability</h2>
        <p>
          We are not responsible for any content that appears on external
          websites linking to our site. You agree to defend and protect us
          against any claims arising from the content displayed on your website
          that links to Nexa Creative Solutions.
        </p>
        <h2>Privacy</h2>
        <p>
          Please read our{" "}
          <span>
            <Link to="/privacy">Privacy Policy</Link>
          </span>{" "}
          to understand how we handle your personal information.
        </p>
        <h2>Reservation of Rights</h2>
        <p>
          We reserve the right to request the removal of any link to our website
          and to modify these terms and conditions. By continuing to link to our
          website, you agree to be bound by the updated terms and conditions.
        </p>
        <h2>Disclaimer</h2>
        <p>
          We strive to provide accurate and up-to-date information, but we do
          not warrant the completeness or accuracy of the content on our
          website. Your use of our website is at your own risk, and we do not
          accept liability for any loss or damage resulting from it. By
          accessing and using CodingNepal, you acknowledge and accept these
          terms and conditions. If you have any questions or concerns, please
          contact us
        </p>
        <i>Last Updates: {new Date().getFullYear()}</i>
      </div>
      <Footer />
    </body>
  );
};

export default TermsOfServices;
