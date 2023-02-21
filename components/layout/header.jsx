import Link from "next/link";
import { motion } from "framer-motion";

export default function header({ show, showSideNav, width, route }) {
  const currentRoute = route.split("/")[1];

  const variant = {
    topOpen: {
      height: 5,
      width: 35,
      rotate: "45deg",
      y: 5,
      x: -5,
    },
    topClosed: {
      width: 30,
      x: 0,
      height: 5,
    },
    midOpen: {
      opacity: 0,
      x: 20,
    },
    midClosed: {
      width: 30,
      x: 0,
      height: 5,
    },
    bottomClosed: {
      opacity: 1,
      width: 30,
      height: 5,
    },
    bottomOpened: {
      opacity: 1,
      y: -12,
      x: -5,
      width: 35,
      height: 5,
      rotate: "-45deg",
    },
  };

  return (
    <header className="p-3 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] flex justify-between w-full h-[70px] items-center fixed top-0 left-0 bg-white z-[999]">
      <h1 className="font-[600] text-[15px]">
        <Link href={"/"}>
          Victor Ubere{"  "}|{"  "}Frontend Engineer
        </Link>
      </h1>
      {width > 600 ? (
        <nav>
          <ul className="flex items-center justify-center gap-4 pr-4 font-[500]">
            <li>
              <Link
                href={"/"}
                className={`${currentRoute == "" ? "underline" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`${currentRoute == "about" ? "underline" : ""}`}
              >
                About me
              </Link>
            </li>
            <Link href={"/contact-me"} className="p-0 m-0">
              <li
                className={`border rounded-full p-2 pl-3 pr-3 flex items-center shadow-[1px_2px_3px_2px_rgba(0,0,0)] h-[30px] ${
                  currentRoute == "contact-me" ? "underline" : ""
                }`}
              >
                Contact me
              </li>
            </Link>
          </ul>
        </nav>
      ) : (
        <div
          className="relative w-[30px] h-[20px] flex flex-col gap-1"
          onClick={() => showSideNav(!show)}
        >
          <motion.div
            className=" bg-black "
            initial="topClosed"
            animate={!show ? "topClosed" : "topOpen"}
            transition={{
              type: "spring",
            }}
            variants={variant}
          ></motion.div>
          <motion.div
            className=" bg-black "
            initial="midClosed"
            animate={!show ? "midClosed" : "midOpen"}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 10,
            }}
            variants={variant}
          ></motion.div>
          <motion.div
            className="bg-black "
            initial="bottomClosed"
            animate={!show ? "bottomClosed" : "bottomOpened"}
            variants={variant}
          ></motion.div>
        </div>
      )}
      {}
    </header>
  );
}
