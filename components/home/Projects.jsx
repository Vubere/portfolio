import { useState, keygen } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCloseOnBlur } from "../../hooks/useCloseonClickAway";

/* image */
import tetrix from "../../assets/tetrix.png";
import movie from "../../assets/movinime.png";
import numle from "../../assets/numle.png";
import twitterClone from "../../assets/twitterClone.png";
import metabnb from "../../assets/metabnb.png";
import reactCalc from "../../assets/reactCalc.png";
import willCreator from "../../assets/willCreator.png";

export default function Projects({ className }) {
  return (
    <ul className={`projects pb-12 overflow-auto ${className}`}>
      {projects.map((project, i) => (
        <Project key={i} project={project} index={i} />
      ))}
    </ul>
  );
}

function Project({ project, index }) {
  const { title, description, image, link, github, tags } = project;
  const { ref, show, setShow } = useCloseOnBlur();
  const indexFormat = index < 9 ? `0${index + 1}` : index + 1;
  console.log(tags);

  const visibilityVariants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.li
      className="p-5 "
      initial={{
        opacity: 0,
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
        once: true,
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
        <p className=" h-[70px]">{description}</p>
        <div className="relative inline w-[90vw] md:max-w-[400px] sm:max-w-[400px] lg:max-w-[250px] ">
          <Image
            src={image}
            height={300}
            width={250}
            alt={`${title}`}
            className="max-h-[300px] w-[90vw] max-w-[300px] md:max-w-[400px]  lg:max-w-[250px]"
          />
          <motion.div
            className="absolute top-0 left-0  h-full bg-[#fff8] flex items-center justify-center gap-2 max-h-[300px] w-full md:max-w-[400px] sm:max-w-[400px] lg:max-w-[250px]"
            animate={show ? "show" : "hide"}
            whileHover={{
              opacity: 1,
            }}
            variants={visibilityVariants}
            onClick={() => setShow(!show)}
            ref={ref}
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
        </div>
        <ul className="flex gap-2 flex-wrap m-2 w-[80%]">
          {tags.map((tag, i) => (
            <motion.li
              key={keygen}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                },
                x: 1,
                y: 1,
              }}
              className=" border text-black px-2 p-1 rounded-full"
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}

const projects = [
  {
    title: "Twitter Clone",
    description: "A twitter clone for mobile phones.",
    image: twitterClone,
    link: "https://vu-witter.netlify.app/",
    github: "https://www.github.com/vubere/vwitter",
    tags: ["React.ts", "TypeScript", "Tailwind", "Firebase", "contextAPI"],
  },
  {
    title: "Numle",
    description: "A wordle clone but number guessing instead.",
    image: numle,
    link: "https://numle.netlify.app/",
    github: "https://www.github.com/vubere/numle",
    tags: ["React.js", "Redux", "scss"],
  },
  {
    title: "Movie App",
    description: "A movie app.",
    image: movie,
    link: "https://movinime.netlify.app/",
    github: "https://www.github.com/vubere/movie-app",
    tags: ["React.ts", "scss", "Redux"],
  },
  {
    title: "Tetris",
    description: "A game of tetris.",
    image: tetrix,
    link: "https://vutetrix.netlify.app/",
    github: "https://www.github.com/vubere/tetris",
    tags: ["JavaScript", "css"],
  },
  {
    title: "WillCreator",
    description:
      "An auto will generator. Collaborative work done with  @drieOX on github.",
    image: willCreator,
    link: "https://will-creator.netlify.app",
    github: "https://github.com/dreiOX/will-creator",
    tags: ["React.js", "css", "contextAPI"],
  },
  {
    title: "MetaBnb",
    description: "Responsive landing page.",
    image: metabnb,
    link: "https://vu-metabnb.netlify.app/",
    github: "https://github.com/Vubere/MetabnbHNG",
    tags: ["React.ts", "css"],
  },
  /* {
    title: "Calculator",
    description: "A react calculator.",
    image: reactCalc,
    link: "https://vu-calculator-app.netlify.app/",
    github: "https://github.com/Vubere/React-calculator",
    tags: ["React.js", "css"],
  }, */
];
