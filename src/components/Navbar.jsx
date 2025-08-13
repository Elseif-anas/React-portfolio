import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

const IconButton = ({ icon: Icon, href, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lg hover-lift transition-all duration-300"
    whileHover={{
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <Icon />
  </motion.a>
)

const NavLink = ({ href, children, isActive, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-purple-400' : 'text-neutral-300 hover:text-white'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    {isActive && (
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        layoutId="activeTab"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.a>
)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'technologies', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#technologies', label: 'Skills', id: 'technologies' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 lg:px-8"
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.button
          onClick={scrollToTop}
          className="text-xl font-bold gradient-text hover-lift transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Anas Fida
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.id}
                href={link.href}
                isActive={activeSection === link.id}
                onClick={() => scrollToSection(link.id)}
                delay={index * 0.1}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 ml-8">
            <IconButton icon={FaGithub} href="https://github.com/elseif-anas" delay={0.6} />
            <IconButton icon={FaLinkedin} href="https://linkedin.com/in/anas-fida-3958131b1" delay={0.7} />
            <IconButton icon={FaWhatsapp} href="https://wa.me/+923258040407" delay={0.8} />
            <IconButton icon={FaEnvelope} href="mailto:anasfida00@gmail.com" delay={0.9} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden w-10 h-10 rounded-lg glass flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 z-40 pt-20"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "100vh" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <div className="glass h-full">
          <div className="flex flex-col items-center justify-center space-y-8 py-20">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-medium transition-all duration-300 ${
                  activeSection === link.id ? 'text-purple-400' : 'text-neutral-300 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
            
            {/* Mobile Social Icons */}
            <motion.div
              className="flex items-center space-x-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <IconButton icon={FaGithub} href="https://github.com/elseif-anas" />
              <IconButton icon={FaLinkedin} href="https://linkedin.com/in/anas-fida-3958131b1" />
              <IconButton icon={FaWhatsapp} href="https://wa.me/+923258040407" />
              <IconButton icon={FaEnvelope} href="mailto:anasfida00@gmail.com" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          scaleX: useTransform(scrollY, [0, Math.max(document.body.scrollHeight - window.innerHeight, 1)], [0, 1]),
          transformOrigin: "0%",
        }}
      />
    </>
  )
}

export default Navbar

