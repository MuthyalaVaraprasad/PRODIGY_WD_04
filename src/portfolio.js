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
    "Computer Science Engineering student passionate about Full Stack Development, React.js, Node.js, MongoDB, AI Applications, and modern web technologies.",
  resumeLink:
    "https://drive.google.com/drive/folders/1T8I7lPgOrXT35mK6bF9ZfhzzC30EA1CO",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MuthyalaVaraprasad",
  linkedin: "https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364",
  gmail: "mudhirajnani466@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills & Technologies",
  subTitle:
    "Full Stack Development, AI, Cloud, and Software Engineering skills",

  skills: [
    emoji("⚡ Frontend: React.js, HTML, CSS, JavaScript"),
    emoji("⚡ Backend: Node.js, REST APIs"),
    emoji("⚡ Databases: MySQL, MongoDB, Firebase"),
    emoji("⚡ Programming: Python, Java, JavaScript"),
    emoji("⚡ Cloud: AWS Fundamentals, Azure Fundamentals"),
    emoji("⚡ AI & ML: Generative AI, NLP Basics"),
    emoji("⚡ DevOps: CI/CD Concepts, GitHub Actions basics"),
    emoji("⚡ Tools: Git, GitHub, VS Code"),
    emoji("⚡ Problem Solving & Data Structures"),
    emoji("⚡ UI/UX: Responsive Design, Mobile-first development"),
    emoji("⚡ API Integration & Web Services")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jawaharlal Nehru Technological University Hyderabad University College of Engineering Jagtial",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - 2026",
      desc: "Currently pursuing B.Tech (CSE) with a focus on Full Stack Development, AI, and Software Engineering.",
      descBullets: [
        "Computer Science and Engineering",
        "4th Year Undergraduate Student",
        "Full Stack Web Development and AI Enthusiast"
      ]
    },
    {
      schoolName: "ZPHS Bollaram",
      subHeader: "Secondary School Education",
      duration: "Completed",
      desc: "Completed foundational education."
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer Intern",
      company: "PRODIGY INFOTECH",
      companylogo: null,
      date: "2025",
      desc: "Built responsive web applications using React.js, JavaScript, HTML, CSS and worked on real-world UI development tasks.",
      descBullets: [
        "Developed reusable UI components using React.js",
        "Solved module resolution and asset linking issues",
        "Improved frontend structure and debugging skills"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "CODEALPHA",
      companylogo: null,
      date: "2025",
      desc: "Developed interactive projects like FitLife, QuoteVerse, and FlashCard applications.",
      descBullets: [
        "Built JavaScript-based interactive web apps",
        "Focused on DOM manipulation and logic building",
        "Improved reusable component design skills"
      ]
    },
    {
      role: "Technical Fest Developer",
      company: "CRESCENCE 2K26 (JNTUHUCEJ)",
      companylogo: null,
      date: "2026",
      desc: "Developed official website for college technical fest with event registration and UI flow.",
      descBullets: [
        "Built multi-page event management system",
        "Designed UI for registration and schedules",
        "Improved real-world project deployment skills"
      ]
    }
  ]
};

export default workExperiences;
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "My major real-world projects and web applications",

  projects: [
    {
      projectName: "Crescence 2K26",
      projectDesc:
        "Official college technical fest website built with event listings, schedules, registration flow, and modern UI/UX design.",
      techStack: "React.js, JavaScript, HTML, CSS",
      footerLink: [
        {
          name: "Live Website",
          url: "https://crescence2k26.in/"
        }
      ]
    },
    {
      projectName: "NexusHub",
      projectDesc:
        "Full-stack responsive web application with modern UI, authentication flow, and optimized frontend architecture.",
      techStack: "React.js, Node.js, MongoDB",
      footerLink: [
        {
          name: "Live App",
          url: "https://nexushubapp.netlify.app/"
        }
      ]
    },
    {
      projectName: "Resume Analyzer",
      projectDesc:
        "AI-powered resume analysis tool that evaluates skills, provides ATS scoring, and suggests improvements.",
      techStack: "Python, NLP, React.js",
      footerLink: [
        {
          name: "Live Tool",
          url: "https://resumeanalyzer-one-zeta.vercel.app/"
        }
      ]
    }
  ],

  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Projects 🏆"),
  subtitle:
    "Projects, internships, technical work and real-world development experience",

  achievementsCards: [
    {
      title: "Full Stack Web Development Projects",
      subtitle:
        "Built multiple React.js based projects including NexusHub, Smart Hub, and interactive UI applications with modern frontend architecture.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Projects",
      footerLink: []
    },

    {
      title: "Internship Experience (Prodigy Infotech)",
      subtitle:
        "Developed responsive web applications using React.js, JavaScript, HTML and CSS with real-world UI components and debugging experience.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Internship",
      footerLink: []
    },

    {
      title: "CodeAlpha Internship Projects",
      subtitle:
        "Built multiple JavaScript applications like FlashCard App, QuoteVerse, and FitLife focusing on DOM manipulation and logic building.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "CodeAlpha",
      footerLink: []
    },

    {
      title: "College Technical Fest – Crescence 2K26",
      subtitle:
        "Developed official technical fest website for JNTUHUCEJ including event UI, registration flow, and structured navigation system.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Crescence",
      footerLink: []
    },

    {
      title: "Resume Analyzer AI Project",
      subtitle:
        "Built AI-based resume analysis system with skill extraction, ATS scoring and job-fit evaluation using NLP concepts.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AI Project",
      footerLink: []
    }
  ],
  display: true
};


//certificates section

const certificationsSection = {
  title: emoji("Certifications & Professional Training 🎓"),
  subtitle:
    "Verified certifications and industry-recognized learning achievements",

  profileLinks: {
    linkedin:
      "https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364",
    email: "mudhirajnani466@gmail.com"
  },

  certifications: [
    "Oracle OCI AI Foundations",
    "Python Programming (HackerRank)",
    "Java Programming (HackerRank)",
    "Full Stack Web Development (Udemy)",
    "JavaScript Programming (GeeksforGeeks)",
    "DevOps SkillUp Program",
    "Generative AI (Future Skills)",
    "Generative AI by NASSCOM FutureSkills",
    "Tata Forage – GenAI Powered Data Analytics",
    "Tata Forage – Cybersecurity Analyst",
    "Data Visualization with Power BI (Microsoft Learn)",
    "AWS & Azure Cloud Fundamentals"
  ],

  display: true
};




//case study sction 

const caseStudiesSection = {
  title: "Featured Case Studies",
  subtitle: "Deep dive into my real-world development experience",

  cases: [
    {
      title: "Resume Analyzer AI System",
      problem:
        "Resumes often fail ATS filters due to poor formatting and missing keywords.",
      solution:
        "Built an AI-based analyzer that evaluates resumes, extracts skills, and provides ATS score improvements.",
      techStack: "React.js, Python, NLP",
      outcome:
        "Improved resume optimization accuracy and helped users enhance job readiness."
    },
    {
      title: "Crescence 2K26 Event Platform",
      problem:
        "College technical fest needed a centralized registration and event management system.",
      solution:
        "Designed and developed a full event website with registration flow and dynamic event listings.",
      techStack: "React.js, UI/UX Design",
      outcome:
        "Successfully handled event registrations and improved coordination efficiency."
    },
    {
      title: "NexusHub Full Stack App",
      problem:
        "Need for a modern, scalable productivity and dashboard web application.",
      solution:
        "Built a full stack platform with authentication, responsive UI, and modular components.",
      techStack: "React.js, Node.js, MongoDB",
      outcome:
        "Delivered a production-ready scalable web application."
    }
  ],

  display: true
};

//journey timeline 

const journeyTimeline = {
  title: "My Journey Timeline",
  subtitle: "How I evolved from beginner to full stack developer",

  timeline: [
    {
      year: "2022",
      title: "Started Engineering",
      description:
        "Joined B.Tech in Computer Science and Engineering at JNTUHUCEJ. Learned basics of programming and problem solving."
    },
    {
      year: "2023",
      title: "Web Development Foundations",
      description:
        "Started learning HTML, CSS, JavaScript and built my first static websites and mini projects."
    },
    {
      year: "2024",
      title: "React & Full Stack Growth",
      description:
        "Built interactive React.js applications and explored Node.js, MongoDB, and API development."
    },
    {
      year: "2025",
      title: "Internships & Real Projects",
      description:
        "Completed internships at Prodigy Infotech and CodeAlpha. Built real-world applications like Resume Analyzer and NexusHub."
    },
    {
      year: "2026",
      title: "Advanced Projects & Leadership",
      description:
        "Led technical projects including Crescence 2K26 website and focused on AI-powered applications and scalable systems."
    }
  ],

  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing my journey as a Full Stack Developer, project builder, and technical event organizer.",

  displayMediumBlogs: "false",

  blogs: [
    {
      url: "#",
      title: "My Journey as a Full Stack Developer at JNTUHUCEJ",
      description:
        "How I started from basics of HTML, CSS, JavaScript and evolved into building full stack applications using React.js, Node.js, and MongoDB."
    },
    {
      url: "#",
      title: "Building Real-World Projects That Shaped My Skills",
      description:
        "My experience developing projects like Resume Analyzer, FitLife, QuoteVerse, FlashCard App, NexusHub, and SmartHub with real debugging and deployment challenges."
    },
    {
      url: "#",
      title: "CreScencE 2K26 Technical Fest – Main Coordinator Experience",
      description:
        "My role as a Main Coordinator in CreScencE 2K26 at JNTUHUCEJ, managing technical workflows, student coordination, and event execution."
    },
    {
      url: "#",
      title: "Hackathon Organizer Experience – Building Innovation Culture",
      description:
        "Organizing and supporting hackathon events, guiding participants, and helping teams transform ideas into working prototypes."
    },
    {
      url: "#",
      title: "Why I Chose React.js for Modern Web Development",
      description:
        "Why React.js became my core frontend framework due to its component-based architecture, scalability, and ecosystem support."
    },
    {
      url: "#",
      title: "Debugging Real Errors Made Me a Better Developer",
      description:
        "How solving real issues like module errors, image path issues, and broken imports improved my problem-solving skills."
    }
  ],

  display: true
};

//const talkSection = { display: false };
//const podcastSection = { display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9963889086",
  email_address: "mudhirajnani466@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


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

  // NEW SECTIONS
  certificationsSection,
  journeyTimeline,
  caseStudiesSection
};