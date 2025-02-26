import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project1.png";
import PROJECT_IMG_2 from "../assets/images/project2.png";
import PROJECT_IMG_3 from "../assets/images/project3.png";
import PROJECT_IMG_4 from "../assets/images/project4.png";
import PROJECT_IMG_5 from "../assets/images/project5.png";
import PROJECT_IMG_6 from "../assets/images/project6.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "2", label: `Years of \nExperience` },
  { id: "02", count: "6", label: `Certifications \nEarned` },
  { id: "03", count: "6", label: `Projects \nCompleted` },
  
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management, hooks, and integrating third-party libraries for enhanced functionality.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
      "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization. Skilled at creating clean and maintainable markup for modern web applications.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SCSS. Experienced in implementing animations, transitions, and custom designs with precision.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 88,
    type: "frontend",
    description:
      "Skilled in writing clean, modular, and efficient JavaScript code to create interactive web functionalities. Well-versed in ES6+ features, DOM manipulation, and asynchronous programming",
  },

  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 95,
    type: "backend",
    description:
      "Skilled in building scalable and high-performance server-side applications using Node.js. Experienced in handling asynchronous operations, event-driven programming, and optimizing API performance.",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 98,
    type: "backend",
    description:
      "Proficient in developing RESTful APIs and middleware using Express.js. Focused on creating secure, efficient, and maintainable backend architectures for web applications.",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 75,
    type: "backend",
    description:
      "Experienced in designing and managing NoSQL databases using MongoDB. Skilled in schema design, aggregation pipelines, and optimizing queries for performance and scalability.",
  },
  {
    id: "08",
    icon: SiMysql,
    skill: "SQL",
    progress: 90,
    type: "backend",
    description:
      "Proficient in working with relational databases using SQL. Experienced in writing complex queries, optimizing database performance, and ensuring data integrity through normalization and indexing.",
  },

  {
    id: "09",
    icon: FaGitAlt,
    skill: "Git & GitHub",
    progress: 75,
    type: "tools",
    description:
      "Experienced in version control and collaborative development using Git and GitHub. Proficient in branching strategies, pull requests, and maintaining clean commit histories.",
  },
  {
    id: "10",
    icon: VscVscode,
    skill: "Visual Studio Code",
    progress: 95,
    type: "tools",
    description:
      "Well-versed in using Visual Studio Code with custom extensions and debugging tools for a smooth development workflow. Optimized for productivity with shortcuts and automation.",
  },
  {
    id: "11",
    icon: SiWebpack,
    skill: "Webpack",
    progress: 70,
    type: "tools",
    description:
      "Skilled in optimizing frontend performance with Webpack, including asset bundling and code splitting. Ensures efficient loading times and modular code structures.",
  },

  {
    id: "13",
    icon: VscCommentUnresolved,
    skill: "Problem-Solving",
    progress: 85,
    type: "soft-skills",
    description:
      "Strong analytical skills to identify and resolve technical challenges efficiently. Approaches problems with a structured and logical mindset to deliver effective solutions.",
  },
  {
    id: "14",
    icon: MdGroups3,
    skill: "Collaboration",
    progress: 70,
    type: "soft-skills",
    description:
      "Experienced in working within teams, contributing ideas, and integrating feedback. Effective communication ensures smooth project execution and shared success.",
  },
  {
    id: "15",
    icon: VscTerminalPowershell,
    skill: "Attention to Detail",
    progress: 83,
    type: "soft-skills",
    description:
      "Meticulous in writing clean, maintainable code and ensuring UI/UX consistency. Focused on delivering high-quality work with precision and thoroughness.",
  },
];

export const ABOUT_ME = {
  content: `Hi, I'm Senuth De Silva,Ai/Ml Engineer,Software Engineer/Full Stack Developer passionate about building engaging web applications and solving complex problems with code. I am a university student in Computer Science from Informatics information Technology. Over the past 3 years, I've gained valuable experience in SE,AI,ML, working on projects.
    
    \nOutside of coding, I enjoy traveling to new places, capturing moments through photography, and playing guitar. I'm also an avid reader and love exploring new cuisines.


I'm proficient in a variety of technologies including python,java,Machine learning,Aws,React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs. In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.`,
  socialLinks: [
    
    { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "www.linkedin.com/in/senuth-de-silva-8aa590295" },
    
  ],

  email: "senuthdesilva43@gmail.com",
  phone: "0719808282",
  
};

export const PROJECTS = [
  {
    id: 1,
    title:
      "FrontEnd E-Commerce Website Using | React JS, Node JS,Tailwind Css",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind css", "Node.js"],
  },
  {
    id: 2,
    title:
      " Fullstcak Mern application | Lms programming learning Website",
    image: PROJECT_IMG_2,
    tags: ["React", "Node js", "Tailwind CSS", "MongoDB", "express"],
  },
  {
    id: 3,
    title:
      "Login-and-registration | FRONTEND AND BACKEND ",
    image: PROJECT_IMG_3,
    tags: ["PHP", "xampp", "Sql", "html", "css"],
  },
  {
    id: 4,
    title:
      "Password Cretor",
    image: PROJECT_IMG_4,
    tags: ["js", "html", "css"],
  },
  {
    id: 5,
    title:
      "Cat-and-dog-recognition",
    image: PROJECT_IMG_5,
    tags: ["Machine Learning"],
  },
  {
    id: 6,
    title: "object-Image-Recognision",
    image: PROJECT_IMG_6,
    tags: ["Machine Learning"],
  },
];
