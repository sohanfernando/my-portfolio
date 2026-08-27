import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaNodeJs } from "react-icons/fa";
import {
  SiAnthropic, SiAngular, SiBootstrap, SiC, SiCplusplus, SiCsharp, SiDart, SiDotnet,
  SiExpress, SiFastapi, SiFlutter, SiJavascript, SiKotlin, SiMongodb, SiMui, SiMysql,
  SiNextdotjs, SiOpenai, SiOracle, SiPostgresql, SiPython, SiSpringboot, SiTailwindcss,
  SiTypescript, SiVuedotjs,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

import Project0 from "../assets/projects/Project0.webp";
import Project1 from "../assets/projects/Project1.webp";
import Project2 from "../assets/projects/Project2.webp";
import Project3 from "../assets/projects/Project3.webp";
import Project4 from "../assets/projects/Project4.webp";

export const PROFILE = {
  firstName: "Sohan",
  lastName: "Fernando",
  role: "Software Engineer",
  location: "Colombo, Sri Lanka",
  availability: "Available for work",
  resumeUrl: "https://drive.google.com/file/d/1MZAIPhSzO8K-tu27cT6yRWPNKxEz_Ae6/view?usp=sharing",
  githubProfile: "https://github.com/sohanfernando",
};

export const HERO_CONTENT = `I build robust, scalable web applications end to end — React and Next.js on the front, Java, Node.js, MySQL and MongoDB behind them. Two years of hands-on experience turning ideas into software that ships.`;

export const ABOUT_TEXT = `I build full-stack web and mobile applications end to end — Node.js, React, Next.js and Angular on top of REST APIs and relational databases, alongside Java and Spring Boot on the backend. I hold a BSc (Hons) in Information Technology from SLIIT, and currently work with a Netherlands-based team, taking ownership of feature delivery, code quality and peer reviews across client and in-house projects. I'm curious and collaborative, and I like picking up new frameworks and tools as I go. Outside of coding, I enjoy staying active and contributing to open-source projects.`;

export const ABOUT_STATS = [
  { value: "2+", label: "Years experience" },
  { value: "5", label: "Projects shipped" },
  { value: "Colombo", label: "Based in" },
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/sohan-fernando" },
  { icon: FaGithub, label: "GitHub", url: "https://github.com/sohanfernando" },
  { icon: FaFacebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=100034818584224&mibextid=LQQJ4d" },
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/_sohanfernando_" },
];

// Mirrors the Technical Skills section of the CV. `icon` is optional — a few
// entries have no brand icon in this version of react-icons, and the name
// alone carries the row.
export const TECHNOLOGIES = [
  { icon: DiJava, name: "Java", category: "Programming Languages" },
  { icon: SiPython, name: "Python", category: "Programming Languages" },
  { icon: SiJavascript, name: "JavaScript", category: "Programming Languages" },
  { icon: SiTypescript, name: "TypeScript", category: "Programming Languages" },
  { icon: SiCsharp, name: "C#", category: "Programming Languages" },
  { icon: SiCplusplus, name: "C++", category: "Programming Languages" },
  { icon: SiKotlin, name: "Kotlin", category: "Programming Languages" },
  { icon: SiDart, name: "Dart", category: "Programming Languages" },
  { icon: SiC, name: "C", category: "Programming Languages" },

  { icon: RiReactjsLine, name: "React.js", category: "Frontend" },
  { icon: SiNextdotjs, name: "Next.js", category: "Frontend" },
  { icon: SiAngular, name: "Angular", category: "Frontend" },
  { icon: SiVuedotjs, name: "Vue.js", category: "Frontend" },
  { icon: SiTailwindcss, name: "Tailwind CSS", category: "Frontend" },
  { icon: SiMui, name: "Material UI", category: "Frontend" },
  { icon: SiBootstrap, name: "Bootstrap", category: "Frontend" },

  { icon: FaNodeJs, name: "Node.js", category: "Backend" },
  { icon: SiExpress, name: "Express.js", category: "Backend" },
  { icon: SiSpringboot, name: "Spring Boot", category: "Backend" },
  { icon: SiFastapi, name: "FastAPI", category: "Backend" },
  { icon: SiDotnet, name: "ASP.NET Core", category: "Backend" },

  { icon: SiFlutter, name: "Flutter", category: "Mobile Development" },
  { icon: TbBrandReactNative, name: "React Native", category: "Mobile Development" },

  { icon: SiMysql, name: "MySQL", category: "Databases" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Databases" },
  { icon: SiMongodb, name: "MongoDB", category: "Databases" },
  { icon: SiOracle, name: "Oracle", category: "Databases" },

  { icon: SiAnthropic, name: "Claude Code", category: "Tools" },
  { name: "Antigravity", category: "Tools" },
  { icon: SiOpenai, name: "Codex", category: "Tools" },
  { name: "Cursor", category: "Tools" },
];

// Order in which technology categories are rendered.
export const TECH_CATEGORIES = [
  "Programming Languages",
  "Frontend",
  "Backend",
  "Mobile Development",
  "Databases",
  "Tools",
];

export const EDUCATION = [
  {
    institution: "SLIIT",
    degree: "B.Sc (Hons) Information Technology",
    year: "2021 — 2026",
    description: "Focused on programming languages, algorithms, web development and AI.",
    technologies: ["JavaScript", "React.js", "Node.js", "MySQL", "Data Structures and Algorithms"],
  },
  {
    institution: "St. Peter's College Colombo 4",
    degree: "Physical Science",
    year: "2006 — 2019",
    description: "Focused on mathematics, physics, and chemistry.",
    technologies: [],
  },
];

export const EXPERIENCES = [
  {
    year: "2026 May — 2026 Jun",
    role: "Junior Software Engineer",
    company: "Acendae, Netherlands (Remote)",
    description: `Promoted to full-time Junior Software Engineer after completing the internship, taking increased ownership of feature delivery, code quality and peer code reviews across client and in-house projects.`,
    technologies: [],
  },
  {
    year: "2025 Sep — 2026 Apr",
    role: "Software Engineer Intern",
    company: "Acendae, Netherlands (Remote)",
    description: `Built and maintained full-stack web and mobile applications using Node.js, React, Next.js, Angular and Flutter over MySQL and PostgreSQL databases. Designed database schemas and handled migrations, set up Jenkins and GitHub Actions CI/CD pipelines, and worked directly with clients on requirements gathering.`,
    technologies: ["Node.js", "React", "Next.js", "Angular", "Flutter", "MySQL", "PostgreSQL", "Jenkins", "GitHub Actions"],
  },
  {
    year: "2024 Dec — 2025 May",
    role: "Software Engineer Intern",
    company: "ZeroCode Software",
    description: `Contributed to the development of web applications using Java with Spring Boot. Managed databases and implemented data storage solutions using MySQL. Worked closely with Senior Software Engineers to prioritize features and enhancements.`,
    technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Docker", "Version Control", "UI/UX"],
  },
];

// `year`, `liveUrl` and `githubUrl` are intentionally blank — fill them in and
// the corresponding link renders automatically. Leaving one empty simply hides
// it, so there are never dead controls on the page.
export const PROJECTS = [
  {
    title: "LMS Project using MERN",
    image: Project0,
    year: "",
    description:
      "A Learning Management System built on the MERN stack that lets users create, manage and access courses online. Includes authentication, course enrolment, progress tracking and file uploads, with MongoDB for storage, Express and Node on the backend and React on the front.",
    technologies: ["Node", "React", "Vite", "TailwindCSS", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "E-Commerce Website for Clothes",
    image: Project2,
    year: "",
    description:
      "A fully functional e-commerce storefront with product listings, a shopping cart and user authentication.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "E-Commerce Website for Phone Cases",
    image: Project3,
    year: "",
    description:
      "An online store for custom phone cases, covering product browsing, cart management and checkout, built on a typed Next.js stack.",
    technologies: ["Next.js", "TailwindCSS", "React", "Typescript", "Node.js"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Request Management System",
    image: Project4,
    year: "",
    description:
      "A web application built on the MERN stack for logging and tracking requests, supporting full CRUD operations alongside a form for submitting new requests.",
    technologies: ["MERN Stack", "Typescript", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Portfolio Website",
    image: Project1,
    year: "",
    description:
      "This site — a personal portfolio built as a single-page React application, showcasing projects, stack and contact details.",
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const CONTACT = {
  address: "214 Modera Street, Colombo 15",
  phoneNo: "076 797 8321",
  email: "sohanfernando7@gmail.com",
};
