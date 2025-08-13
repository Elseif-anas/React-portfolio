import aboutImg from "../assets/aboutImg.png"
import { MY_INFORMATION } from "../constants"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { FaCode, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa"

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <motion.div className="mb-4 sm:mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm font-medium text-neutral-300">{skill}</span>
        <span className="text-xs text-neutral-500">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-800 rounded-full h-1.5 sm:h-2">
        <motion.div
          className={`h-1.5 sm:h-2 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

const InfoCard = ({ icon: Icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="glass p-4 sm:p-6 rounded-xl hover-lift cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 sm:mb-4"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white text-lg sm:text-xl" />
      </motion.div>
      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { x: -100, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      },
    },
  }

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99]
      },
    },
  }

  const skills = [
    { name: "React/Next.js", percentage: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Node.js/Express", percentage: 90, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { name: "TypeScript", percentage: 85, color: "bg-gradient-to-r from-blue-600 to-purple-600" },
    { name: "Python/Django", percentage: 80, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { name: "AWS/Cloud", percentage: 75, color: "bg-gradient-to-r from-orange-500 to-red-500" },
  ]

  const infoCards = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      description: "Creative approach to complex technical challenges with innovative solutions."
    },
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "Efficient development process ensuring timely delivery without compromising quality."
    },
    {
      icon: FaHeart,
      title: "User Focused",
      description: "Creating experiences that users love with intuitive and accessible interfaces."
    }
  ]

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 {/* Section Header */}
         <motion.div
           className="text-center mb-8 sm:mb-12 lg:mb-16"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <motion.h2 
             className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
             style={{ y, opacity }}
           >
             About <span className="gradient-text">Me</span>
           </motion.h2>
           <motion.div 
             className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6 sm:mb-8"
             initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
             transition={{ duration: 1, delay: 0.3 }}
           />
         </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Image */}
          <motion.div variants={imageVariants} className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  filter: "blur(30px)",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image Container */}
              <motion.div
                className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-700/50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  className="w-full h-auto object-cover brightness-110 contrast-110"
                  src={aboutImg || "/placeholder.svg"} 
                  alt="About Me" 
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={textVariants} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4 sm:mb-6">
                {MY_INFORMATION}
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Technical Skills</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {infoCards.map((card, index) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-4 sm:p-6 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About

