import { ABOUT_ME } from "../constants"
import profilepic from "../assets/profilepic.png"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { FaCode, FaRocket, FaLightbulb, FaStar } from "react-icons/fa"

const Particle = ({ x, y, size, duration, delay }) => {
  return (
    <motion.div
      className="particle"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -100],
        opacity: [0.6, 0],
        scale: [1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}

const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="float"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}



function Hero() {
  const [particles, setParticles] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
      setParticles(newParticles)
    }

    generateParticles()
    const interval = setInterval(generateParticles, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 1.2,
        delay: 0.5,
        ease: [0.6, 0.05, 0.01, 0.99]
      },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20" ref={containerRef}>
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}

      {/* Mouse Trail Effect */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.3, 0],
        }}
        transition={{ duration: 0.5 }}
      />

             {/* Main Content */}
       <motion.div
         className="container mx-auto relative z-10"
         style={{ y: springY, opacity: springOpacity, scale }}
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
                     {/* Left Content */}
           <motion.div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left" variants={itemVariants}>

            {/* Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Anas</span>
              <br />
              <span className="text-white">Fida</span>
            </motion.h1>

                         {/* Title with Typewriter Effect */}
             <motion.div variants={itemVariants}>
               <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-neutral-300 mb-4">
                 I'm a{" "}
                 <span className="gradient-text font-semibold">
                   Full Stack Developer
                 </span>
               </h2>
             </motion.div>

             {/* Description */}
             <motion.p 
               className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
               variants={itemVariants}
             >
               {ABOUT_ME}
             </motion.p>

                         {/* CTA Buttons */}
             <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" variants={itemVariants}>
                               <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Scroll to projects section
                    const projectsSection = document.getElementById('projects')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }}
                >
                  View My Work
                </motion.button>
               <motion.button
                 className="px-6 py-3 rounded-lg border border-neutral-600 text-neutral-300 hover:border-neutral-400 transition-all duration-300 hover-lift"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => {
                   try {
                                           // Try different resume file formats
                      const resumeFiles = [
                        '/Anas_Fida_Resume.pdf', // Your actual file
                        '/resume.pdf',
                        '/Resume.pdf', 
                        '/CV.pdf',
                        '/cv.pdf',
                        '/resume.docx',
                        '/Resume.docx'
                      ]
                     
                     // Check if any of the files exist
                     const checkFile = async (url) => {
                       try {
                         const response = await fetch(url, { method: 'HEAD' })
                         return response.ok
                       } catch {
                         return false
                       }
                     }
                     
                     // Try to find an existing resume file
                     const findResumeFile = async () => {
                       for (const file of resumeFiles) {
                         if (await checkFile(file)) {
                           return file
                         }
                       }
                       return null
                     }
                     
                     findResumeFile().then(filePath => {
                       if (filePath) {
                                                   // Create a link element for download
                          const link = document.createElement('a')
                          link.href = filePath
                          link.download = 'Anas_Fida_Resume.pdf' // This matches your file name
                          link.target = '_blank'
                         
                         // Append to body, click, and remove
                         document.body.appendChild(link)
                         link.click()
                         document.body.removeChild(link)
                       } else {
                         // If no resume file found, show alert
                         alert('Resume file not found. Please add your resume to the public folder.')
                       }
                     })
                   } catch (error) {
                     console.error('Error downloading resume:', error)
                     alert('Error downloading resume. Please try again.')
                   }
                 }}
               >
                 Download CV
               </motion.button>
             </motion.div>

             
          </motion.div>

                     {/* Right Content - Profile Image */}
           <motion.div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0" variants={imageVariants}>
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  filter: "blur(40px)",
                }}
                variants={glowVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Profile Image Container */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-4 border-neutral-800 hover:border-neutral-600 transition-all duration-500"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)"
                }}
              >
                                 <img 
                   className="w-64 h-64 sm:w-80 sm:h-80 object-cover brightness-110 contrast-110"
                   src={profilepic || "/placeholder.svg"} 
                   alt="Anas Fida" 
                 />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

                             {/* Professional Icons Around Image */}
               <motion.div
                 className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               >
                 <FaCode className="text-purple-400 text-sm sm:text-lg" />
               </motion.div>
               
               <motion.div
                 className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center"
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <FaRocket className="text-pink-400 text-sm sm:text-lg" />
               </motion.div>

               <motion.div
                 className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center"
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               >
                 <FaLightbulb className="text-blue-400 text-sm sm:text-lg" />
               </motion.div>

               <motion.div
                 className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               >
                 <FaStar className="text-indigo-400 text-sm sm:text-lg" />
               </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

