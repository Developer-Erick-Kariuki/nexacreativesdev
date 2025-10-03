import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star } from "lucide-react";
import { PiQuotesFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

export default function CustomCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex gap-3">
      {/* Slides */}
      {testimonials.map((item, index) => (
        <div
          style={{ transform: `translateX(-${current * 100}%)` }}
          key={index}
          className={`flex cursor-pointer bg-blue-400 flex-col p-5 rounded-2xl  gap-8`}
        >
          <div className="flex  gap-8">
            <div className="flex gap-4 items-center">
              <div className="overflow-hidden rounded-full">
                <img
                  width={42}
                  src={item.profile.asset.url}
                  className="object-cover"
                  alt="default"
                />
              </div>
            </div>
            <p className="text-base font-bold flex flex-col">
              <div className="flex gap-4">
                {item.name} <FcGoogle size={20} />
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-yellow-400 text-yellow-400  w-5 h-5"
                    />
                  ))}

                  {/* Render unfilled stars */}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <Star
                      key={i + item.rating}
                      className="text-slate-700 fill-transparent w-5 h-5"
                    />
                  ))}
                </div>
              </div>

              <span className="opacity-50 text-sm font-normal">
                {item.designation}
              </span>
            </p>
          </div>

          <p className="leading-relaxed text-base">
            <PiQuotesFill size={32} className="text-purple-600" />{" "}
            {item.message}
          </p>
        </div>
      ))}

      <div className="flex transition-transform duration-500"></div>

      {/* Navigation */}
      <div className="flex absolute gap-4">
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className=" bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
