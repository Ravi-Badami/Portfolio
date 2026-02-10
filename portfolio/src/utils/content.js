
// Personal & Hero Data
export const heroData = {
  intro: "Building digital products with purpose.",
  description: "I'm a Full Stack Engineer focused on scalable software, clean aesthetics, and exceptional user experiences.",
  status: "Available for Hire",
  profileInitials: "RB",
  links: {
    github: "https://github.com/Ravi-Badami",
    linkedin: "https://www.linkedin.com/in/ravikumar-badami-8bb012202/",
    twitter: "https://x.com/RaviBadamipvt",
    email: "mailto:ravikumarbadami13@gmail.com"
  }
};

// Skills Data
export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Dart" },
      { name: "Python" },
      { name: "HTML/CSS" }
    ]
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "Flutter" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js (Express, NestJS)" },
      { name: "FastAPI" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Supabase" },
      { name: "Zod" },
      { name: "Java/Quarkus" }
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Google Gemini API" },
      { name: "Pandas" },
      { name: "OpenPyXL" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "AWS (EC2)" },
      { name: "Git/GitHub" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Microservices" },
      { name: "JWT" },
      { name: "PM2" },
      { name: "Swagger/OpenAPI" },
      { name: "Jest" },
      { name: "Supertest" },
      { name: "Winston" }
    ]
  }
];

// Experience Data
export const experienceData = [
  {
    title: "Founding Engineer | Stealth Mode",
    company: "Lumiether Research LLP",
    date: "Nov 2025 - Present",
    description: [
      "Developed scalable web applications using React.js with Redux Toolkit and offline-first Flutter mobile apps, integrating Hive local caching and optimizing GPS drift correction algorithms for core product IP.",
      "Built high-performance microservices using Node.js and MongoDB, utilizing PM2 Clustering for zero-downtime and Redis for inter-service caching to significantly reduce database load.",
      "Implemented enterprise-grade security using JWT with Refresh Token Rotation and Redis blacklisting, applying the CQRS pattern to separate read/write logic for optimized system performance.",
      "Designed granular Role-Based Access Control (RBAC) and centralized observability using Winston and Morgan, ensuring secure and monitored communication between client and backend services.",
      "Delivered secured REST APIs and analytics dashboards in an Agile environment, standardizing workflows with Docker containerization, Zod schema validation, and automated Postman testing."
    ],
    tech: ["React.js", "Redux Toolkit", "Flutter", "Node.js", "MongoDB", "Redis", "Docker", "AWS"]
  },
  {
    title: "Software Engineering Intern",
    company: "Lumiether Research LLP",
    date: "Apr 2024 - Oct 2024",
    description: [
      "Developed responsive cross-platform mobile features using Flutter, integrating RESTful APIs to enable real-time data synchronization and seamless user interactions.",
      "Engineered backend modules using Node.js, Express.js, and MongoDB, optimizing database schemas and API endpoints to support scalable MERN stack performance.",
      "Executed Agile development workflows using Git/GitHub for version control (Feature Branching) and conducted rigorous API testing and validation using Postman."
    ],
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "Git", "Postman"]
  }
];

// Projects Data
// "Job Application Tracker" removed as requested.
// Restored "TajBite" and "Netflix GPT" as per user request.
export const projectsData = [
  {
    title: "Chromadec",
    description: "Built a production-grade art marketplace with multi-role authentication (Admin, Artist, Client) and RBAC. Developed 20+ REST APIs using Drizzle ORM and Supabase to handle orders, commissions, and complex admin workflows. Implemented real-time dashboards using React Query and deployed on Vercel with optimized caching strategies.",
    tags: ["Next.js", "TypeScript", "Supabase", "Redis", "Tailwind CSS", "Zustand", "Drizzle ORM"],
    category: "Fullstack",
    image: null,
    link: "https://www.chromadec.com/",
    github: null
  },
  {
    title: "InsightAI",
    description: "Built an AI-powered business intelligence platform that analyzes multi-industry data (SaaS, E-commerce, Gaming, Services) and generates actionable insights using Google Gemini API. Built a dynamic template system for CSV, Excel, and JSON with industry-specific validation. Containerized a full-stack app with Docker Compose and deployed to AWS EC2.",
    tags: ["React.js", "FastAPI", "Python", "Pandas", "Docker", "Google Gemini API", "AWS"],
    category: "AI",
    image: null,
    link: null,
    github: "https://github.com/Ravi-Badami/insight-ai"
  },
  {
    title: "TajBite",
    description: "Designed scalable MongoDB schemas and built RESTful APIs with advanced filtering, sorting, and search capabilities. Improved database performance by implementing indexing and query optimization, achieving 5–10x faster response times. Implemented autocomplete search functionality with debouncing.",
    tags: ["React.js", "Express", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    category: "Frontend",
    image: null, 
    link: "https://tajbite.vercel.app/",
    github: "https://github.com/Ravi-Badami"
  },
  {
    title: "NetflixGPT",
    description: "Built an AI-powered movie recommendation platform integrating Google Gemini API and TMDB API. Implemented secure authentication via Firebase and managed global application state using Redux Toolkit. Designed a fully responsive UI with performance optimizations, including memoization and API response caching.",
    tags: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS", "Google Gemini API"],
    category: "AI",
    image: null,
    link: "https://feelflixpro.vercel.app/",
    github: "https://github.com/Ravi-Badami"
  },
  {
    title: "AgroScan",
    description: "Developed an AI-based plant disease detection system achieving 95%+ accuracy using the MobileNetV2 model. Built a Python Flask backend for image processing and prediction handling. Implemented user dashboards using Next.js and integrated Redis caching to reduce latency.",
    tags: ["Flutter", "Next.js", "TypeScript", "Flask", "AI (MobileNetV2)"],
    category: "AI",
    image: null,
    link: null,
    github: "https://github.com/Ravi-Badami/AgroScan"
  },
  {
    title: "Tajbite Backend",
    description: "A robust RESTful API for a food ordering platform, featuring efficient dish management, search, and filtering. Built with a modular architecture using Node.js and MongoDB to ensure scalability and performance.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Swagger"],
    category: "Backend",
    image: null, 
    link: null,
    github: "https://github.com/Ravi-Badami/Tajbite-backend"
  },
  {
    title: "Enterprise Identity Service",
    description: "Enterprise-grade Node.js microservice demonstrating strict layered architecture. Features hybrid pagination (Cursor+Offset), database circuit breaking, duplicate request prevention, and ESR pattern indexing for optimized performance. Includes comprehensive testing with Jest and Supertest, and centralized logging with Winston.",
    tags: ["Node.js", "Express.js", "MongoDB", "Zod", "Bcrypt", "Resilience Patterns", "Jest", "Supertest", "Winston"],
    category: "Backend",
    image: null,
    link: null,
    github: "https://github.com/Ravi-Badami/Enterprise-Auth-Service"
  },
  {
    title: "AgroScanApp",
    description: "Developed both a comprehensive <strong>Mobile App</strong> and <strong>Website</strong> for AI-powered plant disease detection. Features real-time analysis using MobileNetV2 across both platforms.",
    tags: ["Flutter", "MobileNetV2"],
    category: "Mobile Application",
    image: null,
    link: null,
    github: "https://github.com/Ravi-Badami/Agroscan-App"
  },

];

// Contact Data
export const contactData = {
  email: "ravikumarbadami13@gmail.com", // Replace with real email if available
  github: "https://github.com/Ravi-Badami",
  linkedin: "https://www.linkedin.com/in/ravikumar-badami-8bb012202/",
  twitter: "https://x.com/RaviBadamipvt",
  hashnode: "https://ravibadami.hashnode.dev/",
  resume: "https://drive.google.com/file/d/1fvVs9qrB3u_nEAfboX-zUmhOg9HGqnUZ/view?usp=sharing"
};
