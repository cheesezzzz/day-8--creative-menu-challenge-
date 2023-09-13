import {motion} from "framer-motion"

export default function Menu() {

  const transition = {duration: 1.2, ease: [0.87, 0, 0.13, 1] }
  

  const menuAnimation = {
    initial: {
      y: "-100%"
    },
    animate: {
      y: 0,
      transition 
    },
    exit: {
      y:"-100%",
      transition 
    }
  }


  return (
    <motion.div variants={menuAnimation} initial="initial" animate="animate" exit="exit" className=" z-10 top-0 fixed h-[70vh] w-screen bg-[#FFF9F0]">
      <div className=" border-t border-black mt-20">
          <div>

          </div>
      </div>
    </motion.div>
  );
}
