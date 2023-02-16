import Head from "next/head";

import Details from "../components/home/Details";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
    
      className="grid lg:grid-cols-[20%_50%_30%] md:grid-cols-[70%_30%] "
    >
      <Head>
        <title>Victor Ubere</title>
        <meta
          name="description"
          content="Victor Ubere's portfolio. Victor is a frontend web developer with knowledge in html5, css, tailwind, javascript, typescript, react, redux, nextjs "
        />
      </Head>

      <Skills className="order-2  lg:order-1 md:order-2 " />
      <Details className="order-1 h-auto lg:order-2 md:order-1   " />
      <Projects className="order-3 lg:order-3 md:order-3 lg:col-span-1 md:w-full md:col-span-2 l pb-10 " />
    </motion.section>
  );
}
