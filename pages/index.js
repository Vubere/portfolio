import Head from "next/head";

import Details from "../components/home/Details";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Victor Ubere</title>
        <meta name="description" content="Victor Ubere's portfolio. Victor is a frontend web developer with knowledge in html5, css,tailwind, javascript, typescript, react, redux, nextjs, " />
      </Head>
      <section className="grid lg:grid-cols-[20%_50%_30%] md:grid-cols-[70%_30%] grid-rows-[1fr_1fr_1fr] md:grid-rows-[1fr_1fr] lg:grid-rows-[1fr]">
        <Skills className="order-2 h-auto  lg:order-1 md:order-2 md:max-h-[100%] md:shadow-[0_0_0_1px_rgba(0,0,0,0.4)] md:overflow-auto md:h-[650px]" />
        <Details className="order-1 lg:order-2 md:order-1 md:shadow-[0_0_0_1px_rgba(0,0,0,0.4)] md:h-[650px] md:max-h-[100%]  " />
        <Projects className="order-3 lg:order-3 md:order-3 md:max-h-[100%] lg:col-span-1 md:col-span-2 " />
      </section>
    </div>
  );
}
