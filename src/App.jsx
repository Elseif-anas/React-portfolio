import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { motion } from "framer-motion"

const MovingDot = ({ index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  })

  useEffect(() => {
    const moveInterval = setInterval(
      () => {
        setPosition({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        })
      },
      5000 + index * 1000,
    ) // Stagger the movement of each dot

    return () => clearInterval(moveInterval)
  }, [index])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-neutral-300 rounded-full"
      animate={position}
      transition={{ duration: 5, ease: "linear" }}
      style={{ opacity: 0.5 }}
    />
  )
}

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {[...Array(20)].map((_, i) => (
            <MovingDot key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 pt-16">
        {" "}
        {/* Added pt-16 for navbar space */}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

