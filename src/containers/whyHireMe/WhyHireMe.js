import React, {useContext} from "react";
import "./WhyHireMe.scss";
import {whyHireMe} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {FaCode, FaLayerGroup, FaMicrochip, FaUsers} from "react-icons/fa";
import {motion} from "framer-motion";

export default function WhyHireMe() {
  const {isDark} = useContext(StyleContext);

  if (!whyHireMe.display) return null;

  const getIcon = iconName => {
    switch (iconName) {
      case "code":
        return <FaCode size={30} />;
      case "layers":
        return <FaLayerGroup size={30} />;
      case "cpu":
        return <FaMicrochip size={30} />;
      case "users":
        return <FaUsers size={30} />;
      default:
        return null;
    }
  };

  return (
    <div className="main why-hire-main" id="whyHireMe">
      <h1 className={isDark ? "dark-mode title" : "title"}>
        {whyHireMe.title}
      </h1>
      <p className={isDark ? "dark-mode subtitle" : "subtitle"}>
        {whyHireMe.subtitle}
      </p>

      <div className="why-hire-grid">
        {whyHireMe.cards.map((card, i) => (
          <motion.div
            key={i}
            className={isDark ? "why-card dark-card" : "why-card"}
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: i * 0.1}}
            whileHover={{y: -6}}
          >
            <div className="why-icon-wrapper">{getIcon(card.icon)}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
