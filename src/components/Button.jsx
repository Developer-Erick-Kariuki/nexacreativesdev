import { ArrowRight, ChevronRight } from "lucide-react";

export default function Button({ name, className, href, target }) {
  return (
    <button
      className={`${className} group relative border-2  overflow-hidden px-8 py-4 rounded-full`}
    >
      {/* Expanding content */}
      <div
        className={`absolute inset-0 flex items-center px-8 justify-between text-white
        bg-violet-800 transition-[clip-path] duration-700 ease-in-out
        [clip-path:ellipse(0%_0%_at_50%_100%)]
        group-hover:[clip-path:ellipse(150%_150%_at_50%_100%)]`}
      >
        <a
          href={href} // Replace with your WhatsApp number
          target={target}
        >
          {name}
        </a>
        <ChevronRight />
      </div>

      <div className="flex justify-between gap-2">
        {name}
        <ChevronRight />
      </div>
    </button>
  );
}
