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
            className="max-w-[1500px] mx-auto flex flex-col justify-center items-center"
          >
            <Component {...pageProps} />
          </motion.section>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
