import optp from "../assets/optp.jpg";
import website from "../assets/website.png";
export const ABOUT_ME = `
Hi, I'm a passionate web developer with expertise in Next.js and the MERN stack. I've worked on multiple small-scale projects with my university fellows, building full-stack web applications and even cloning a mobile application. Beyond web development, I have a strong interest in Generative AI and Machine Learning. Currently, I'm working on my final year project, where Python and Django have become my go-to technologies. I love solving complex problems, optimizing performance, and staying up-to-date with the latest tech trends.Excited about innovation, open-source contributions, and building impactful digital experiences!`;

export const MY_INFORMATION = `
I'm a student at COMSATS University a well known IT institute in Pakistan, and computers have always been my field of interest. From coding to gaming, technology has been a core part of my journey. I've actively participated in e-sports, and in my free time, I enjoy UI/UX design—not just as a hobby, but as a valuable skill in my toolkit. Designing intuitive and engaging user experiences is something I truly enjoy. Now, I'm eager to dive into the market with all my skills, ready to collaborate and build something amazing together! Besides tech, I have a creative side too—I do photography as a hobby, capturing moments and stories through my lens. Since, its the age of AI, I'm also exploring the field of Generative AI, I'm a big fan of open-source and always looking for opportunities to contribute to the community. I'm a quick learner, a team player, and a problem solver, always ready to take on new challenges!`;
export const EXPERIENCES = [
    {
      year: "2022 - present", // Replace with actual year
      role: "Student",
      institute: "COMSATS University",
      description: `As a Computer Science student at COMSATS University, I have honed my skills in modern web development, 
                    backend engineering, and UI/UX design. Throughout my academic journey, I collaborated on multiple full-stack 
                    projects, participated in hackathons, and explored cutting-edge technologies such as Generative AI and Machine Learning. 
                    My time at the university has been marked by a continuous pursuit of knowledge, problem-solving, and innovation.`,
      technologies: [
        "React.js",
        "Next.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "HTML",
        "CSS",
        "GitHub",
        "Git",
        "Python",
        "Django"
      ],
    }
  ];
  export const PROJECTS = [
    {
      name: "Optp - Food Delivery App Clone",
    picture: optp, // Replace with actual image path
    description: `Optp is a scalable and fully functional food delivery app clone built using React Native. 
              It integrates Supabase as the backend, utilizes TypeScript for maintainability, and Node.js for 
              backend logic. The app supports real-time location tracking to enhance food delivery services, 
              ensuring efficiency and reliability.`,
    technologies: ["React Native", "Supabase", "TypeScript", "Node.js"],
    },
    {
    name: "Personal Portfolio",
    picture: website, // Replace with actual image path
      description: `A sleek, professional portfolio website built from scratch using only Tailwind CSS, HTML, and JavaScript. 
                    It showcases my projects, skills, and experiences in a modern, responsive, and visually appealing manner. 
                    The design is minimalistic yet elegant, focusing on user experience and accessibility.`,
      technologies: ["Tailwind CSS", "HTML", "JavaScript"],
    }
  ];
  export const CONTACT = {
    address: "Lahore, Pakistan",
    phone: "+92 325 8040407", // Replace with actual phone number
    email: "anasfida00@gmail.com"
  };
  