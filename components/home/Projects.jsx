import Image from "next/image";
import { motion } from "framer-motion";

/* image */
import tetrix from "../../assets/tetrix.png";
import movie from "../../assets/movinime.png";
import numle from "../../assets/numle.png";
import twitterClone from "../../assets/twitterClone.png";

export default function Projects({ className }) {
  return (
    <ul
      className={`lg:max-h-[698px] shadow-[0_0_0_2px_rgba(0,0,0,0.3)] pb-12 overflow-auto ${className}`}
    >
      {projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </ul>
  );
}

function Project({ project, index }) {
  const { title, description, image, link, github, tags } = project;
  const indexFormat = index < 9 ? `0${index + 1}` : index + 1;

  return (
    <motion.li className="p-5 "
    initial={{
      opacity: 0.3,
      scale: 0.7,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      once: true,
      amount: "all",
      transition:{
        duration: 0.6
      }
    }}
    >
      <div className="flex items-center gap-1 mb-10">
        <div className="w-[30px] max-w-[30px] min-w-[30px] h-[30px] max-h-[30px] min-h-[30px] border-black shadow-[0_0_0_2px_rgba(0,0,0,0.3)] transform rotate-45 flex items-center justify-center bg-white">
          <p className="transform rotate-[-45deg] text-[18px] font-[700]">
            {indexFormat}
          </p>
        </div>
        <hr className="w-[300px] max:w-[70vw] h-0 border  " />
      </div>
      <article>
        <h4 className="font-[600] text-[28px] mb-4">{title}</h4>
        <hr className="w-[50%] mb-3" />
        <p className="mb-6">{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <div className="relative inline">
            <Image
              src={image}
          
              height={300}
              alt={`${title}`}
              className="max-h-[300px] w-[90vw] md:max-w-[400px] lg:max-w-[250px]"
            />
          </div>
        </a>
      </article>
    </motion.li>
  );
}

const projects = [
  {
    title: "Twitter Clone",
    description:
      "A twitter clone built with Next.js, Tailwind, Firebase and Redux",
    image: twitterClone,
    link: "https://vu-witter.netlify.app/",
    github: "https://www.github.com/vubere/vwitter",
    tags: ["React.ts", "TypeScript", "Tailwind", "Firebase", "contextAPI"],
  },
  /* {
    title: "Portfolio",
    description:
      "My portfolio built with Next.js, Tailwind, Firebase and Redux",
    image: "/images/portfolio.png",
    link: "https://victorubere.netlify.app/",
    github: "https://www.github.com/vubere/portfolio",
    tags: ["nextjs", "Tailwind", "framer-motion", "contextAPI"],
  }, */
  {
    title: "Numle",
    description:
      "A wordle clone number guessing game built with React.js, scss and Redux",
    image: numle,
    link: "https://numle.netlify.app/",
    github: "https://www.github.com/vubere/numle",
    tags: ["React.js", "Redux", "scss"],
  },
  {
    title: "Movie App",
    description: "A movie app built with React.js, Tailwind and Redux",
    image: movie,
    link: "https://movinime.netlify.app/",
    github: "https://www.github.com/vubere/movie-app",
    tags: ["React.ts", "scss", "Redux"],
  },
  {
    title: "tetris",
    description: "A tetris game built with React.js, Tailwind and Redux",
    image: tetrix,
    link: "https://vutetrix.netlify.app/",
    github: "https://www.github.com/vubere/tetris",
    tags: ["JavaScript", "css"],
  },
];
