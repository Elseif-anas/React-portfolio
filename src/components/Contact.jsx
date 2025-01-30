import { useRef } from "react"
import { CONTACT } from "../constants"
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

const addressVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const phoneVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const emailVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.4 },
  },
}

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      className="border-b border-neutral-800 pb-4"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="my-20 text-center text-4xl" variants={headingVariants}>
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p className="my-4" variants={addressVariants}>
          {CONTACT.address}
        </motion.p>
        <motion.p className="my-4" variants={phoneVariants}>
          {CONTACT.phone}
        </motion.p>
        <motion.a href="#" className="border-b" variants={emailVariants}>
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Contact

