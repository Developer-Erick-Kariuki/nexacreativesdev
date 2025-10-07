import AboutUs from "./container/AboutUs";
import Blog from "./container/Blog";
import ContactUs from "./container/ContactUs";
import Portfolioa from "./container/dataPortfolio";
import Hero from "./container/Hero";
import Services from "./container/Services";
import Subscription from "./container/Subscription";
import Testimonial from "./container/Testmonial";

function App() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolioa />
      <Testimonial />
      <Blog />
      <Subscription />
      <ContactUs />
    </main>
  );
}

export default App;
