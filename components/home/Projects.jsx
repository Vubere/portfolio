import Image from "next/image";
import { motion } from "framer-motion";

/* image */
import tetrix from "../../assets/tetrix.png";
import movie from "../../assets/movinime.png";
import numle from "../../assets/numle.png";
import twitterClone from "../../assets/twitterClone.png";
import { useState } from "react";

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
  const [show, setShow] = useState(false)

  const visibilityVariants = {
    show: {
      opacity: 1
    },
    hide: {
      opacity: 0
    }
  }

  return (
    <motion.li
      className="p-5 "
      initial={{
        opacity: 0.3,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,

        transition: {
          duration: 0.6,
        },
      }}
      viewport={{
        amount: 0.5,
        once: true
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
        <motion.div className="relative inline">
          <Image
            src={image}
            height={300}
            alt={`${title}`}
            className="max-h-[300px] w-[90vw] md:max-w-[400px] sm:max-w-[400px] lg:max-w-[250px]"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#fff8] flex items-center justify-center gap-2"
            animate={show?'show':'hide'}
            whileHover={{
              opacity: 1,
            }}
            variants={visibilityVariants}
            onClick={()=>setShow(!show)}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="border p-4 py-1 bg-white font-[500] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.3)] rounded-full underline"
            >
              Visit
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="border p-4 py-1 bg-white font-[500] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.3)] rounded-full underline"
            >
              Github
            </a>
          </motion.div>
        </motion.div>
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
  {
    title: "WillCreator",
    description: "Collaborative work done with  github @DrieOx. Responsive web app made with react, contextAPI and css",
    image: "",
    link: "",
    github: "",
    tags: ["React, css", "contextAPI"],
  },
  {
    title: "MetaBnb",
    description: "Responsive landing page made with react and css",
    image: "",
    link: "",
    github: "",
    tags: ["React, css"],
  },
  {
    title: "react calculator",
    description: "Calcultor made with react",
    image: "",
    link: "",
    github: "",
    tag: ["react", "css"],
  },
  {
    title: 'TicTacToe',
    description: "A game of TicTacToe, with dummy AI, made with JavaScript and css.",
    image: "",
    link: "",
    github: "",
    tags: ["JavaScript", "Css"]
  }
];
