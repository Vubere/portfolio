import { useState, useEffect } from "react";

import Header from "./header";

import SideNav from "./sidenav";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useCloseOnBlur } from "../../helpers/useCloseonClickAway";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [width, setWidth] = useState(0);
  const {route} = useRouter()
  const {ref,show, setShow } = useCloseOnBlur()

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  


  return (
    <>
      <Header showSideNav={setShow} show={show} width={width} route={route}/>
      <AnimatePresence>
        {width <= 600 && show ? (
          <motion.div className="fixed right-0 top-[60px] w-[300px] max-w-[80vw] bg-white shadow-[0_0_0_3px_rgba(0,0,0,0.3)] p-4 pt-12 h-[100vh] z-[100] "
          initial={{x:200, opacity:0}}
          animate={{x:0, opacity:1}}
          exit={{x:200, opacity:0}}
          transition={{duration:0.3, type:"spring", damping:20,}}
          ref={ref}
          >
            <SideNav setShow={setShow} ref={ref} route={route}/>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="mt-[70px] ">{children}</div>
    </>
  );
}
