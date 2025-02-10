const Subscription = () => {
  return (
    <section className="w-full mx-auto ring-1 mt-16 ring-slate-600 p-3 rounded-3xl">
      <div className="md:flex flex-col justify-center">
        <div>
          <img src="/Background.png" alt="send" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 w-full items-start justify-center">
          <h1 className="text-4xl font-bold max-w-md">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-slate-500 max-w-sm">
            Subscribe to our newsletter and stay ahead of the curve with cutting
            edge designs ideas and tips
          </p>
          <form className="flex flex-col items-start gap-2" action="">
            <input
              type="email"
              className="w-full outline-none py-3 bg-transparent ring-1 ring-slate-700 rounded-xl px-2"
              placeholder="Your Email address"
            />
            <input
              type="submit"
              className="bg-accent w-full py-3 px-4 rounded-xl mt-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
