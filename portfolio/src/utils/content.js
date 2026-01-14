
// Personal & Hero Data
export const heroData = {
  intro: "Building digital products with purpose.",
  description: "I'm a Full Stack Engineer focused on scalable software, clean aesthetics, and exceptional user experiences.",
  status: "Available for Hire",
  profileInitials: "RB"
};

// Skills Data
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Flutter" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Quarkus" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Figma" }
    ]
  }
];

// Experience Data
export const experienceData = [
  {
    title: "Full Stack Engineer",
    company: "LumiEther Research",
    date: "Nov 2023 - Present",
    description: [
      "Architected and developed a scalable rider management system, supporting 1000+ daily active users.",
      "Built a high-performance cross-platform mobile app using Flutter, reducing development time by 30%.",
      "Designed and implemented RESTful APIs using Node.js and PostgreSQL to handle real-time location data.",
      "Optimized admin dashboard performance by implementing virtualization for large datasets."
    ],
    tech: ["React", "Flutter", "Node.js", "PostgreSQL", "Go", "Docker"]
  },
  {
    title: "Software Developer Intern",
    company: "LumiEther Research",
    date: "May 2023 - Oct 2023",
    description: [
      "Collaborated with the senior engineering team to rebuild the core landing page using React and Tailwind CSS.",
      "Implemented a new authentication flow using JWT, improving security and user session management.",
      "Developed reusable UI components for the design system, ensuring consistency across all web products."
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Figma"]
  }
];

// Projects Data
// "Job Application Tracker" removed as requested.
// Restored "TajBite" and "Netflix GPT" as per user request.
export const projectsData = [
  {
    title: "Chromadec",
    description: "A premium landing page for an art commission agency. Features a dark luxury aesthetic, mobile-responsive layout, and high-performance animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: null,
    link: "https://www.chromadec.com/",
    github: null
  },
  {
    title: "TajBite",
    description: "A comprehensive food ordering solution built for restaurant operations. Features real-time menu synchronization, efficient cart management, and a polished user interface for seamless digital dining experiences.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Jest"],
    image: null, 
    link: "https://tajbite.vercel.app/",
    github: "https://github.com/Ravi-Badami" // Placeholder, user to update specific repo
  },
  {
    title: "Netflix GPT",
    description: "An AI-powered movie recommendation platform integrating OpenAI's GPT API. Features multi-language support, TMDB integration, and a responsive streaming-style UI.",
    tags: ["React", "OpenAI API", "Firebase", "Redux"],
    image: null,
    link: "https://netflixgptpro.vercel.app/",
    github: "https://github.com/Ravi-Badami" // Placeholder, user to update specific repo
  },
  
];

// Contact Data
export const contactData = {
  email: "ravikumarbadami13@gmail.com", // Replace with real email if available
  github: "https://github.com/Ravi-Badami",
  linkedin: "https://linkedin.com/in/ravikumar-badami",
  twitter: "https://twitter.com/ravikumar_badami"
};
