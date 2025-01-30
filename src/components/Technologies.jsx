import { useRef } from "react"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb, SiFigma, SiJavascript, SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { motion, useInView } from "framer-motion"

const technologies = [
  { Icon: RiReactjsLine, color: "text-cyan-400" },
  { Icon: TbBrandNextjs, color: "text-gray-400" },
  { Icon: SiMongodb, color: "text-green-800" },
  { Icon: FaNodeJs, color: "text-green-500" },
  { Icon: SiFigma, color: "text-purple-300" },
  { Icon: SiJavascript, color: "text-yellow-400" },
  { Icon: SiExpress, color: "text-gray-300" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="border-b border-neutral-800 pb-24" ref={ref}>
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {technologies.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={itemVariants}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.2, // This creates the irregular up and down motion
              },
            }}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies

