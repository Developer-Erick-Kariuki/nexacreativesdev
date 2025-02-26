// eslint-disable-next-line react/prop-types
const Button = ({ className, name }) => {
  return (
    <button className={`${className} cursor-pointer rounded-3xl  px-6 py-3`}>
      {name}
    </button>
  );
};

export default Button;
