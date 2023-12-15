import {
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  nextjs,
  framer,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cpp,
  java,
  python,
  // docker,
  sk,
  dps,
  sharda,
  wia1,
  wia2,
  wia3,
  wia4,
  threejs,
  github,
  linkedin,
  instagram,
} from "../assets";

export const navIcons = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/JollyBolt"
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/theishansen/"
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/ishan._.sen/"
  },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const sideBarLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Framer",
    icon: framer,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const education = [
  {
    title: "DPS Mathura Road",
    program: "Class 10",
    course: "",
    icon: dps,
    link: "https://www.dpsmathuraroad.org/",
    iconBg: "black",
    date: "2017-2018",
    CGPA: "93.2%",

  },
  {
    title: "DPS Mathura Road",
    program: "Class 12",
    course: "PCM",
    icon: dps,
    link: "https://www.dpsmathuraroad.org/",
    iconBg: "black",
    date: "2019-2020",
    CGPA: "93.2%",

  },
  {
    title: "Sharda University",
    program: "B Tech",
    course: "Computer Science Engineering",
    icon: sharda,
    link: "https://www.sharda.ac.in/",
    iconBg: "black",
    date: "2021-2025",
    CGPA: "9.06",
  },
]

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "SK Info Techies",
    icon: sk,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    link: "https://skinfotechies.com/",
    points: [
      "Spearheaded initiatives to fortify the company's digital footprint by orchestrating the development of a cutting-edge website using React and Next.js, with a primary focus on front-end optimization for a seamless and captivating user journey.",
      "Demonstrated adeptness by seamlessly integrating a sophisticated contact form with email services, refining the efficiency of communication channels between the organization and its audience.",
      "Elevated the website's visibility on search engines through the strategic introduction of breadcrumbs, thereby augmenting its SEO performance and augmenting discoverability, a pivotal step in propelling the company's online presence.",

    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "iNotes",
    description:
      " iNotes is a feature-rich note-taking website made using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform offers users an organized space for personal and work-related notes, featuring user authentication, a custom REST API, and dark mode for a personalized experience. The responsive design, implemented with Tailwind CSS, ensures optimal usability across various devices.",
    features: [
      "Designed and implemented the user interface for iNotes, prioritizing a clean and intuitive experience to enhance usability.",
      "Integrated user authentication for secure access, ensuring data privacy and user-specific note management.",
      "Developed custom REST API to facilitate smooth data interactions, enhancing the website's functionality."
    ],
    tech: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    images: [wia1, wia2, wia3, wia4],
    github_link: "https://github.com/JollyBolt/WatchItAll",
    live_link: "https://watchitall-ishan.netlify.app/"
  },
  {
    name: "Watch It All",
    description:
      "Watch It All showcases my proficiency in web development, front-end technologies, and API integration. The project demonstrates my ability to create a user-friendly, responsive, and feature-rich web application. It serves as a testament to my skills in UI/UX design, front-end development, and working with external APIs.",
    features: [
      "Created a dynamic multimedia platform with React.js, Tailwind CSS, and Material UI.",
      "Seamlessly integrated the 'YouTube v3' API, enabling users to search and view YouTube videos.",
      "Showcases versatile skills in front-end development, API integration, and responsive UI/UX design."
    ],
    tech: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    images: [wia1, wia2, wia3, wia4],
    github_link: "https://github.com/JollyBolt/WatchItAll",
    live_link: "https://watchitall-ishan.netlify.app/"
  },

];

export {
  services, technologies, experiences, education,
  // testimonials, 
  projects
};