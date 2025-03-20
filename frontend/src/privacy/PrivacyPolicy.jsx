import Footer from "../container/Footer";
import Header from "../container/Header";

const PrivacyPolicy = () => {
  return (
    <body>
      <Header />
      <div className="flex justify-center mt-36 max-w-4xl mx-6 md:mx-auto flex-col">
        <h1>Privacy policy</h1>
        <h2>Privacy Policy for Nexa Creative Solutions</h2>
        <p>
          At Nexa Creative, we value the privacy of our visitors. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website (https://www.nexacreativesolutions.com). By
          using our website, you agree to the terms of this Privacy Policy.
        </p>
        <h2>Information Collection and Use</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and any other information you provide voluntarily. This
          information is used to improve our website, provide customer service,
          and deliver updates and promotional content.
        </p>
        <h2>Log Files and Cookies</h2>
        <p>
          Like many websites, we use log files and cookies to gather
          non-personal information, such as IP addresses, browser types, and the
          pages you visit. This data helps us analyze trends, administer the
          site, and personalize your browsing experience.
        </p>
        <h2>Advertising Partners and Third Parties</h2>
        <p>
          Some third-party advertising partners may use cookies and similar
          technologies to display personalized ads. We have no control over
          these cookies and recommend reviewing the respective Privacy Policies
          of these advertisers for more information.
        </p>
        <h2>Your Rights</h2>
        <p>
          Under the CCPA and GDPR, you can access, correct, or delete your data.
          You can also request that we restrict or stop processing your
          information. To exercise any of these rights, please contact us.
        </p>
        <h2>Children’s Information</h2>
        <p>
          We do not knowingly collect personal information from children under
          13. If you believe your child has provided such information on our
          website, please get in touch with us, and we will promptly remove it
          from our records.
        </p>
        <h2>Contact Us</h2>
        <p>
          Please contact us if you have any questions or need further
          information about our Privacy Policy.
        </p>
        <i>Last Updates: {new Date().getFullYear()}</i>
      </div>
      <Footer />
    </body>
  );
};

export default PrivacyPolicy;
