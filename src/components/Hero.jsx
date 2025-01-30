import { ABOUT_ME } from "../constants"
import profilepic from "../assets/profilepic.png"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.2 }, // Delay after all text elements
  },
}

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <motion.div className="w-full lg:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={itemVariants} className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Anas Fida
            </motion.h1>
            <motion.span
              variants={itemVariants}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p variants={itemVariants} className="my-2 max-w-xl py-6 font-light tracking-tight">
              {ABOUT_ME}
            </motion.p>
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={imageVariants} initial="hidden" animate="visible">
          <div className="flex justify-center">
            <img className="brightness-[0.8]" src={profilepic || "/placeholder.svg"} alt="Anas Fida" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

