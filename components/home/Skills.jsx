import { motion } from "framer-motion";

export default function Aside({ className }) {
  return (
    <aside
      className={`skills w-full overflow-auto pb-8 ${className}`}
    >
      <section className=" w-full p-6 pt-6">
        <h3 className="uppercase font-[700] mb-3">My Skills</h3>
        <motion.ul className="w-full " layout>
          {skills.map((skill, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                x: 100 * i,
              }}
              transition={{
                delay: 0.03*i,
                duration: 0.3,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="border  rounded-full p-1 pl-2 pr-2 inline-flex items-center justify-center text-center shadow-[1px_1px_2px_2px_rgba(0,0,0)] m-2 mb-4 text-black "
            >
              {skill}
            </motion.li>
          ))}{" "}
        </motion.ul>
      </section>
      <section className="p-6 pt-6 pb-12">
        <h3 className="uppercase font-[700] mb-3">Tools</h3>
        <motion.ul className="">
          {tools.map((tool, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                x: 100 * i,
              }}
              transition={{
                delay: 0.01*i,
                duration: 0.8 ,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true
              }}
              className="border rounded-full p-1 pl-2 pr-2 inline-flex items-center justify-center text-center shadow-[2px_2px_2px_2px_rgba(0,0,0)] m-2 mb-4 text-black "
            >
              {tool}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </aside>
  );
}

const tools = [
  "HTML5",
  "CSS",
  "SASS",
  "Tailwind",
  "Javascript",
  "TypeScript",
  "React",
  "Nextjs",
  "Redux/RTK",
  "Firebase",
  "Git/Github",
];

const skills = [
  "Responsive Design",
  "Performance Optimization",
  "Problem Solving",
  "Team Work",
];
