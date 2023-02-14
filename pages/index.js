import Head from "next/head";

import Details from "../components/home/Details";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
    
      className="grid lg:grid-cols-[20%_50%_30%] md:grid-cols-[70%_30%]  lg:grid-rows-[1fr] "
    >
      <Head>
        <title>Victor Ubere</title>
        <meta
          name="description"
          content="Victor Ubere's portfolio. Victor is a frontend web developer with knowledge in html5, css, tailwind, javascript, typescript, react, redux, nextjs "
        />
      </Head>

      <Skills className="order-2 h-auto  lg:order-1 md:order-2 md:max-h-[100%] md:shadow-[0_0_0_2px_rgba(0,0,0,0.7)] md:overflow-auto md:h-[650px] " />
      <Details className="order-1 h-auto lg:order-2 md:order-1 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)] md:shadow-[0_0_0_1px_rgba(0,0,0,0.4)] md:h-[650px] md:max-h-[100%]  " />
      <Projects className="order-3 h-auto lg:order-3 md:order-3 md:max-h-[100%] lg:col-span-1 md:w-full md:col-span-2 lg:max-h-[698px] pb-10" />
    </motion.section>
  );
}
