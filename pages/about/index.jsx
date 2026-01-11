import Head from "next/head";
import Image from "next/image";
/* images */
import exlink from "../../assets/exlink.png";

export default function Aside({ className }) {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const age = year - 2000 - (month < 5 ? 1 : 0);

  return (
    <>
      <Head>
        <title>About Victor Ubere</title>
      </Head>
      <section className="p-4 lg:p-6 flex flex-col gap-2 max-w-[1300px]">
        <h2 className="font-[600] text-[32px]">About Me</h2>
        <p>
          Hi, I am Victor Ubere, a {age}-year-old frontend developer based in
          Nigeria.
        </p>
        <p className="w-full md:w-[70%]">
          As a software developer, I specialize primarily in frontend
          development, where I build performant, accessible, and user-focused
          web applications. I am highly proficient in React, TypeScript,
          Tailwind CSS, SASS, Redux, and Firebase, with strong experience
          translating UI/UX wireframes into responsive and intuitive interfaces
          optimized for speed and usability. In addition, I have an adequate
          skill set in backend development, working with Node.js (Express and
          NestJS), Go (Golang), and databases such as MySQL and MongoDB. While
          my core strength remains on the frontend, this broader full-stack
          exposure allows me to collaborate effectively across the stack and
          build more complete, scalable solutions.
        </p>

        <p className="w-full md:w-[70%]">
          I am comfortable with modern software development practices including
          version control, automated testing, and continuous integration. Beyond
          development, I am an avid chess player who enjoys the strategic depth
          of the game and draws inspiration from its emphasis on planning,
          analysis, and forward thinking. When I am not coding or playing chess,
          I enjoy spending time with my family and friends.
        </p>

        <p className="w-full md:w-[70%]">
          I am currently available for hire. If you are interested in working
          with me, please contact me via email at
          <a href="mailto:victorubere@gmail.com" className="hover:underline ">
            {" "}
            victorubere@gmail.com.
          </a>
        </p>
        <p>
          I am also available on the following platforms:
          <ul className="p-2 pl-6">
            <li className="list-disc">
              <a
                href="https://twitter.com/VictorUbere"
                className="text-[#00f]"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
                <sup>
                  <Image
                    src={exlink}
                    width={10}
                    height={10}
                    alt="view resume"
                    className="inline"
                  />
                </sup>
              </a>
            </li>
            <li className="list-disc">
              <a
                href="https://www.linkedin.com/in/victor-ubere-381b75110"
                className="text-[#00f]"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <sup>
                  <Image
                    src={exlink}
                    width={10}
                    height={10}
                    alt="view resume"
                    className="inline"
                  />
                </sup>
              </a>
            </li>
            <li className="list-disc">
              <a
                href="https://github.com/Vubere"
                className="text-[#00f]"
                target="_blank"
                rel="noreferrer"
              >
                Github
                <sup>
                  <Image
                    src={exlink}
                    width={10}
                    height={10}
                    alt="view resume"
                    className="inline"
                  />
                </sup>
              </a>
            </li>
          </ul>
        </p>
        <div></div>
      </section>
    </>
  );
}
