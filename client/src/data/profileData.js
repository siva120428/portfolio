export const profileData = {
  name: "Siva M",
  monogram: "SM",
  headline: "Full Stack Developer",
  roleSubline: "MERN Stack Developer | Software Engineering",
  shortBio: "Crafting thoughtful web experiences with clean interfaces, reliable APIs, and modern full-stack technology.",
  profileImage: "/images/profile.png",
  avatar: "/images/profile.png",
  location: {
    city: "Tiruvannamalai",
    state: "Tamil Nadu",
    country: "India",
    full: "Tiruvannamalai, Tamil Nadu, India",
    coordinates: {
      lat: 12.2253,
      lng: 79.0747
    }
  },
  contact: {
    email: "manikounder1984@gmail.com",
    github: "https://github.com/siva120428",
    linkedin: "https://linkedin.com/in/siva-m-321178383"
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nandha Engineering College",
      location: "Erode, Tamil Nadu",
      period: "2025 – 2027",
      status: "Currently Pursuing",
      description: "Advanced studies focusing on enterprise application architecture, database management, and distributed systems."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Surana College",
      location: "Bengaluru, Karnataka",
      period: "2022 – 2025",
      status: "Completed",
      description: "Graduated with strong foundations in object-oriented programming, computer networks, algorithms, and web technologies."
    }
  ],
  experience: [
    {
      role: "Frontend Development Training",
      organization: "Gowri Software Solutions Pvt. Ltd.",
      url: "https://gowrisoftsolutions.com/index.html",
      period: "July 2024 – August 2024",
      type: "Internship & Practical Training",
      description: "Immersive frontend development program focused on modern React.js, responsive web standards, component-driven architecture, and UI/UX best practices."
    }
  ],
  skills: {
    programming: ["Java", "Python", "JavaScript", "C", "SQL"],
    frontend: ["React.js", "HTML5", "CSS3", "Responsive Design", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "MongoDB Atlas", "MySQL"],
    foundations: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Data Analysis"],
    tools: ["Git", "GitHub", "VS Code", "Power BI (Basics)", "Cisco Packet Tracer"]
  },
  achievements: [
    {
      title: "LeetCode Milestone",
      metric: "70+",
      subtitle: "Algorithmic Problems Solved",
      description: "Consistent problem-solving in data structures, arrays, strings, dynamic programming, and binary search."
    }
  ],
  certifications: [
    {
      title: "AI-First Software Engineering",
      issuer: "Infosys Springboard",
      badge: "AI-First"
    },
    {
      title: "Networking Essentials with Cisco Packet Tracer",
      issuer: "Cisco",
      badge: "Networking"
    },
    {
      title: "MongoDB Atlas Developer",
      issuer: "MongoDB Atlas",
      badge: "Database"
    },
    {
      title: "IoT Certification (Score: 79%)",
      issuer: "NPTEL / SWAYAM",
      badge: "IoT"
    }
  ],
  projects: [
    {
      id: "redora",
      isPrimary: true,
      title: "REDORA",
      subtitle: "Emergency Blood Coordination Platform",
      tagline: "Connecting patients, donors, hospitals, and blood banks during critical medical emergencies.",
      description: "A mission-critical real-time healthcare web application designed to bridge the time-sensitive gap between blood seekers and eligible donors. Features role-based access for patients, donors, and healthcare staff, intelligent blood-group and location-based matching, accept-based emergency requests, and real-time alerts.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "REST APIs"],
      features: [
        "Role-based authentication & dashboard access",
        "Targeted blood-group and location proximity filtering",
        "Emergency request broadcasting with instant donor acceptance workflow",
        "Real-time status updates and notification channels"
      ],
      github: "https://github.com/siva120428",
      demo: null
    },
    {
      id: "zento",
      isPrimary: false,
      title: "Zento",
      subtitle: "MERN Stack Hotel Booking Website",
      tagline: "Luxury and personalized hotel sanctuaries tailored to every journey.",
      description: "A responsive full-stack hotel booking platform offering personalized sanctuary discovery, intuitive room reservations, real-time availability, and high-performance REST APIs.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Curated hotel sanctuaries tailored to travel styles",
        "Interactive room discovery and reservation management",
        "Clean REST API endpoints for booking operations"
      ],
      github: "https://github.com/siva120428",
      demo: "https://zento-blond.vercel.app/"
    },
    {
      id: "ridekart",
      isPrimary: false,
      title: "RideKart",
      subtitle: "Urban Mobility & Vehicle Rental Hub",
      tagline: "Comprehensive rental discovery and seamless booking platform for city commuters.",
      description: "A responsive vehicle booking platform featuring an interactive fleet catalog, real-time availability checking, structured reservation workflows, and sleek UI components.",
      techStack: ["React.js", "Express.js", "REST APIs", "Tailwind CSS"],
      features: [
        "Dynamic vehicle catalog filtering by type, rate, and availability",
        "Validated multi-step reservation workflow",
        "Fully responsive mobile-friendly customer interface"
      ],
      github: "https://github.com/siva120428",
      demo: null
    }
  ]
};
