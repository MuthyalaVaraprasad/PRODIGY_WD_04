import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {motion} from "framer-motion";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="skills-categories-grid">
      {skillsSection.softwareSkills.map((cat, i) => (
        <motion.div
          key={i}
          className={isDark ? "skill-cat-card dark-card" : "skill-cat-card"}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: i * 0.08}}
          whileHover={{y: -4}}
        >
          <h3 className="category-title">{cat.category}</h3>
          <div className="badges-wrapper">
            {cat.skills.map((skill, idx) => (
              <span
                key={idx}
                className={isDark ? "skill-badge dark-badge" : "skill-badge"}
              >
                <i className={`${skill.fontAwesomeClassname} badge-icon`}></i>
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
