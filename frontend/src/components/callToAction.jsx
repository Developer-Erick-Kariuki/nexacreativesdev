// eslint-disable-next-line react/prop-types
const CallToAction = ({ className, href, name }) => {
  return (
    <a href={href}>
      <button className={`${className} px-6  py-3 rounded-3xl`}>{name}</button>
    </a>
  );
};

export default CallToAction;
