import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

const IconButton = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-purple-400 transition-colors duration-300"
    whileHover={{
      scale: 1.2,
      textShadow: "0 0 8px rgb(168, 85, 247)",
    }}
  >
    <Icon />
  </motion.a>
)

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 bg-neutral-900 bg-opacity-80 backdrop-blur-sm">
      {/* Logo on the Left */}
      <motion.button
        onClick={scrollToTop}
        className="text-lg font-semibold hover:text-purple-400 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        elseif-anas
      </motion.button>

      {/* Icons on the Right */}
      <div className="flex items-center space-x-6">
        <IconButton icon={FaGithub} href="https://github.com/elseif-anas" />
        <IconButton icon={FaLinkedin} href="https://linkedin.com/in/anas-fida-3958131b1" />
        <IconButton icon={FaWhatsapp} href="https://wa.me/+923258040407" />
        <IconButton icon={FaEnvelope} href="mailto:anasfida00@gmail.com" />
      </div>
    </nav>
  )
}

export default Navbar

