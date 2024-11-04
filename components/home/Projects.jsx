import Image from "next/image";
import { motion } from "framer-motion";
import { useCloseOnBlur } from "../../hooks/useCloseonClickAway";

/* image */
import tetrix from "../../assets/tetrix.png";
import movie from "../../assets/movinime.png";
import basicDashboard from "../../assets/basicDashboard.jpeg";
import numle from "../../assets/numle.png";
import collections from "../../assets/collections.jpeg";
import metabnb from "../../assets/metabnb.png";

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
      className="pt-5 px-4 lg:px-0 md:px-4"
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
      <div className="flex items-center gap-1 mb-2 py-3 md:px-4 px-2 md:max-w-[340px]">
        <div className="w-[30px] max-w-[30px] min-w-[30px] h-[30px] max-h-[30px] min-h-[30px] border border-[#000] shadow-[0_0_1px_1px_rgba(0,0,0)] transform rotate-45 flex items-center justify-center bg-white">
          <p className="transform rotate-[-45deg] text-[18px] font-[700]">
            {indexFormat}
          </p>
        </div>
        <hr className="w-[80%]  max-w-[280px]   lg:w-[130%] lg:max-w-full border border-[#000] h-0 border  " />
      </div>
      <article>
        <div className="md:px-3 ">
          <h4 className="font-[600] text-[28px] mb-1">{title}</h4>
          <hr className="w-[50%] mb-2 border-top border-[#000]" />
          <p className="lg:h-auto md:h-[70px] h-[70px]">{description}</p>
        </div>
        <div className="relative  max-h-[300px] w-[90vw] max-w-[400px] py-3 md:max-w-[400px]  lg:max-w-full lg:m-0  lg:px-0 ml:pl-4">
          <div className="relative h-[200px] w-[400px] max-w-[100%] overflow-hidden">
            <Image
              src={image}
              fill
              objectFit="cover"
              objectPosition="center"
              alt={`${title}`}
            />
          </div>
          <motion.div
            className="div absolute top-3 left-0  bg-[#fff8] flex items-center justify-center gap-2 md:w-[100%] w-[100%] h-[100%] lg:w-full "
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
        <ul className="flex gap-2 flex-wrap m-2 w-[80%] p-2">
          {tags.map((tag, i) => (
            <motion.li
              key={i + "" + link}
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
    title: "Collections",
    description: "A social blogging platform.",
    image: collections,
    link: "https://vu-collections.vercel.app/",
    github: "https://github.com/Vubere/Post",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "RTK Query",
    ],
  },
  {
    title: "Numle",
    description: "A number guessing game(wordle clone).",
    image: numle,
    link: "https://numle.netlify.app/",
    github: "https://www.github.com/vubere/numle",
    tags: ["React.js", "Redux", "SCSS"],
  },
  {
    title: "Basic Dashboard",
    description: "A basic dashboard showing data in tiles and charts.",
    image: basicDashboard,
    link: "https://vu-basic-dashboard.vercel.app/",
    github: "https://github.com/vubere/basic-dashboard",
    tags: ["React.js", "Tailwind", "TypeScript", "Chartjs"],
  },
  {
    title: "Tetris",
    description: "A game of tetris.",
    image: tetrix,
    link: "https://vutetrix.netlify.app/",
    github: "https://www.github.com/vubere/tetris",
    tags: ["JavaScript", "CSS"],
  },
  {
    title: "WillCreator",
    description:
      "An auto will generator. Collaborative work done with  @drieOX on github.",
    image: willCreator,
    link: "https://will-creator.netlify.app",
    github: "https://github.com/dreiOX/will-creator",
    tags: ["React.js", "CSS", "React Context API"],
  },
  {
    title: "MetaBnb",
    description: "Responsive landing page.",
    image: metabnb,
    link: "https://vu-metabnb.netlify.app/",
    github: "https://github.com/Vubere/MetabnbHNG",
    tags: ["React.ts", "CSS"],
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
