import { useRef, useState } from "react"
import { PROJECTS } from "../constants"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaEye, FaCode, FaRocket } from "react-icons/fa"

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl glass border border-neutral-700/50"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
          animate={{ opacity: isHovered ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.img
          src={project.picture || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: isHovered ? 1.05 : 1.1 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Overlay with Project Info */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-neutral-300 text-sm line-clamp-2">{project.description}</p>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye className="text-sm" />
                Live Demo
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-sm" />
                Code
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {index === 0 ? "🔥 Featured" : "✨ New"}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {project.name}
          </h3>
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="#"
              className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </motion.div>
        </div>

        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-medium text-neutral-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FaCode className="text-purple-400" />
              {Math.floor(Math.random() * 5000) + 1000} lines
            </span>
            <span className="flex items-center gap-1">
              <FaRocket className="text-pink-400" />
              {Math.floor(Math.random() * 50) + 10} commits
            </span>
          </div>
          <span className="text-purple-400 font-medium">
            {["React", "Node.js", "Python", "TypeScript"][index % 4]}
          </span>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))",
          opacity: 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const ProjectFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ["All", "Web Apps", "Mobile", "Full Stack", "UI/UX"]
  
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter, index) => (
        <motion.button
          key={filter}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === filter
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"
          }`}
          onClick={() => setActiveFilter(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {filter}
        </motion.button>
      ))}
    </motion.div>
  )
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("All")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === "All") return true
    // You can add filtering logic based on project categories
    return true
  })

  return (
    <div className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ y, opacity }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-400 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my latest work and creative solutions that showcase my passion for innovative development
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "25+", label: "Projects Delivered", icon: "🚀" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "50K+", label: "Lines of Code", icon: "💻" },
            { number: "24/7", label: "Support Available", icon: "🛠️" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass p-6 rounded-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <motion.div
                className="text-2xl lg:text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects

