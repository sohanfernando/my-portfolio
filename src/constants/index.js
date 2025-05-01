// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import Project0 from "../assets/projects/Project0.png";
import Project1 from "../assets/projects/Project1.png";
import Project2 from "../assets/projects/Project2.png";
import Project3 from "../assets/projects/Project3.png";
import Project4 from "../assets/projects/Project4.png";
import Project5 from "../assets/projects/Project5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java, Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    institution: "SLIIT",
    degree: "BSc(hons) Information Technology",
    year: "2021 - Present",
    description: "Focused on web development, algorithms, and programming languages.",
    technologies: ["JavaScript", "React.js", "Node.js", "MySQL", "Data Structures and Algorithms"],
  },
  {
    institution: "St. Peter's College Colombo 4",
    degree: "Physical Science",
    year: "2006 - 2019",
    description: "Focused on mathematics, physics, and chemistry.",
  }
]


export const EXPERIENCES = [
  {
    year: "2024 Dec - 2025 May",
    role: "Software Engineer Intern",
    company: "ZeroCode Software",
    description: `Contributed to the development of web applications using Java with Spring Boot. Managed databases and implemented data storage solutions using MySQL. Worked closely with Senior Software Engineers to prioritize features and enhancements.`,
    technologies: ["Java", "Spring Boot", "MySQL", "Docker", "Version Control", "UI/UX"],
  },
];

export const PROJECTS = [
  {
    title: "LMS Project using MERN",
    image: Project0,
    description:
      "A Learning Management System (LMS) built with the MERN stack enables users to create, manage, and access courses online. It includes features like user authentication, course enrollment, progress tracking, and file uploads, with MongoDB for data storage, Express.js and Node.js for the backend, and React for the frontend.",
    technologies: ["Node", "React", "Vite", "TailwindCSS", "MongoDB"],
  },

  {
    title: "Hotel Booking Website",
    image: Project5,
    description: "Hotel Booking Website using MERN Stack and using Stripe for Payment Integration",
    technologies: ["MERN Stack", "Stripe"]
  },

  {
    title: "E-Commerce Website for Clothes",
    image: Project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
  },
  
  {
    title: "E-Commerce Website for Phone Cases",
    image: Project3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Next.js", "TailwindCSS", "React", "Typescript", "Node.js"],
  },

  {
    title: "Request Management System",
    image: Project4,
    description: "The Request Management System is a web-based application built using the MERN stack The system supports full CRUD operations and also includes a form for adding new requests.",
    technologies: ["MERN Stack", "Typescript", "MongoDB"],
  },

  {
    title: "Portfolio Website",
    image: Project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Vite", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "214 Modera Street, Colombo, 01500 ",
  phoneNo: "+94 76 797 8321 ",
  email: "sohanfernando7@gmail.com",
};
