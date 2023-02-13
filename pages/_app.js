import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const variants = {
    initialLoad: {
      opacity: 0,  
      y: "-100vh"
    },
    animateLoad: {
      opacity: 1, 
      y:0
    },
    exitLoad: {
      opacity: 0,
      y: "-100vh"
    },
  };
  

  return (
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
  );
}

export default MyApp;
