import { motion, AnimatePresence, animate } from "framer-motion";
import Image from "next/image";

const loader = {
  initial: {
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.25,
        duration: 1,
      },
    },
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 1.5,
      },
    },
  },
  exit: {
    opacity: 0,
    scale: [1, 10],
    transition: {
      opacity: {
        delay: 0.25,
        duration: 1,
      },
      scale: {
        delay: 0.5,
        duration: 1,
      },
    },
  },
};
const Connectify = ({ isVisible }: any) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex items-center justify-center h-screen w-screen"
          key="box"
          initial="initial"
          animate="animate"
        >
          <motion.div variants={loader}>
            <Image src="/4.svg" width={700} height={700} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Connectify;
