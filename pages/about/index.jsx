import Head from "next/head";
import Image from "next/image";
/* images */
import exlink from "../../assets/exlink.png"

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
        <p className=" w-full md:w-[70%]">
          As a frontend developer, I am responsible for building and maintaining
          the client-side of web applications. I am proficient in React,
          Tailwind, SASS, Firebase, Redux and TypeScript. I have adequate
          knowlegde of vuejs and nextjs, and I am always eager to learn new
          technologies and programming languages. I am skilled in translating
          UI/UX design wireframes into functional and responsive web pages,
          ensuring that the website is optimized for speed, accessibility, and
          user experience. Additionally, I am familiar with modern software
          development practices such as version control, automated testing, and
          continuous integration. I am passionate about creating elegant and
          user-friendly web experiences, and I am always looking for ways to
          improve my skills and deliver the best results for my clients.
        </p>
        <p className="w-full md:w-[70%]">
          In addition to my work as a frontend developer, I am an avid chess
          player. I love the strategic challenge of the game, and I find
          inspiration in its emphasis on planning, analysis, and forward
          thinking. When I am not coding or playing chess, I enjoy spending time
          with my family and friends.
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
