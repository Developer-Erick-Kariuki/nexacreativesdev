// eslint-disable-next-line react/prop-types
const CallToAction = ({ className, href, name }) => {
  return (
    <a href={href} className="">
      <div
        className={`${className} flex justify-center items-baseline px-5 py-2 text-sm rounded-md`}
      >
        {name}
      </div>
    </a>
  );
};

export default CallToAction;
