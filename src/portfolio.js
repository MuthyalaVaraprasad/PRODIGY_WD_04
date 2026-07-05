/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muthyala Varaprasad",
  title: "Hi all, I'm Muthyala Varaprasad",
  subTitle:
    "Software Developer pursuing a Bachelor of Technology in Computer Science and Engineering with hands-on experience in designing and developing modern web applications, AI-powered solutions, and cloud integrations.",
  resumeLink: "view", // Changed to trigger view in tab instead of static external link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/MuthyalaVaraprasad",
  linkedin: "https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/",
  gmail: "mudhirajnani466@gmail.com",
  display: true
};

// Coding Profiles Section
const codingProfiles = {
  display: true,
  profiles: [
    {
      name: "GitHub",
      url: "https://github.com/MuthyalaVaraprasad",
      logo: "github", // Will use React Icons FaGithub
      color: "#181717"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/",
      logo: "linkedin", // Will use React Icons FaLinkedin
      color: "#0A66C2"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/mudhirajxrkg",
      logo: "gfg", // Will use custom styled tag or React Icons
      color: "#2F8D46"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/MuthyalaVaraprasad02",
      logo: "leetcode", // Will use generated LeetCode logo
      color: "#FFA116"
    }
  ]
};

// Why Hire Me Section
const whyHireMe = {
  display: true,
  title: "Why Hire Me? 🎯",
  subtitle: "Here's what I bring to your team",
  cards: [
    {
      title: "Problem Solver & Algorithmist",
      desc: "Strong foundation in Data Structures & Algorithms, proven by coding practice on LeetCode and GeeksforGeeks.",
      icon: "code"
    },
    {
      title: "Full-Stack Competence",
      desc: "Hands-on experience building end-to-end web apps with React.js, Express, Node.js, and Databases (MySQL, MongoDB).",
      icon: "layers"
    },
    {
      title: "AI Integration Enthusiast",
      desc: "Passionate about generative AI, prompt engineering, and building intelligent web-based solutions.",
      icon: "cpu"
    },
    {
      title: "Proven Leadership & Management",
      desc: "Experience leading technical fests (Crescence 2K26) and coordinating teams to deliver successful events.",
      icon: "users"
    }
  ]
};

// Skills Section
const skillsSection = {
  title: "Skills & Technologies 💻",
  subTitle: "Structured technical skills and domains of expertise",
  skills: [
    emoji("⚡ Languages: Python, Java, JavaScript (ES6+), TypeScript, C++"),
    emoji(
      "⚡ Frontend: HTML5, CSS3, Bootstrap, React.js, Responsive Web Design, UI/UX"
    ),
    emoji(
      "⚡ Backend & Databases: Node.js (Basics), Express.js, REST APIs, MySQL, MongoDB"
    ),
    emoji(
      "⚡ Cloud & Dev Tools: OCI, AWS, Azure, Git, GitHub, VS Code, Postman, Vercel, Netlify"
    ),
    emoji(
      "⚡ Core Computer Science: DS & Algorithms, OOP, DBMS, Operating Systems, SDLC"
    ),
    emoji(
      "⚡ AI & Emerging: Generative AI, AI-Powered Web Apps, Prompt Engineering"
    )
  ],
  softwareSkills: [
    // Categorized skills to render structured badges
    {
      category: "Programming Languages",
      skills: [
        {name: "Python", fontAwesomeClassname: "fab fa-python"},
        {name: "Java", fontAwesomeClassname: "fab fa-java"},
        {name: "JavaScript", fontAwesomeClassname: "fab fa-js"},
        {name: "TypeScript", fontAwesomeClassname: "fas fa-code-branch"},
        {name: "C++", fontAwesomeClassname: "fas fa-code"}
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        {name: "HTML5", fontAwesomeClassname: "fab fa-html5"},
        {name: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
        {name: "React.js", fontAwesomeClassname: "fab fa-react"},
        {name: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},
        {name: "Responsive UI", fontAwesomeClassname: "fas fa-laptop-code"}
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        {name: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
        {name: "Express.js", fontAwesomeClassname: "fas fa-server"},
        {name: "REST APIs", fontAwesomeClassname: "fas fa-exchange-alt"},
        {name: "MySQL", fontAwesomeClassname: "fas fa-database"},
        {name: "MongoDB", fontAwesomeClassname: "fas fa-leaf"}
      ]
    },
    {
      category: "Developer Tools & Cloud",
      skills: [
        {name: "Git & GitHub", fontAwesomeClassname: "fab fa-github"},
        {name: "VS Code", fontAwesomeClassname: "fas fa-code"},
        {name: "Postman", fontAwesomeClassname: "fas fa-envelope-open-text"},
        {name: "AWS", fontAwesomeClassname: "fab fa-aws"},
        {name: "Azure", fontAwesomeClassname: "fas fa-cloud"},
        {name: "OCI", fontAwesomeClassname: "fas fa-cloud-upload-alt"}
      ]
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "JNTUH University College of Engineering, Jagtial",
      logo: require("./assets/images/jntuh_logo.png"), // Using a custom university indicator
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "Pursuing B.Tech (CSE) with a focus on Full Stack Development, AI, and Core Software Engineering.",
      descBullets: [
        "Computer Science and Engineering major",
        "Learning advanced Data Structures and Algorithms",
        "Enthusiastic about AI integrations and responsive web design"
      ]
    },
    {
      schoolName: "Telangana State Board of Intermediate Education",
      subHeader: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
      duration: "2021 - 2023",
      desc: "Completed secondary education with focused studies in core sciences and mathematics."
    },
    {
      schoolName: "Board of Secondary Education, Telangana",
      subHeader: "Secondary School Certificate (SSC)",
      duration: "Completed 2021",
      desc: "Foundational high school education."
    }
  ]
};

// Top proficient tech experience (unused in some templates, but we keep format safe)
const techStack = {
  viewSkillBars: false, // Set false to remove Proficiency section as requested
  experience: [],
  displayCodersrank: false
};

// Professional Experience (Developer Internships)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Development Intern",
      company: "ProDigy InfoTech",
      companylogo: require("./assets/images/prodigy_infotech_logo.png"),
      date: "June 2026 – July 2026",
      desc: "Developed responsive web applications using HTML, CSS, JavaScript, and React.js. Collaborated on project features and version control.",
      descBullets: [
        "Built real-world applications including Weather App, Stopwatch, Landing Page, and Tic-Tac-Toe Game",
        "Integrated REST APIs and managed source code workflows using Git and GitHub",
        "Created responsive layouts and verified mobile compatibility across multiple devices"
      ]
    },
    {
      role: "Frontend Development Intern",
      company: "Future Interns",
      companylogo: require("./assets/images/future_interns_logo.png"),
      date: "2026",
      desc: "Developed responsive frontend user interfaces using modern web technologies.",
      descBullets: [
        "Improved UI/UX designs, application performance, and cross-device compatibility",
        "Collaborated on project implementations following industry standards and best practices"
      ]
    },
    {
      role: "Software Development Intern",
      company: "CodeAlpha",
      companylogo: require("./assets/images/codealpha_logo.png"),
      date: "2026",
      desc: "Developed interactive projects focusing on frontend logic building and DOM manipulation.",
      descBullets: [
        "Developed an interactive Flash Card Learning Application using HTML, CSS, and JavaScript",
        "Applied frontend debugging and software engineering best practices to resolve logic issues",
        "Successfully completed project milestones within the internship timelines"
      ]
    }
  ]
};

// Leadership & Event Management Section
const leadershipExperiences = {
  display: true,
  title: "Leadership & Event Management 🏆",
  subtitle: "Organizing and leading technical fests and community events",
  experience: [
    {
      role: "Main Coordinator",
      company: "Crescence 2K26 Technical Fest",
      companylogo: require("./assets/images/crescence_fest_logo.png"),
      date: "2026",
      desc: "Led the planning and execution of the Computer Science department's annual technical fest.",
      descBullets: [
        "Coordinated event schedules, registrations, and cross-functional student teams",
        "Managed communication and logistics, ensuring a successful festival experience for all attendees"
      ]
    },
    {
      role: "Hackathon Organizer",
      company: "College Technical Fest (JNTUHUCEJ)",
      companylogo: require("./assets/images/hackathon_organizer_logo.png"),
      date: "2026",
      desc: "Organized and managed a college-level hackathon from planning to successful execution.",
      descBullets: [
        "Coordinated participants, judges, technical mentors, and event infrastructure",
        "Fostered collaboration, innovation, and practical problem-solving culture among students"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// This is the static projects config (formerly Big Projects, which we are removing)
const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [],
  display: false // Set to false to remove "Big Projects" section
};

// Achievements & Milestones (representing Projects from PDF)
const achievementSection = {
  title: "Achievements & Projects 📈",
  subtitle: "Real-world projects, AI-powered applications, and technical fests",
  achievementsCards: [
    {
      title: "Crescence 2K26 – Event Management Platform",
      subtitle:
        "Developed a responsive event management platform using HTML5, CSS3, and JavaScript to streamline registrations, event scheduling, announcements, and participant management.",
      image: require("./assets/images/crescence_project.png"),
      imageAlt: "Crescence Fest Website",
      footerLink: [{name: "Live Demo", url: "https://crescence2k26.in/"}]
    },
    {
      title: "Weather Forecast Application",
      subtitle:
        "Built a modern weather forecasting application using React.js and JavaScript, integrating REST APIs to display current conditions, hourly forecasts, weekly forecasts, and air quality information.",
      image: require("./assets/images/weather_project.png"),
      imageAlt: "Weather App Mockup",
      footerLink: [
        {name: "Live Demo", url: "https://weatherapp-smoky-three.vercel.app/"}
      ]
    },
    {
      title: "Personal Portfolio Website",
      subtitle:
        "Designed and developed a professional responsive portfolio website using React.js and CSS3 to showcase projects, certifications, internships, and technical expertise.",
      image: require("./assets/images/portfolio_project.png"),
      imageAlt: "Portfolio Mockup",
      footerLink: [
        {name: "Live Demo", url: "https://varaprasad-blush.vercel.app/"}
      ]
    },
    {
      title: "Industrial AI Hackathon Platform",
      subtitle:
        "Developed an AI-powered web application using React.js and AI integrations as part of an Industrial AI Hackathon to address real-world industrial challenges.",
      image: require("./assets/images/industrial_ai_project.png"),
      imageAlt: "Industrial AI App",
      footerLink: [
        {name: "Live Demo", url: "https://industrial-ai-hackathon.vercel.app/"}
      ]
    },
    {
      title: "Economic Crisis Detection System",
      subtitle:
        "Developed a web-based financial indicator analysis system using HTML5, CSS3, and JavaScript to analyze economic trends and visualize potential market downturns.",
      image: require("./assets/images/economic_crisis_project.png"),
      imageAlt: "Economic System App",
      footerLink: [
        {name: "Live Demo", url: "https://economiccrisis.netlify.app/"}
      ]
    },
    {
      title: "AI Resume Analyzer",
      subtitle:
        "Built a React-based AI-powered resume evaluator that parses resumes, extracts key skills, generates ATS compatibility scores, and provides intelligent feedback.",
      image: require("./assets/images/resume_analyzer_project.png"),
      imageAlt: "Resume Analyzer App",
      footerLink: [
        {name: "Live Demo", url: "https://resumeanalyzer-one-zeta.vercel.app/"}
      ]
    }
  ],
  display: true
};

// Certifications Section
const certificationsSection = {
  title: "Certifications & Training 🎓",
  subtitle: "Verified professional learning and cloud platform certifications",
  profileLinks: {
    linkedin: "https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/",
    email: "mudhirajnani466@gmail.com"
  },
  certifications: [
    "Oracle Cloud Infrastructure (OCI) AI Foundations – Oracle",
    "Generative AI Fundamentals – FutureSkills Prime (Govt of India)",
    "Full Stack Web Development – GeeksforGeeks",
    "JavaScript Programming (Beginner to Advanced) – GeeksforGeeks",
    "Python Programming – GeeksforGeeks",
    "DevOps Fundamentals – GeeksforGeeks",
    "Python Programming – HackerRank",
    "Java Programming (Basic) – HackerRank",
    "Data Visualization with Power BI – Microsoft Learn",
    "Cloud Computing Fundamentals – AWS",
    "Cloud Computing Fundamentals – Microsoft Azure"
  ],
  display: true
};

// Journey Timeline
const journeyTimeline = {
  title: "Journey Timeline 📈",
  subtitle: "My technical development journey from foundation to engineering",
  timeline: [
    {
      year: "2021",
      title: "Secondary School Education (SSC)",
      description:
        "Completed secondary education in Telangana, laying foundations for technical learning."
    },
    {
      year: "2021 - 2023",
      title: "Intermediate (MPC)",
      description:
        "Studied mathematics, physics, and chemistry under the Telangana State Board."
    },
    {
      year: "2023 - 2027",
      title: "B.Tech in Computer Science and Engineering",
      description:
        "Admitted to JNTUH University College of Engineering, Jagtial. Focused on programming, web technologies, and software development."
    },
    {
      year: "2025 - 2026",
      title: "Project Development & Internships",
      description:
        "Completed internships at Prodigy InfoTech, Future Interns, and CodeAlpha. Built 15+ web applications, including AI-powered platforms and event fests."
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs & Technical Writing ✍️",
  subtitle:
    "Sharing my experiences in Full Stack development, technical event coordination, and debugging.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "#",
      title: "My Journey as a Full Stack Developer at JNTUHUCEJ",
      description:
        "How I started from programming basics and evolved into building web applications using React.js, Node.js, and MongoDB."
    },
    {
      url: "#",
      title: "Building Real-World Projects That Shaped My Skills",
      description:
        "A summary of how projects like the AI Resume Analyzer, Weather App, and Crescence platform helped hone my debugging skills."
    },
    {
      url: "#",
      title: "CreScencE 2K26 Technical Fest – Coordinator Insights",
      description:
        "My experience coordinating technical schedules, registrations, student groups, and logistics for a major technical fest."
    }
  ],
  display: false
};

// Unused section placeholder to prevent compile error in legacy imports
const caseStudiesSection = {
  display: false,
  cases: []
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Click below to view my professional resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9963889086",
  email_address: "mudhirajnani466@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  certificationsSection,
  journeyTimeline,
  caseStudiesSection,

  // NEW SECTIONS
  leadershipExperiences,
  codingProfiles,
  whyHireMe
};
