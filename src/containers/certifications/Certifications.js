import React, {useContext} from "react";
import "./Certifications.scss";
import {certificationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {FaAward} from "react-icons/fa";
import {motion} from "framer-motion";

export default function Certifications() {
  const {isDark} = useContext(StyleContext);

  if (!certificationsSection.display) return null;

  return (
    <div className="main certifications-main" id="certifications">
      <h1 className={isDark ? "dark-mode title" : "title"}>
        {certificationsSection.title}
      </h1>
      <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
        {certificationsSection.subtitle}
      </p>

      <div className="certifications-grid">
        {certificationsSection.certifications.map((item, i) => (
          <motion.div
            key={i}
            className={isDark ? "cert-card dark-card" : "cert-card"}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: i * 0.05}}
            whileHover={{y: -5, scale: 1.01}}
          >
            <div className="cert-icon-wrapper">
              <FaAward size={24} />
            </div>
            <div className="cert-details">
              <p className="cert-name">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
