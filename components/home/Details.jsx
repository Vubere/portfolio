import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import hero from "../../assets/hero.png";

export default function Details({ className }) {
  return (
    <main className={`overflow-auto lg:max-h-[698px] w-full ${className}`}>
      <div className="overflow-hidden h-[300px]  flex items-center relative">
        <Image
          src={hero}
          className="absolute w-[100vw] h-[100%] z-[0]"
          alt="hero"
        />
      </div>
      <article className="p-6">
        <h2 className="font-[700] text-[38px] leading-[42px] lg:text-[58px] leading-[60px] md:text-[48px] md:leading-[50px] mb-4">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello there, I am Victor Ubere.")
                .changeDelay(0.1).start()
            }}
            options={{
              loop: false,
              strings: ["Hello there, I am Victor Ubere."],
              autoStart: false,
            }}
          />
        </h2>
        <p>
          I am a frontend web developer from Nigeria. I am focused on building
          responsive and performant web applications and web sites. My problem
          solving skill is my best strength and taking up new challenges is a
          hobby.
        </p>
      </article>
      <footer className="p-6">
        <p className="font-[700] lg:text-[22px]">
          Let{"'"}s work on your next project
        </p>
        <p className="underline">Download my resume</p>
        <span>Send me an email</span> | <span>Twitter</span> |{" "}
        <span>LinkedIn</span>
      </footer>
    </main>
  );
}
