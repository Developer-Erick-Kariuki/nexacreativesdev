import AboutUs from "./container/AboutUs";
import Blog from "./container/Blog";
import ContactUs from "./container/ContactUs";
import Portfolioa from "./container/dataPortfolio";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Hero from "./container/Hero";
import Services from "./container/Services";
import Subscription from "./container/Subscription";
import Testimonial from "./container/Testmonial";
import Whyus from "./container/Whyus";

function App() {
  return (
    <main className="w-full relative overflow-x-hidden font-inter  mx-auto">
      <Hero />
      <div className="max-w-7xl overflow-y-hidden overflow-x-hidden px-4 mx-auto">
        <AboutUs />
        <Whyus />
        <Services />
        <Portfolioa />
        <Testimonial />
        <Blog />
        <Subscription />
        <ContactUs />
      </div>
    </main>
  );
}

export default App;
