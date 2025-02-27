// eslint-disable-next-line react/prop-types
const Button = ({ className, name }) => {
  return (
    <div
      className={`${className} cursor-pointer rounded-3xl w-full px-20 py-3`}
    >
      {name}
    </div>
  );
};

export default Button;
