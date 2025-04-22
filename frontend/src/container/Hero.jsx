import CallToAction from "../components/callToAction";
import "../index.css";

const Hero = () => {
  return (
    <section
      className={`bg-slate-200 px-6 md:px-0 w-full mx-auto  md:py-20 md:flex-row`}
    >
      <div className="flex mx-auto gap-4 flex-col justify-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl max-w-xl leading-slug capitalize">
            Transforming your vision into
            <span className="bg-gradient-to-l from-purple-600 via-green-500 to-red-400 text-transparent font-extrabold bg-clip-text">
              {" "}
              stunning Websites
            </span>
          </h1>
          <p className="text-base font-light max-w-lg my-4 leading-relaxed">
            Our award-winning design agency blends creativity with cutting-edge
            technology to deliver unique and engaging digital experiences. Let’s
            create something extraordinary together.
          </p>
          <div className="flex-col gap-4 my-4 flex md:flex-row">
            <CallToAction
              href="#contact"
              name="Get Started"
              className="bg-gradient-to-tr hover:from-purple-600 hover:to-blue-600 transition-color text-primary duration-300 ease-linear from-blue-600 to-purple-600 "
            />
            <CallToAction
              href="#portfolio"
              name="See our work"
              className={`transition-color duration-300 text-slate-500 ease-linear border-slate-500 border hover:border-black hover:text-secondary`}
            />
          </div>
        </div>

        {/* hero image */}
        <div className="h-full mt-20 md:mt-0 flex justify-center items-center">
          <div className="overflow-hidden">
            <img
              className="drop-shadow-md w-full h-full"
              src="/Hero-image.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
