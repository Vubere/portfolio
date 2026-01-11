import Head from "next/head";

import Details from "../components/home/Details";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section className="grid lg:grid-cols-[20%_50%_30%] md:grid-cols-[70%_30%] ">
      <Head>
        <title>Victor Ubere | Software Developer</title>
        <meta
          name="description"
          content="Victor Ubere is a Nigeria-based software developer specializing in building scalable web applications with React, Next.js, and modern backend technologies."
        />
        <meta
          name="keywords"
          content="Victor Ubere, Software Developer, Full Stack Developer, React Developer, Next.js Developer, Web Developer Nigeria"
        />
        <meta property="og:title" content="Victor Ubere | Software Developer" />
        <meta
          property="og:description"
          content="Portfolio of Victor Ubere, a Nigeria-based software developer focused on modern, scalable web applications."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Skills className="order-2  lg:order-1 md:order-2 " />
      <Details className="order-1 h-auto lg:order-2 md:order-1   " />
      <Projects className="order-3 lg:order-3 md:order-3 lg:col-span-1 md:w-full md:col-span-2 l pb-10 " />
    </motion.section>
  );
}
