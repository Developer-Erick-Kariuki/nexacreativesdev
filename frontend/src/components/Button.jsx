// eslint-disable-next-line react/prop-types
const Button = ({ className, name }) => {
  return (
    <div className={`${className} cursor-pointer rounded-2xl px-6 py-2`}>
      {name}
    </div>
  );
};

export default Button;
