import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  codieshub, 
  luxora,
  luna,
  mysql,
  express,
  // aws,
  // mui,
  // gsap,
  // framer,
  // figma,
  // threejs,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind, 
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "My CV",
    href: "/My_CV.pdf",
    download: true, 
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prashant proved me wrong.",
    name: "Prashant Kumar",
    designation: "Ecommerce",
    company: "Motor-Guru",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Prashant does.",
    name: "Shivam Rawat",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Prashant optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shriyansh Bansal",
    designation: "CTO",
    company: "Bansal Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Luxora-Ecommerce",
    description:
      "Luxora-Ecommerce is a web-based platform that allows users to search, explore, and purchase a wide range of furniture products from various providers, offering a luxurious and classy shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: luxora,
    source_code_link: "https://github.com/",
  },
  {
    name: "Codies-Hub",
    description:
      "Codies-Hub is a learning-focused platform offering curated resources like playlists, video lectures, and notes on various programming languages and topics. Designed for beginners and enthusiasts for up-skilling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: codieshub,
    source_code_link: "https://github.com/",
  },
  {
    name: "Luna Cosmetics",
    description:
      "Luna Cosmetics is an e-commerce platform offering a premium, user-friendly shopping experience. Luna will feature curated beauty products, secure checkout, smart filters, and a stunning interface.Luna aims beauty like moon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: luna,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
export { codieshub, luxora, luna };
