import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="absolute hidden sm:flex top-20 right-2 mt-4 gap-2">
      <button
        className={`${
          currentSlide === 0 ? "" : ""
        } bg-black text-white dark:bg-white dark:text-black rounded-full p-2`}
        onClick={() => previous()}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => next()}
        className="bg-black dark:bg-white dark:text-black text-white rounded-full p-2"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ButtonGroup;
