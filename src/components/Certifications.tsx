"use client";
import { CERTIFICATIONS_DATA } from "@/config/constants";
import { AnimatedText } from "./AnimatedText";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export const Certifications = () => {
    return (
        <div id="certifications" className="mt-28">
            <AnimatedText
                text="Certifications"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <div className="w-full mx-auto grid md:grid-cols-2 gap-8">
                {CERTIFICATIONS_DATA.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <Link
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative p-6 rounded-xl border-2 border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark hover:bg-light/80 dark:hover:bg-dark/80 shadow-md hover:shadow-xl transition-all duration-300">
                                {/* Header with Logo and Title */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-dark/10 dark:border-light/10 bg-light dark:bg-dark p-2">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-dark/70 dark:text-light/70 mt-1">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                {cert.description && (
                                    <p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed mb-4">
                                        {cert.description}
                                    </p>
                                )}

                                {/* Verify Link */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-primaryDark group-hover:underline">
                                    <span>Verify Credential</span>
                                    <LuExternalLink size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
