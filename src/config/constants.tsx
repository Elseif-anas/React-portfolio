import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceProps, SocialLinksType } from "./types";
export const FEATURED_PROJECTS = [
  {
    title: "LangGraph Model",
    img: "/images/projects/langraph.png",
    summary:
      "A minimal 'hello world' project that demonstrates how to wire LangGraph to Neo4j using a 3-node agent architecture. Perfect as a learning scaffold for building more complex graph-based AI systems.",
    link: "https://github.com/Elseif-anas/LangGraph_model.git",
    github: "https://github.com/Elseif-anas/LangGraph_model.git",
    tech: ["LangGraph", "Neo4j", "Docker", "GPT-4o-mini"],
  },
  {
    title: "OPTP",
    img: "/images/projects/optp.jpg",
    summary:
      "OPTP is a cross-platform mobile application designed to deliver a seamless, location-aware user experience. The app focuses on performance, scalability, and real-time data handling, with smooth navigation and state management across platforms. It integrates mapping functionality to provide accurate location-based features and is built with a modern, production-ready architecture.",
    link: "https://github.com/Elseif-anas/optp-clone.git",
    github: "https://github.com/Elseif-anas/optp-clone.git",
    tech: ["React Native", "Context API", "Supabase", "Google Maps API"],
  },
  {
    title: "PhysioIntel",
    img: "/images/projects/physionintel.png",
    summary:
      "PhysioIntel is my FYP project AI-assisted medical application focused on physiotherapy and orthopedic care. The platform enables secure patient data collection, structured medical history management, and intelligent summarization to support doctors in clinical decision-making. It is designed for scalability, data security, and real-world healthcare workflows.",
    link: "https://github.com/savagevampire2003/PhysioIntel-FYP-I.git",
    github: "https://github.com/savagevampire2003/PhysioIntel-FYP-I.git",
    tech: ["React", "FastAPI", "Supabase", "AI/LLM Integration"],
  },
  {
    title: "RentPerth",
    img: "/images/projects/rentperth.png",
    summary:
      "RentPerth is a client project delivering a high-performance rental listing platform optimized for search visibility, speed, and lead conversion. The website was built with fully optimized SEO, fast load times, and integrated analytics to track user interactions and conversions, providing measurable business value.",
    link: "https://rent-perth.com/",
    github: "https://github.com/Elseif-anas/perth-student-pad.git",
    tech: ["JavaScript", "Backend API", "Google Tag Manager", "Analytics", "SEO"],
  },
];
export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "Certifications", link: "#certifications" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
];
export const SOCIAL_LINKS: SocialLinksType[] = [
  { href: "https://github.com/Elseif-anas", Icon: <IoLogoGithub size={25} /> },
  { href: "https://linkedin.com/in/anas-fida-3958131b1", Icon: <BsLinkedin size={25} color="#0a66c2" /> },
];
export const SKILLS = [
  {
    img: "/images/skills/nextjs.png",
    title: "NextJS"
  },
  {
    img: "/images/skills/react.png",
    title: "React JS"
  },
  {
    img: "/images/skills/typescript.png",
    title: "Typescript"
  },
  {
    img: "/images/skills/javascript.png",
    title: "Javascript"
  },
  {
    img: "/images/skills/python.png",
    title: "Python"
  },
  {
    img: "/images/skills/fastApi.png",
    title: "FastAPI"
  },
  {
    img: "/images/skills/django.png",
    title: "Django"
  },
  {
    img: "/images/skills/node.png",
    title: "Node JS"
  },
  {
    img: "/images/skills/langgraph.png",
    title: "LangGraph"
  },
  {
    img: "/images/skills/postgresql.png",
    title: "PostgreSQL"
  },
  {
    img: "/images/skills/mongodb.png",
    title: "Mongo DB"
  },
  {
    img: "/images/skills/sql.png",
    title: "SQL"
  },
  {
    img: "/images/skills/tailwind.png",
    title: "Tailwind"
  },
  {
    img: "/images/skills/css.png",
    title: "CSS"
  },
  {
    img: "/images/skills/sass.png",
    title: "SCSS"
  },
  {
    img: "/images/skills/html.png",
    title: "HTML"
  },
  {
    img: "/images/skills/git.png",
    title: "GitHub"
  },
  {
    img: "/images/skills/linux.png",
    title: "Linux"
  },
  {
    img: "/images/skills/cpp.png",
    title: "CPP"
  },
]
export const EDUCATION_DATA = [
  {
    title: "Bachelor of Science In Computer Science",
    date: "2022-2026",
    location: "COMSATS University Islamabad(CUI), Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Computer Vision, Object Oriented Programming, Data Structures, Machine Learning and AI.",
  },
  {
    title: "Intermediate",
    date: "2019-2021",
    location: "Punjab Group of Colleges(PGC), Lahore",
    icon: React.createElement(LuGraduationCap),
    info: "Completed pre-Medical with focus on Biology, Physics, and Chemistry.",
  },
]
export const CERTIFICATIONS_DATA = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    image: "/images/skills/ccna.png",
    verifyLink: "https://www.credly.com/badges/e478d740-af44-451f-9da7-9813cc53b2ea",
    description: "Comprehensive certification covering networking fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability."
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    image: "/images/skills/ibm.png",
    verifyLink: "https://www.credly.com/badges/63695438-cc9e-46eb-a6d4-ea34323547e7/linked_in_profile",
    description: "Hands-on certification demonstrating proficiency in Docker containerization, including building, deploying, and managing containerized applications."
  },
]
export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    id: 'Freelance',
    title: "Freelance Web Developer",
    company: "Freelancer & Upwork",
    label: 'Freelance',
    period: "Jan 2025 - Present",
    duration: "1 Year",
    details: [
      "Developed and delivered custom web applications for clients worldwide using Next.js, React, and the MERN stack.",
      "Collaborated with clients to understand requirements, provide technical solutions, and ensure timely project delivery.",
      "Built responsive, scalable full-stack applications with modern technologies including FastAPI, MongoDB, and Tailwind CSS.",
      "Maintained high client satisfaction through effective communication and quality code delivery."
    ]
  },
];
