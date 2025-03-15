import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaSearchPlus } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";

import { FaRocket } from "react-icons/fa";

export const links = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const animation = [
  {
    delay: 0.5,
    duration: 0.5,
    viewPort: "once",
    initialOpacity: 0,
    opacity: 1,
  },
];

export const processes = [
  {
    name: "Discover",
    icon: FaSearchPlus,
    className: "bg-purple-50 ",
    desc: "This is the research and exploration phase, where we gather insights, define objectives, and understand the project’s scope: It involves: Client Consultation: Understanding the client’s vision, goals, and brand identity. Market Research: Analyzing competitors and target audiences for effective design strategies. Mood Boards & Inspiration: Collecting visual references to establish the project’s aesthetic direction. Brainstorming & Concept Development: Generating ideas and preliminary sketches for the design.",
  },
  {
    name: "Define",
    icon: HiOutlineLightBulb,
    className: "bg-blue-50",
    desc: "This phase refines the project’s direction by solidifying objectives and key design elements. It includes: Project Brief & Strategy: Creating a detailed plan outlining deliverables, timelines, and creative direction. Brand Guidelines (if applicable): Establishing color palettes, typography, and design elements to ensure consistency. Concept Validation: Presenting initial ideas to the client for feedback and refinement before moving forward.",
  },
  {
    name: "Design",
    icon: FaPencilRuler,
    className: "bg-green-50",
    desc: "This is the execution stage, where ideas transform into tangible visuals. It involves: Wireframing & Layouts: Structuring the design for digital and print projects. Prototyping & Mockups: Creating realistic previews for branding, UI/UX, packaging, or marketing materials. Client Reviews & Revisions: Refining designs based on feedback to ensure they align with the project goals. Finalizing Design Assets: Preparing high-quality files optimized for different mediums (print, digital, social media, etc.).",
  },
  {
    name: "Launch",
    icon: FaRocket,
    className: "bg-orange-50",
    desc: "The design is finalized and prepared for deployment. This stage includes: Exporting & Delivering Assets: Providing final files in necessary formats(AI, PSD, PNG, JPEG, PDF, etc.).Print & Production Coordination(if needed): Ensuring high - quality results for printed materials.Web & Digital Implementation: Uploading or integrating designs into websites, social media, or marketing campaigns.Performance Review: Analyzing how the design performs post - launch and making any necessary refinements.",
  },
];
