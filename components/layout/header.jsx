import Link from "next/link";

export default function header({show, showSideNav, width}) {



  return (
    <header className="p-3 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] flex justify-between w-full h-[70px] items-center fixed top-0 left-0 bg-white z-[999]">
      <h1 className="font-[600] text-[15px]">
        Victor Ubere{"  "}|{"  "}Frontend Engineer
      </h1>
      {
        width>600?
        <nav>
        <ul className="flex items-center justify-center gap-4 pr-4 font-[500]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About me</Link>
          </li>
          <Link href={"/contact-me"} className="p-0 m-0">
            <li className="border rounded-full p-2 pl-3 pr-3 flex items-center shadow-[1px_2px_3px_2px_rgba(0,0,0,0.8)] h-[30px]">
              Contact me
            </li>
          </Link>
        </ul>
      </nav>:<div className="w-[30px] h-[30px] bg-black" onClick={()=>showSideNav(!show)}></div>
      }
      {

      }
    </header>
  );
}
