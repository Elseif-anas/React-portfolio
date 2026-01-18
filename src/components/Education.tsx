"use client";
import { AnimatedText } from "./AnimatedText";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";

export const Education = () => {
    const educationData = [
        {
            title: "Bachelor of Science In Computer Science",
            date: "2022-2026",
            location: "COMSATS University Islamabad(CUI), Lahore Campus",
            info: "Relevant Courses included Computer Vision, Object Oriented Programming, Data Structures, Machine Learning and AI.",
        },
        {
            title: "Intermediate",
            date: "2019-2021",
            location: "Punjab Group of Colleges(PGC), Lahore",
            info: "Completed pre-Medical with focus on Biology, Physics, and Chemistry.",
        },
    ];

    return (
        <div id="education" className="mt-28">
            <AnimatedText
                text="Education"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <div className="w-full mx-auto grid md:grid-cols-2 gap-8">
                {educationData.map((education, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primaryDark/20 dark:from-primary/30 dark:to-primaryDark/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                        
                        <div className="relative p-8 rounded-2xl border-2 border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark shadow-xl hover:shadow-2xl transition-all duration-500 h-full backdrop-blur-sm">
                            {/* Icon with animated background */}
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-primaryDark dark:from-primaryDark dark:to-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <LuGraduationCap className="text-light" size={32} />
                            </div>

                            {/* Date Badge */}
                            <div className="absolute top-6 right-6">
                                <span className="px-4 py-2 text-sm font-bold rounded-full bg-dark dark:bg-light text-light dark:text-dark shadow-md group-hover:scale-105 transition-transform duration-300 inline-block">
                                    {education.date}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-light leading-tight group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                                    {education.title}
                                </h3>

                                <div className="flex items-start gap-2">
                                    <svg 
                                        className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-primaryDark"
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                        />
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                        />
                                    </svg>
                                    <p className="text-base md:text-lg font-semibold text-dark/80 dark:text-light/80">
                                        {education.location}
                                    </p>
                                </div>

                                {education.info && (
                                    <div className="pt-4 border-t border-dark/10 dark:border-light/10">
                                        <p className="text-sm md:text-base text-dark/70 dark:text-light/70 leading-relaxed">
                                            {education.info}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Decorative corner elements */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent dark:from-primaryDark/10 rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
