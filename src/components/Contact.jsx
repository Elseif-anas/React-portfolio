import { useRef, useState } from "react"
import { CONTACT } from "../constants"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaCheck } from "react-icons/fa"

const ContactCard = ({ icon: Icon, title, value, href, delay }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="glass p-6 rounded-xl hover-lift cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white text-xl" />
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {href ? (
        <a 
          href={href} 
          className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-neutral-400">{value}</p>
      )}
    </motion.div>
  )
}

const SocialButton = ({ icon: Icon, href, color, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-14 h-14 rounded-full glass flex items-center justify-center text-xl hover-lift glow-${color} transition-all duration-300`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Icon />
    </motion.a>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    // Simulate form submission for now
    // You can replace this with actual EmailJS setup later
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, just log the form data
      console.log('Form submitted:', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'anasfida00@gmail.com'
      })
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
    } catch (error) {
      console.error('Form submission failed:', error)
      setError('Failed to send message. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            placeholder="Your Name"
          />
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))",
              opacity: 0,
            }}
            animate={{ opacity: formData.name ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            placeholder="Your Email"
          />
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))",
              opacity: 0,
            }}
            animate={{ opacity: formData.email ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
          placeholder="Subject"
        />
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))",
            opacity: 0,
          }}
          animate={{ opacity: formData.subject ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
          placeholder="Your Message"
        />
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))",
            opacity: 0,
          }}
          animate={{ opacity: formData.message ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {error && (
        <motion.div
          className="text-red-400 text-sm text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full btn-primary text-lg py-4 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Sending Message...
          </motion.div>
        ) : isSubmitted ? (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <FaCheck className="text-green-400" />
            Message Sent Successfully!
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaPaperPlane />
            Send Message
          </motion.div>
        )}
      </motion.button>
    </motion.form>
  )
}

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const contactCards = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: CONTACT.address
    }
  ]

  const socialLinks = [
    { icon: FaGithub, href: "#", color: "primary" },
    { icon: FaLinkedin, href: "#", color: "secondary" },
    { icon: FaTwitter, href: "#", color: "accent" },
    { icon: FaInstagram, href: "#", color: "primary" }
  ]

  return (
    <div className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
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
             Get in <span className="gradient-text">Touch</span>
           </motion.h2>
           <motion.p 
             className="text-xl text-neutral-400 max-w-2xl mx-auto mb-6"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             Ready to start a project or just want to chat? I'd love to hear from you!
           </motion.p>
           <motion.div 
             className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"
             initial={{ width: 0 }}
             whileInView={{ width: 96 }}
             transition={{ duration: 1, delay: 0.3 }}
           />
         </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactCards.map((card, index) => (
            <ContactCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              value={card.value}
              href={card.href}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="glass p-8 rounded-2xl border border-neutral-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow me on social media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <SocialButton
                    key={index}
                    icon={social.icon}
                    href={social.href}
                    color={social.color}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { number: "< 2h", label: "Response Time" },
                { number: "24/7", label: "Availability" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-4 rounded-xl text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

