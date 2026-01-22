
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
      { name: "Java/Quarkus" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Vercel" }
    ]
  }
];

// Experience Data
export const experienceData = [
  {
    title: "Founding Engineer (Stealth Mode Startup / Core Project)",
    company: "Lumiether Research LLP (Full-Time)",
    date: "Nov 2025 - Present",
    description: [
      "Architected high-concurrency, event-driven ecosystem using Flutter and Quarkus to handle complex distributed Nanoservice transactions.",
      "Engineered resilient backend with CQRS and JWT; established Docker workflows for consistent, secure deployment environments.",
      "Developing real-time mapping, camera integration, and secure RBAC admin dashboards to optimize UI/UX."
    ],
    tech: ["Flutter", "Quarkus", "CQRS", "JWT", "Docker", "RBAC"]
  },
  {
    title: "Software Engineering Intern",
    company: "Lumiether Research LLP (Internship)",
    date: "Feb 2025 - Oct 2025",
    description: [
      "Co-developed distributed Flutter and Quarkus system components used by [Number] users.",
      "Designed modular widgets to decouple UI logic, reducing code redundancy and improving rendering times.",
      "Built validated RESTful APIs to ensure seamless data synchronization between microservices and frontend."
    ],
    tech: ["Flutter", "Quarkus", "REST API", "Widget Design"]
  }
];

// Projects Data
// "Job Application Tracker" removed as requested.
// Restored "TajBite" and "Netflix GPT" as per user request.
export const projectsData = [
  {
    title: "Chromadec",
    description: "A luxury art platform connecting clients and artists for custom commissions and ready-made sales. Specialized in high-end designs starting at ₹20,000, ensuring a premium experience with exclusive packaging and delivery.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", "Supabase", "Redis", "Zustand", "Vercel"],
    image: null,
    link: "https://www.chromadec.com/",
    github: null
  },
  {
    title: "TajBite",
    description: "A comprehensive food ordering solution built for restaurant operations. Features real-time menu synchronization, efficient cart management, and a polished user interface for seamless digital dining experiences.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Jest"],
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
  {
    title: "AgroScan",
    description: "Developed both a comprehensive <strong>Mobile App</strong> and <strong>Website</strong> for AI-powered plant disease detection. Features real-time analysis using MobileNetV2 across both platforms.",
    tags: ["Flutter", "Python", "MobileNetV2", "Next.js", "Tailwind CSS"],
    image: null,
    link: null,
    github: "https://github.com/Ravi-Badami"
  }
];

// Contact Data
export const contactData = {
  email: "ravikumarbadami13@gmail.com", // Replace with real email if available
  github: "https://github.com/Ravi-Badami",
  linkedin: "https://www.linkedin.com/in/ravikumar-badami-8bb012202/",
  twitter: "https://x.com/RaviBadamipvt",
  hashnode: "https://ravibadami.hashnode.dev/"
};
