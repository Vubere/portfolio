

export default function Aside({className}) {


  return (
    <aside className={`w-full lg:shadow-[0_2px_0_2px_rgba(0,0,0,0.3)] lg:max-h-[698px] overflow-auto pb-8 ${className}`}>
      <section className="lg:shadow-[0_2px_2px_0_rgba(0,0,0,0.3)] w-full p-6 pt-6">
        <h3 className="uppercase font-[700] mb-3">My Skills</h3>
        <ul className="w-full ">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="border  rounded-full p-1 pl-2 pr-2 inline-flex items-center justify-center text-center shadow-[1px_1px_2px_2px_rgba(0,0,0)] m-2 mb-4 text-black "
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className="p-6 pt-6 pb-12">
        <h3 className="uppercase font-[700] mb-3">Tools</h3>
        <ul className="">
          {tools.map((tool, i) => (
            <li
              key={i}
              className="border rounded-full p-1 pl-2 pr-2 inline-flex items-center justify-center text-center shadow-[2px_2px_2px_2px_rgba(0,0,0)] m-2 mb-4 text-black "
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

const tools = [
  "HTML5",
  "CSS/SASS",
  "Tailwind",
  "Javascript/TypeScript",
  "React.js",
  "Next.js",
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