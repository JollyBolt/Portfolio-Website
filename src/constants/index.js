import {
    mobile,
    backend,
    creator,
    web,
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
    // meta,
    // starbucks,
    // tesla,
    sk,
    dps,sharda,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    github,
    linkedin,
    instagram,
  } from "../assets";
  
  export const navIcons = [
    {
      id: "github",
      icon: github,
      link:"https://github.com/JollyBolt"
    },
    {
      id: "linkedin",
      icon: linkedin,
      link:"https://www.linkedin.com/in/theishansen/"
    },
    {
      id: "instagram",
      icon: instagram,
      link:"https://www.instagram.com/ishan._.sen/"
    },
  ];
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
      title: "Work",
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
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
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
      program:"Class 10",
      course:"",
      icon:dps,
      link:"https://www.dpsmathuraroad.org/",
      iconBg: "black",
      date:"2017-2018",
      CGPA:"93.2%",

    },
    {
      title: "DPS Mathura Road",
      program:"Class 12",
      course:"PCM",
      icon:dps,
      link:"https://www.dpsmathuraroad.org/",
      iconBg: "black",
      date: "2019-2020",
      CGPA:"93.2%",

    },
    {
      title: "Sharda University",
      program:"B Tech",
      course:"Computer Science Engineering",
      icon:sharda,
      link:"https://www.sharda.ac.in/",
      iconBg: "black",
      date: "2021-2025",
      CGPA:"9.06",
    },
  ]
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "SK Info Techies",
      icon: sk,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      link:"https://skinfotechies.com/",
      points: [
        "Spearheaded initiatives to fortify the company's digital footprint by orchestrating the development of a cutting-edge website using React and Next.js, with a primary focus on front-end optimization for a seamless and captivating user journey.",
        "Demonstrated adeptness by seamlessly integrating a sophisticated contact form with email services, refining the efficiency of communication channels between the organization and its audience.",
        "Elevated the website's visibility on search engines through the strategic introduction of breadcrumbs, thereby augmenting its SEO performance and augmenting discoverability, a pivotal step in propelling the company's online presence.",
  
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
  //   {
  //     name: "Car Rent",
  //     description:
  //       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
  ];
  
  export { services, technologies, experiences,education, 
    // testimonials, 
    projects };