import { AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SideNav({ setShow }) {



  return (
    <nav className="w-full z-50">
      <ul className="flex flex-col items-start justify-center gap-4 pl-4 font-[500] w-full z-50 ">
        <li className="text-[22px] mb-3">
          <Link href={"/"} onClick={() => setShow(false)}>
            Home
          </Link>
        </li>
        <li className="text-[22px] mb-3">
          <Link href={"/about"} onClick={() => setShow(false)}>
            About me
          </Link>
        </li>
        <Link
          href={"/contact-me"}
          onClick={() => setShow(false)}
          className="p-0 m-0"
        >
          <li className="border rounded-full p-2 pl-3 pr-3 flex items-center shadow-[1px_2px_3px_2px_rgba(0,0,0,0.8)] h-[30px]">
            Contact me
          </li>
        </Link>
      </ul>
    </nav>
  );
}
