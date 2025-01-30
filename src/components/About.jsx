import aboutImg from "../assets/aboutImg.png"
import { MY_INFORMATION } from "../constants"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="border-b border-neutral-900 pb-4" ref={ref}>
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <motion.div
        className="flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={imageVariants}>
          <div className="flex items-center justify-center">
            <img src={aboutImg || "/placeholder.svg"} alt="about" />
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={textVariants}>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{MY_INFORMATION}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About

