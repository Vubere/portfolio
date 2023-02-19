import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const variants = {
    initialLoad: {
      opacity: 0,
      y: "-100vh",
    },
    animateLoad: {
      opacity: 1,
      y: 0,
    },
    exitLoad: {
      opacity: 0,
      y: "-100vh",
    },
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="author" content="Victor Ubere" />
        <meta
          name="keywords"
          content="Victor Ubere, Victor, Ubere, frontend, web developer, html, html5, css, css3, javascript, react, sass, redux, nextjs, tailwind, typescript, portfolio, projects, skills, details, about, contact, victorubere.com, victorubere, victorubere.com"
        />
        <meta
          name="description"
          content="Victor Ubere is a frontend web developer based in Owerri, Nigeria. He is proficient in HTML, CSS, Javascript, React, Redux, Tailwind, Typescript, and Sass."
        />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.section
            key={router.route}
            initial="initialLoad"
            animate="animateLoad"
            exit="exitLoad"
            transition={{
              duration: 0.4,
            }}
            variants={variants}
          >
            <Component {...pageProps} />
          </motion.section>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
