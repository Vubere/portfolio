import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const dateChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <motion.section
     
      key="about"
    >
      <Head>
        <title>About VUbere</title>
        <meta name="description" content="All about Vubere" />
      </Head>
      <h2>About</h2>

      <p>
        Hi, I am Victor Ubere, an undergrad student of Computer Engineering. I
        build the front end of web sites and web applications using the
        following tools.
        <ul>
          <li>HTML5</li>
          <li>CSS/SASS</li>
          <li>Tailwind</li>
          <li>Javascript/TypeScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Redux</li>
          <input onChange={dateChange} type="date" />
        </ul>
      </p>
    </motion.section>
  );
}
