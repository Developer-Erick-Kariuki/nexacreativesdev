// eslint-disable-next-line react/prop-types
const CallToAction = ({ className, href, name }) => {
  return (
    <a href={href} className="">
      <div
        className={`${className} flex justify-center items-baseline px-6  py-3 rounded-2xl`}
      >
        {name}
      </div>
    </a>
  );
};

export default CallToAction;
