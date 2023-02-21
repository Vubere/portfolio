import Image from "next/image";
/* import TypewriterComponent from "typewriter-effect"; */
/* images */
import hero from "../../assets/hero.png";
import exlink from "../../assets/exlink.png"
import eye from "../../assets/eye.png"
import mailSend from "../../assets/mailSend.png"

export default function Details({ className }) {
  return (
    <main className={`details overflow-auto  w-full ${className}`}>
      <div className="overflow-hidden h-[300px]  flex items-center relative">
        <Image
          src={hero}
          className="absolute w-[100vw] h-[100%] z-[0]"
          alt="hero"
        />
      </div>
      <article className="p-6">
        <h2 className="font-[700] text-[38px] leading-[42px] lg:text-[58px] leading-[60px] md:text-[48px] md:leading-[50px] mb-4">
          {/* <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello there, I am Victor Ubere.")
                .changeDelay(0.1)
                .start();
            }}
            options={{
              loop: false,
              strings: ["Hello there, I am Victor Ubere"],
              autoStart: false,
              cursor: "",
            }}
          /> */}
          Hello there, I am Victor Ubere.
        </h2>
        <p>
          I am a frontend web developer focused on building responsive and performant web applications and web sites. I enjoy solving coding problems and taking up new challenges.
        </p>
      </article>
      <footer className="p-6">
        <p className="font-[700] lg:text-[22px]">
          Let{"'"}s work on your next project
        </p>
        <a
          className="underline inline-block h-[16px]"
          href="https://drive.google.com/file/d/1frYMNANkIFmPGTFWr6vyr63WWqJgGBK9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          View my resume
          <sup>
            <Image src={eye} width={10} height={10} alt="view resume" className="inline"/>
          </sup>
        </a>
        <div>
          <a href="mailto:victorubere@gmail.com" className="hover:underline">
            Send me an email
          <sup>
            <Image src={mailSend} width={10} height={10} alt="view resume" className="inline"/>
          </sup>
          </a>{" "}
          |{" "}
          <a
            href="https://twitter.com/VictorUbere"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Twitter
          <sup>
            <Image src={exlink} width={10} height={10} alt="view resume" className="inline"/>
          </sup>
          </a>{" "}
          <span className="font-[700] text-[12px]">+</span>{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/victor-ubere-381b75110"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          <sup>
            <Image src={exlink} width={10} height={10} alt="view resume" className="inline"/>
          </sup>
          </a>{" "}
          <span className="font-[700] text-[12px]">+</span>{" "}
          <a
            className="hover:underline"
            href="https://github.com/Vubere"
            target="_blank"
            rel="noreferrer"
          >
            Github
          <sup>
            <Image src={exlink} width={10} height={10} alt="view resume" className="inline"/>
          </sup>
          </a>
        </div>
      </footer>
    </main>
  );
}
