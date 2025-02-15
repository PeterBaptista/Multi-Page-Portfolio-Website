import { motion } from "framer-motion";
import { Icons } from "./icons";
const technologies = [
  <Icons.typescript width={35} height={35} className="fill-foreground " />,
  <Icons.react width={35} height={35} className="fill-foreground " />,
  <Icons.nextjs width={35} height={35} className="fill-foreground  " />,
  <Icons.tailwind width={35} height={35} className="fill-foreground " />,
  <Icons.html width={35} height={35} className="fill-foreground " />,
  <Icons.css width={35} height={35} className="fill-foreground " />,
];

const technologyNames = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

export default function TechMarquee() {
  return (
    <div className="w-full h-16 text-white py-4 overflow-hidden mx-auto">
      <motion.div
        className="flex shrink-0 "
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[
          ...technologies,
          ...technologies,
          ...technologies,
          ...technologies,
          ...technologies,
        ].map((tech, index) => (
          <span
            key={index}
            className=" text-lg font-semibold  flex gap-2 pr-10"
          >
            <div>{tech}</div>•{" "}
            <div className="truncate">{technologyNames[index % 6]}</div>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
