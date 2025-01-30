import { useRef } from "react"
import { EXPERIENCES } from "../constants"
import { motion, useInView } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const yearVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const contentVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const techVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
}

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="my-20 text-center text-4xl" variants={headingVariants}>
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4" variants={yearVariants}>
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" variants={contentVariants}>
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-sm text-purple-200">{experience.institute}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <motion.div variants={techVariants}>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-neutral-800 text-neutral-300 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience

