import React, {useContext} from "react";
import "./CodingProfiles.scss";
import {codingProfiles} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode, SiGeeksforgeeks} from "react-icons/si";
import {motion} from "framer-motion";

export default function CodingProfiles() {
  const {isDark} = useContext(StyleContext);

  if (!codingProfiles.display) return null;

  const getIcon = logo => {
    switch (logo) {
      case "github":
        return <FaGithub size={40} />;
      case "linkedin":
        return <FaLinkedin size={40} />;
      case "leetcode":
        return <SiLeetcode size={40} />;
      case "gfg":
        return <SiGeeksforgeeks size={40} />;
      default:
        return null;
    }
  };

  return (
    <div className="main coding-profiles-main" id="codingProfiles">
      <h1 className={isDark ? "dark-mode title" : "title"}>
        Coding & Professional Profiles 🚀
      </h1>
      <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
        Check out my code solving, developer repos, and professional network
        details
      </p>

      <div className="profiles-grid">
        {codingProfiles.profiles.map((profile, i) => (
          <motion.a
            key={i}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={isDark ? "profile-card dark-card" : "profile-card"}
            whileHover={{y: -8, scale: 1.02}}
            transition={{type: "spring", stiffness: 300}}
            style={{"--profile-hover-color": profile.color}}
          >
            <div
              className="profile-icon-wrapper"
              style={{color: profile.color}}
            >
              {getIcon(profile.logo)}
            </div>
            <div className="profile-details">
              <h3>{profile.name}</h3>
              <p>View my profile →</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
