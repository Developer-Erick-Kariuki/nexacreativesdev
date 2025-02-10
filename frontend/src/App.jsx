import AboutUs from "./container/AboutUs";
import Blog from "./container/Blog";

import ContactUs from "./container/ContactUs";
import Portfolioa from "./container/dataPortfolio";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Hero from "./container/Hero";
import Introduction from "./container/Introduction";
import Services from "./container/Services";
import Subscription from "./container/Subscription";
import Testimonial from "./container/Testmonial";
import Whyus from "./container/Whyus";

function App() {
  return (
    <main className="overflow-x-clip text-white font-inter max-w-7xl mx-auto p-6 md:p-10">
      <Header />
      <Hero />
      <Introduction />
      <AboutUs />
      <Whyus />
      <Services />
      {/* <Portfolio /> */}
      <Portfolioa />
      <Testimonial />
      <Blog />
      <Subscription />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
