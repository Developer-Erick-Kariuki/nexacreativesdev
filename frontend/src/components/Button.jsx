import { FaLocationArrow } from "react-icons/fa6";
import PropTypes from "prop-types";
import "../index.css";

const SpinningBorderButton = ({ className, name }) => {
  return (
    <div>
      {/* Button Wrapper with Rotating Gradient Border */}
      <button className="relative p-[2px] rounded-xl w-full  overflow-hidden ">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-slow "
          style={{
            background:
              "conic-gradient(rgba(244, 114, 182, 0.8) 0deg, rgba(192, 132, 252, 0.8) 60deg, transparent 150deg)",
          }}
        ></div>

        {/* Inner Button */}
        <div
          className={`${className} relative  flex gap-4 items-center justify-center px-6 py-3 text-sm text-white font-medium`}
        >
          {name}
          <span>
            <FaLocationArrow className="rotate-45" />
          </span>
        </div>
      </button>

      {/* Inline Animation Styles */}
      <style>
        {`
          @keyframes spinSlow {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SpinningBorderButton;
