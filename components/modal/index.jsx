import { AnimatePresence, motion } from "framer-motion";


export default function Modal({children,  ref }) {


  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0)] z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-[90vw] h-[100px] bg-[#f3f3f3] rounded-lg max-w-[200px] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
          >
                {children}  
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
