import React from 'react'
import { ABOUT_ME } from '../constants'
import profilepic from '../assets/profilepic.png'
import motion from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

function Hero() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            Anas Fida
                        </motion.h1>
                        <motion.span
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p className='my-2 max-w-xl py-6 font-light tracking-tight'>{ABOUT_ME}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="brightness-[0.8]" src={profilepic} alt="Anas Fida" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero