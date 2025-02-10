const ContactUs = () => {
  return (
    <section
      id="contact"
      className="ring-1 ring-slate-500 py-8 px-5 rounded-3xl bg-secondary w-full mt-32  md:flex-row justify-center items-center flex gap-6 flex-col-reverse"
    >
      <div className="flex w-full md:w-1/2 flex-col">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form action="" className="flex flex-col gap-6 mt-4">
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Enter your name"
          />
          <hr className="h-2" />
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Enter your email"
          />
          <hr className="h-2" />
          <h2>What is this about</h2>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">Sales inquiry</label>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">Customer feedback</label>
          </div>
          <div className="flex gap-4">
            <input type="checkbox" />
            <label htmlFor="">Other</label>
          </div>
          <button className="border-2 px-5 py-2 mt-8" type="submit">
            NEXT
          </button>
        </form>
      </div>
      <div className="flex">
        <img src="/contactimg.png" width={400} alt="" />
      </div>
    </section>
  );
};

export default ContactUs;
