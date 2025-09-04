import "../index.css";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-400/30 via-pink-200/30 to-slate-200/50  ">
      <div className="w-full min-h-screen  mx-auto justify-between items-center flex flex-col md:flex-row max-w-7xl px-6 lg:px-10">
        <div className="flex md:w-1/2 w-full mt-[20%] md:mt-0 flex-col">
          <h1 className="text-4xl md:text-6xl font-bold mt-12 mb-8">
            We transform vision into stuning visual reality
          </h1>
          <p className="text-lg my-4 leading-relaxed tracking-wider">
            We blends creativity with cutting-edge technology to deliver unique
            and engaging digital experiences. Let’s create something
            extraordinary together.
          </p>
          <div className="flex-col gap-4 mt-8 flex md:flex-row">
            <button className="rounded-full shadow-md bg-purple-600 py-3 px-5 text-white">
              Get in touch
            </button>
            <button className="rounded-full bg-slate-50 shadow-md py-3 px-5">
              See Our Work
            </button>
          </div>
        </div>

        {/* hero image */}
        <div className="">
          <img src="/Hero-image.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
