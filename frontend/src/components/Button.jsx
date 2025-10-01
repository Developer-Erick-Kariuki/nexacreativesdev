import { ArrowRight, ChevronRight } from "lucide-react";

export default function Button({ name, className }) {
  return (
    <button
      className={`${className} group relative border-2  overflow-hidden px-8 py-4 rounded-full`}
    >
      {/* Expanding content */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white
        bg-black transition-[clip-path] duration-700 ease-in-out
        [clip-path:ellipse(0%_0%_at_50%_100%)]
        group-hover:[clip-path:ellipse(150%_150%_at_50%_100%)]`}
      >
        {name}
        <ChevronRight />
      </div>

      <div className="flex justify-between gap-2">
        {name}
        <ChevronRight />
      </div>
    </button>
  );
}
