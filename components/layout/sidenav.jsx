import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SideNav({ setShow, route }) {
  const currentRoute = route.split("/")[1];


  return (
    <nav className="w-full z-50">
      <ul className="flex flex-col items-start justify-center gap-4 pl-4 font-[500] w-full z-50 ">
        <li className="text-[18px] md:text-[22px] mb-3">
          <Link
            href={"/"}
            onClick={() => setShow(false)}
            className={`${currentRoute == "" ? "underline" : ""}`}
          >
            Home
          </Link>
        </li>
        <li className="text-[18px] md:text-[22px] mb-3">
          <Link
            href={"/about"}
            onClick={() => setShow(false)}
            className={`${currentRoute == "about" ? "underline" : ""} `}
          >
            About me
          </Link>
        </li>
        <Link
          href={"/contact-me"}
          onClick={() => setShow(false)}
          className="p-0 m-0"
        >
          <li
            className={`border rounded-full p-3 flex items-center justify-center shadow-[1px_2px_3px_2px_rgba(0,0,0,0.8)] h-[40px] text:[18px] md:text-[22px] ${
              currentRoute == "contact-me" ? "underline" : ""
            }`}
          >
            Contact me
          </li>
        </Link>
      </ul>
    </nav>
  );
}
