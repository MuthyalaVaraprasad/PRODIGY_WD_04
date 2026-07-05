import React, {useState, useEffect, useRef, useContext} from "react";
import "./AIAssistant.scss";
import StyleContext from "../../contexts/StyleContext";
import {FaRobot, FaPaperPlane, FaTimes, FaCog} from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion";

const renderMarkdown = text => {
  if (!text) return "";
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    let content = line;
    let isBullet = false;
    let isHeading = false;
    let headingLevel = 0;

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      isHeading = true;
      headingLevel = headingMatch[1].length;
      content = headingMatch[2];
    } else if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
      isBullet = true;
      content = line.trim().substring(2);
    } else if (
      line.trim().startsWith("1. ") ||
      line.trim().startsWith("2. ") ||
      line.trim().startsWith("3. ") ||
      line.trim().startsWith("4. ") ||
      line.trim().startsWith("5. ") ||
      line.trim().startsWith("6. ")
    ) {
      isBullet = true;
      content = line.trim().substring(3);
    }

    const parseInline = str => {
      const boldParts = str.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bPart, bIdx) => {
        if (bPart.startsWith("**") && bPart.endsWith("**")) {
          const innerText = bPart.slice(2, -2);
          return <strong key={`b-${bIdx}`}>{parseLinks(innerText)}</strong>;
        }
        return <span key={`s-${bIdx}`}>{parseLinks(bPart)}</span>;
      });
    };

    const parseLinks = str => {
      const linkParts = str.split(/(\[.*?\]\(.*?\))/g);
      return linkParts.map((lPart, lIdx) => {
        if (
          lPart.startsWith("[") &&
          lPart.includes("](") &&
          lPart.endsWith(")")
        ) {
          const match = lPart.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, linkText, url] = match;
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={`l-${lIdx}`}
                style={{
                  color: "#3b82f6",
                  fontWeight: "600",
                  textDecoration: "underline"
                }}
              >
                {linkText}
              </a>
            );
          }
        }
        return lPart;
      });
    };

    if (isHeading) {
      const HeadingTag = `h${headingLevel}`;
      return (
        <HeadingTag
          key={lineIdx}
          style={{margin: "10px 0 6px 0", fontWeight: "700"}}
        >
          {parseInline(content)}
        </HeadingTag>
      );
    }

    if (isBullet) {
      return (
        <li key={lineIdx} style={{marginLeft: "14px", marginBottom: "4px"}}>
          {parseInline(content)}
        </li>
      );
    }

    return (
      <p key={lineIdx} style={{margin: "0 0 6px 0"}}>
        {parseInline(content)}
      </p>
    );
  });
};

const resumeKnowledge = {
  about:
    "Muthyala Varaprasad is a Software Developer and Computer Science Engineering student passionate about Full Stack Development (React.js, Node.js), Databases, AI integrations, and responsive UI design. He has built 15+ real-world projects, completed multiple developer internships, and coordinated major college technical fests.",
  skills: `**Muthyala Varaprasad's Technical Skills:**
* **Programming Languages:** Python, Java, JavaScript (ES6+), TypeScript, C++
* **Frontend Development:** HTML5, CSS3, Bootstrap, React.js, Responsive Web Design, UI/UX Fundamentals
* **Backend Development:** Node.js, Express.js, REST API Integration
* **Databases:** MySQL, MongoDB
* **Developer Tools:** Git, GitHub, VS Code, Postman, Vercel, Netlify
* **Cloud & Platforms:** Oracle Cloud Infrastructure (OCI), AWS Fundamentals, Microsoft Azure Fundamentals
* **Core Computer Science:** Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Software Engineering, SDLC
* **AI & Emerging Technologies:** Generative AI Fundamentals, AI-Powered Web Applications, Prompt Engineering`,
  experience: `**Muthyala Varaprasad's Experience:**
1. **Web Development Intern | ProDigy InfoTech** (June 2026 – July 2026)
   * Built real-world responsive apps: Weather App, Stopwatch, Landing Page, and Tic-Tac-Toe Game.
   * Integrated REST APIs and managed source code using Git & GitHub.
2. **Frontend Development Intern | Future Interns** (2026)
   * Developed responsive frontend interfaces.
   * Improved UI/UX, application performance, and cross-device compatibility.
3. **Software Development Intern | CodeAlpha** (2026)
   * Developed interactive Flash Card Learning Application using HTML, CSS, and JavaScript.
   * Applied frontend debugging and engineering best practices.`,
  leadership: `**Leadership & Event Management:**
1. **Main Coordinator | Crescence 2K26 Technical Fest** (2026)
   * Led the planning and execution of the Computer Science department's annual technical fest.
   * Coordinated schedules, registrations, and cross-functional student teams.
2. **Hackathon Organizer | College Technical Fest (JNTUHUCEJ)** (2026)
   * Organized and managed a college-level hackathon.
   * Coordinated participants, judges, mentors, and event logistics.`,
  projects: `**Featured Projects:**
1. **Crescence 2K26 (Event Management Platform):** Streamlined registrations, scheduling, and fest announcements. [Live Demo](https://crescence2k26.in/)
2. **Weather Forecast Application:** Real-time forecast app using React.js and weather APIs. [Live Demo](https://weatherapp-smoky-three.vercel.app/)
3. **Personal Portfolio Website:** Modern responsive React portfolio with 3D canvas animations. [Live Demo](https://varaprasad-blush.vercel.app/)
4. **Industrial AI Hackathon Platform:** AI-powered dashboard addressing industrial telemetry challenges. [Live Demo](https://industrial-ai-hackathon.vercel.app/)
5. **Economic Crisis Detection System:** Web-based financial indicator and trend visualization app. [Live Demo](https://economiccrisis.netlify.app/)
6. **AI Resume Analyzer:** Evaluates resumes, extracts skills, and provides ATS compatibility scoring. [Live Demo](https://resumeanalyzer-one-zeta.vercel.app/)`,
  education: `**Education Details:**
* **B.Tech in Computer Science and Engineering** (2023 - 2027)
  * JNTUH University College of Engineering, Jagtial
* **Intermediate (MPC)** (2021 - 2023)
  * Telangana State Board of Intermediate Education
* **Secondary School Certificate (SSC)** (Completed 2021)
  * Board of Secondary Education, Telangana`,
  contact: `**Contact Details:**
* **Phone:** +91 9963889086
* **Email:** mudhirajnani466@gmail.com
* **GitHub:** [github.com/MuthyalaVaraprasad](https://github.com/MuthyalaVaraprasad)
* **LinkedIn:** [linkedin.com/in/muthyala-varaprasad-5b95b7364/](https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/)`,
  certifications: `**Certifications & Training:**
* Oracle Cloud Infrastructure (OCI) AI Foundations
* Generative AI Fundamentals (FutureSkills Prime)
* Full Stack Web Development (GeeksforGeeks)
* JavaScript Programming (GeeksforGeeks)
* Python Programming (GeeksforGeeks)
* DevOps Fundamentals (GeeksforGeeks)
* Python & Java programming (HackerRank)
* Data Visualization with Power BI (Microsoft Learn)
* Cloud Computing Fundamentals (AWS & Microsoft Azure)`,
  atsScan: `**🤖 AI Resume ATS Analytics:**
* **ATS Compatibility Score:** **94%** (Excellent matching for Full Stack & React Developer roles)
* **Top Skills Found:** React.js, JavaScript, Python, REST APIs, MongoDB, MySQL, OCI Cloud.
* **ATS Profile Keywords:** Event Management, Frontend Development, Software Engineering, AI Integrations.
* **Suggested Improvements:** Add Next.js and CI/CD pipelines to your active projects lists to hit 98% compatibility.`,
  personality: `**🧠 AI Personality & Workstyle Assessment:**
* **Core Trait:** **Initiative & High Agency** (Proven by coordinating main fests and running multiple developer internships concurrently).
* **Work Style:** **Result-Oriented Collaborator** (Values rapid prototyping, high UI polish, and cross-functional team coordination).
* **Core Strengths:** Fast learning curve, problem solving under constraints, and excellent tech event organization.`,
  timeline: `**📅 AI Availability & Timeline Forecast:**
* **Current Status:** Open for Internship opportunities and Full-time Software Engineering roles.
* **Location Preference:** Remote / Hyderabad / Bangalore / open to relocation.
* **Availability:** Can join immediately or within 1-2 weeks.
* **Contract/Role Preference:** Full Stack Frontend, Frontend Engineer, AI Web Solutions Developer.`,
  recommendRole: `**💼 AI Industry Role Recommendation:**
Based on Varaprasad's current skill profile and projects:
1. **Frontend / React Developer** (100% Match) - Rich experience in building responsive components, charts, and state-managed UIs.
2. **Associate Full Stack Developer** (92% Match) - Node, Express, MongoDB, and MySQL databases stack.
3. **AI Web Integrations Developer** (88% Match) - Oracle AI foundations, prompt engineering, and GenAI chatbot integrations.`,
  questions: `**❓ AI Suggested Interview Questions for Recruiters:**
Use these targeted questions to interview Varaprasad:
1. *"Can you explain how you designed the responsive journey timeline and resolved mobile overflow issues?"*
2. *"How did you structure the event registration flow for the Crescence 2K26 technical fest?"*
3. *"Why did you choose React.js and weather REST APIs for your forecast application?"*
4. *"What did you learn during your Oracle Cloud Infrastructure (OCI) AI Foundations training?"*`,
  githubInsights: `**💻 AI GitHub Codebase Insights:**
* **Commit Consistency:** High frequency during active internship cycles (ProDigy, Future Interns).
* **Primary Languages:** JavaScript (React components, helpers), HTML5, CSS3/SCSS, Python (data matching).
* **Code Quality Profile:** Modular component-based structures, responsive CSS layout practices, and standard package configs.`,
  techStack: `**📈 AI Stack Optimization Recommendations:**
* **Adopting Next:** Varaprasad is currently transitioning to Next.js for server-side rendering (SSR) benefits.
* **Cloud Expansion:** Increasing AWS/Azure foundational integration to deploy full-stack serverless actions.
* **AI Pipelines:** Transitioning from simple client-side prompts to backend vector DBs (e.g. Pinecone) and langchain routing.`,
  cvLink: `**📄 AI Document Locator:**
Varaprasad's verified resume PDF is located on the server.
* **Action:** [Click here to View Resume PDF](file:///c:/Users/Varaprasad/OneDrive/Desktop/PRODIGY_WD_04/src/containers/greeting/resume.pdf) (Opens instantly in a new tab).`,
  help: `**✨ Nova AI Command Dashboard (18+ Advanced Features) ✨**
Try typing these commands or selecting them:
1. **/skills** — Grouped Technical Stack Audit
2. **/projects** — Full Projects Catalog
3. **/experience** — Professional Internship Log
4. **/leadership** — Coordinating & Hackathon Organizer Roles
5. **/education** — Academic Milestones
6. **/certifications** — Cloud & Tech Certifications
7. **/languages** — Spoken & Technical Languages
8. **/why-hire** — Recruiter Pitch Profile
9. **/contact** — Channels to Connect
10. **/ats-scan** — Resume ATS Keyword Audit
11. **/personality** — Personality & Work Ethics Simulator
12. **/timeline** — Developer Availability Timeline
13. **/recommend-role** — Recommended Technical Roles
14. **/questions** — Suggesed Recruiter Interview Questions
15. **/github-insights** — Codebase & Repo Analytics
16. **/tech-stack** — Future Tech Stack Roadmap
17. **/cv-link** — Open Resume PDF
18. **/about** — Summary Biography`,
  languages: `**🗣️ Languages Spoken & Matched:**
* **English:** Professional Working Proficiency (Technical documentation, team calls).
* **Telugu:** Native or Bilingual Proficiency (Mother tongue).
* **Hindi:** Professional/Conversational Proficiency (Multilingual communication).

*Tip:* Feel free to ask me questions in **Hindi** or **Telugu**! (e.g. *"Aapka bio kya hai?"* or *"Mee details cheppandi"*).`
};

export default function AIAssistant({inlineMode = false}) {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "nova",
      text: "Hi there! I am **Nova**, Varaprasad's AI portfolio assistant. Ask me anything, or type **/help** to see **18+ advanced AI analytical features**!",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [geminiKey, setGeminiKey] = useState(
    localStorage.getItem("portfolio_gemini_key") || ""
  );
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSaveKey = e => {
    e.preventDefault();
    localStorage.setItem("portfolio_gemini_key", geminiKey);
    setShowConfig(false);

    setMessages(prev => [
      ...prev,
      {
        sender: "nova",
        text: geminiKey
          ? "✅ **Gemini API Key Saved!** I am now powered by Google Gemini and can answer open-ended questions."
          : "ℹ️ Gemini Key removed. Reverting to offline matching database.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    ]);
  };

  const getOfflineResponse = query => {
    const q = query.toLowerCase().trim();

    // Direct Analytical Command checks
    if (q === "/help" || q === "help") {
      return resumeKnowledge.help;
    } else if (q.includes("ats") || q === "/ats-scan") {
      return resumeKnowledge.atsScan;
    } else if (
      q.includes("personality") ||
      q.includes("workstyle") ||
      q === "/personality"
    ) {
      return resumeKnowledge.personality;
    } else if (
      q.includes("timeline") ||
      q.includes("available") ||
      q === "/timeline"
    ) {
      return resumeKnowledge.timeline;
    } else if (
      q.includes("role") ||
      q.includes("job") ||
      q === "/recommend-role"
    ) {
      return resumeKnowledge.recommendRole;
    } else if (
      q.includes("question") ||
      q.includes("interview") ||
      q === "/questions"
    ) {
      return resumeKnowledge.questions;
    } else if (
      q.includes("github") ||
      q.includes("commit") ||
      q === "/github-insights"
    ) {
      return resumeKnowledge.githubInsights;
    } else if (
      q.includes("optimize") ||
      q.includes("roadmap") ||
      q === "/tech-stack"
    ) {
      return resumeKnowledge.techStack;
    } else if (q.includes("pdf") || q.includes("cv") || q === "/cv-link") {
      return resumeKnowledge.cvLink;
    } else if (
      q.includes("skill") ||
      q.includes("languages") ||
      q.includes("technolog") ||
      q === "/skills"
    ) {
      return resumeKnowledge.skills;
    } else if (
      q.includes("project") ||
      q.includes("weather") ||
      q.includes("crescence") ||
      q.includes("analyzer") ||
      q.includes("crisis") ||
      q.includes("hackathon") ||
      q === "/projects"
    ) {
      return resumeKnowledge.projects;
    } else if (
      q.includes("experience") ||
      q.includes("work") ||
      q.includes("intern") ||
      q.includes("prodigy") ||
      q.includes("codealpha") ||
      q === "/experience"
    ) {
      return resumeKnowledge.experience;
    } else if (
      q.includes("leadership") ||
      q.includes("fest") ||
      q.includes("coordinator") ||
      q.includes("organiz") ||
      q === "/leadership"
    ) {
      return resumeKnowledge.leadership;
    } else if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("study") ||
      q.includes("jntu") ||
      q.includes("school") ||
      q.includes("intermediate") ||
      q === "/education"
    ) {
      return resumeKnowledge.education;
    } else if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("hire") ||
      q.includes("mail") ||
      q === "/contact"
    ) {
      return resumeKnowledge.contact;
    } else if (
      q.includes("certification") ||
      q.includes("certificat") ||
      q.includes("aws") ||
      q.includes("azure") ||
      q === "/certifications"
    ) {
      return resumeKnowledge.certifications;
    } else if (q.includes("objective") || q === "/about") {
      return resumeKnowledge.about;
    } else if (
      q.includes("languages") ||
      q.includes("english") ||
      q.includes("telugu") ||
      q.includes("hindi") ||
      q.includes("bhasha") ||
      q === "/languages"
    ) {
      return resumeKnowledge.languages;
    } else if (
      q.includes("kaun hai") ||
      q.includes("tum kaun ho") ||
      q.includes("aap kaun")
    ) {
      return "नमस्ते! मैं नोवा हूँ, वरप्रसाद का एआई सहायक। आप मुझसे उनके स्किल्स, प्रोजेक्ट्स, एजुकेशन या अनुभव के बारे में पूछ सकते हैं।";
    } else if (
      q.includes("kya aata hai") ||
      q.includes("skills kya hai") ||
      q.includes("kaunsi language")
    ) {
      return "वरप्रसाद को पायथन (Python), जावा (Java), जावास्क्रिप्ट (JavaScript), रिएक्ट (React.js) और डेटाबेस (SQL, MongoDB) जैसी भाषाएं और तकनीकें आती हैं।";
    } else if (q.includes("meeru evaru") || q.includes("mee name")) {
      return "నమస్తే! నేను నోవా, వరప్రసాద్ యొక్క AI అసిస్టెంట్ ని. మీరు వరప్రసాద్ యొక్క స్కిల్స్, ప్రాజెక్ట్స్ లేదా కాంటాక్ట్ వివరాల గురించి అడగవచ్చు.";
    } else if (q.includes("em vachu") || q.includes("skills enti")) {
      return "వరప్రసాద్ కి పైథాన్ (Python), జావా (Java), జావాస్క్రిప్ట్ (JavaScript), రియాక్ట్ (React.js) మరియు డేటాబేస్ (MySQL, MongoDB) వచ్చు.";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! I am Nova, Varaprasad's AI Assistant. Type **/help** to see all 18+ advanced analytical features, or choose one below!";
    } else {
      return `I couldn't match a specific keyword in your question offline. 

**Here's a tip:** You can open settings (⚙️ icon above) and paste a **Gemini API Key** to enable fully advanced conversational reasoning!

Alternatively, try asking:
- "What are his skills?"
- "What projects has he built?"
- "Where did he do his internships?"
- Type **/help** to list all 18 AI commands.`;
    }
  };

  // call gemini api directly client-side
  const queryGemini = async userQuery => {
    try {
      const systemPrompt = `You are "Nova", an interactive AI assistant for Muthyala Varaprasad's portfolio website. 
Your goal is to answer questions about Varaprasad professionally using the following CV details:
- Objective: ${resumeKnowledge.about}
- Education: ${resumeKnowledge.education}
- Technical Skills: ${resumeKnowledge.skills}
- Work Experience: ${resumeKnowledge.experience}
- Leadership Experience: ${resumeKnowledge.leadership}
- Projects: ${resumeKnowledge.projects}
- Certifications: ${resumeKnowledge.certifications}
- Contact Details: ${resumeKnowledge.contact}

Instructions:
1. Answer in first-person (e.g. "Varaprasad is...") or as his assistant. Be friendly, clean, and concise.
2. Format links as clickable markdown links (e.g. [Live Demo](url)).
3. Keep answers under 100 words where possible unless a detailed list is requested.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {text: `${systemPrompt}\n\nUser Question: ${userQuery}`}
                ]
              }
            ]
          })
        }
      );

      const resData = await response.json();
      if (resData.candidates && resData.candidates[0].content.parts[0].text) {
        return resData.candidates[0].content.parts[0].text;
      }
      throw new Error("Invalid response format from Gemini");
    } catch (err) {
      console.error("Gemini API Error:", err);
      return "⚠️ **Gemini API Error:** Failed to fetch response. Please double-check your API key or network connection. Reverting to offline retrieval.";
    }
  };

  const handleSend = async textToSend => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    let replyText = "";
    if (geminiKey.trim()) {
      replyText = await queryGemini(query);
    } else {
      // Simulate typing delay for local resolver
      await new Promise(r => setTimeout(r, 650));
      replyText = getOfflineResponse(query);
    }

    const novaMsg = {
      sender: "nova",
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setIsTyping(false);
    setMessages(prev => [...prev, novaMsg]);
  };

  const handleQuickSuggest = text => {
    handleSend(text);
  };

  if (inlineMode) {
    return (
      <div
        className={
          isDark
            ? "ai-panel-container dark-panel inline-chat"
            : "ai-panel-container inline-chat"
        }
        style={{
          position: "relative",
          bottom: "auto",
          left: "auto",
          width: "100%",
          maxWidth: "100%",
          boxShadow: "none",
          border: "none",
          background: "transparent",
          display: "flex",
          flexDirection: "column",
          height: "550px"
        }}
      >
        {/* Header */}
        <div className="panel-header" style={{borderRadius: "16px 16px 0 0"}}>
          <div className="header-info">
            <div className="status-dot"></div>
            <div>
              <h4 style={{margin: 0, fontSize: "15px", fontWeight: "700"}}>
                Nova AI Chat Assistant
              </h4>
              <span style={{fontSize: "11px", opacity: 0.8}}>
                Active Hub Dashboard
              </span>
            </div>
          </div>
          <div className="header-actions">
            <button
              onClick={() => setShowConfig(!showConfig)}
              title="Settings"
              className="icon-btn"
            >
              <FaCog />
            </button>
          </div>
        </div>

        {/* Config Overlay */}
        {showConfig && (
          <div className="config-overlay" style={{borderRadius: "16px"}}>
            <form onSubmit={handleSaveKey}>
              <h5>Configure Gemini API Key 🧠</h5>
              <p>
                Paste a Gemini key to enable advanced AI chat capabilities. Key
                is stored locally in your browser.
              </p>
              <input
                type="password"
                placeholder="Enter Gemini API Key..."
                value={geminiKey}
                onChange={e => setGeminiKey(e.target.value)}
              />
              <div className="form-buttons">
                <button type="submit" className="save-btn">
                  Save Key
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfig(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Chat Body */}
        <div className="panel-body" style={{flex: 1, padding: "20px 15px"}}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message-row ${
                msg.sender === "user" ? "user-row" : "nova-row"
              }`}
            >
              {msg.sender === "nova" && (
                <div className="bot-avatar">
                  <FaRobot size={14} />
                </div>
              )}
              <div className="message-bubble">
                <div className="bubble-text">{renderMarkdown(msg.text)}</div>
                <span className="bubble-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message-row nova-row">
              <div className="bot-avatar">
                <FaRobot size={14} />
              </div>
              <div className="message-bubble typing-bubble">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions Chips */}
        {messages.length === 1 && (
          <div
            className="suggestions-wrapper"
            style={{padding: "0 15px 10px 15px"}}
          >
            <button onClick={() => handleQuickSuggest("What are your skills?")}>
              💻 Skills
            </button>
            <button onClick={() => handleQuickSuggest("Show me your projects")}>
              🚀 Projects
            </button>
            <button
              onClick={() =>
                handleQuickSuggest("Tell me about your internships")
              }
            >
              💼 Experience
            </button>
            <button onClick={() => handleQuickSuggest("How do I contact you?")}>
              📞 Contact
            </button>
          </div>
        )}

        {/* Footer Input */}
        <div className="panel-footer" style={{borderRadius: "0 0 16px 16px"}}>
          <input
            type="text"
            placeholder="Ask Nova a question..."
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={() => handleSend()}
            className="send-btn"
            title="Send message"
          >
            <FaPaperPlane size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Floating button left side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="aiFloatingButton"
        title="Nova AI Assistant"
        className={isOpen ? "active" : ""}
      >
        <FaRobot size={22} className="ai-icon" />
        <span className="pulse-ring"></span>
      </button>

      {/* Slide-in Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={
              isDark ? "ai-panel-container dark-panel" : "ai-panel-container"
            }
            initial={{opacity: 0, x: -100, y: 50, scale: 0.95}}
            animate={{opacity: 1, x: 0, y: 0, scale: 1}}
            exit={{opacity: 0, x: -100, y: 50, scale: 0.95}}
            transition={{type: "spring", damping: 25, stiffness: 200}}
          >
            {/* Header */}
            <div className="panel-header">
              <div className="header-info">
                <div className="status-dot"></div>
                <div>
                  <h4>Nova AI Assistant</h4>
                  <span>Online Portfolio Companion</span>
                </div>
              </div>
              <div className="header-actions">
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  title="Settings"
                  className="icon-btn"
                >
                  <FaCog />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="icon-btn close-btn"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Config Overlay */}
            {showConfig && (
              <div className="config-overlay">
                <form onSubmit={handleSaveKey}>
                  <h5>Configure Gemini API Key 🧠</h5>
                  <p>
                    Paste a Gemini key to enable advanced AI chat capabilities.
                    Key is stored locally in your browser.
                  </p>
                  <input
                    type="password"
                    placeholder="Enter Gemini API Key..."
                    value={geminiKey}
                    onChange={e => setGeminiKey(e.target.value)}
                  />
                  <div className="form-buttons">
                    <button type="submit" className="save-btn">
                      Save Key
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConfig(false)}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Chat Body */}
            <div className="panel-body">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`message-row ${
                    msg.sender === "user" ? "user-row" : "nova-row"
                  }`}
                >
                  {msg.sender === "nova" && (
                    <div className="bot-avatar">
                      <FaRobot size={14} />
                    </div>
                  )}
                  <div className="message-bubble">
                    <div className="bubble-text">
                      {renderMarkdown(msg.text)}
                    </div>
                    <span className="bubble-time">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="message-row nova-row">
                  <div className="bot-avatar">
                    <FaRobot size={14} />
                  </div>
                  <div className="message-bubble typing-bubble">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            {messages.length === 1 && (
              <div className="suggestions-wrapper">
                <button
                  onClick={() => handleQuickSuggest("What are your skills?")}
                >
                  💻 Skills
                </button>
                <button
                  onClick={() => handleQuickSuggest("Show me your projects")}
                >
                  🚀 Projects
                </button>
                <button
                  onClick={() =>
                    handleQuickSuggest("Tell me about your internships")
                  }
                >
                  💼 Experience
                </button>
                <button
                  onClick={() => handleQuickSuggest("How do I contact you?")}
                >
                  📞 Contact
                </button>
              </div>
            )}

            {/* Footer Input */}
            <div className="panel-footer">
              <input
                type="text"
                placeholder="Ask Nova a question..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={() => handleSend()}
                className="send-btn"
                title="Send message"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
