import React, {useContext, useState} from "react";
import "./Certifications.scss";
import {certificationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {FaAward, FaEye} from "react-icons/fa";
import {motion} from "framer-motion";
import CertificateModal from "../../components/CertificateModal/CertificateModal";

export default function Certifications() {
  const {isDark} = useContext(StyleContext);
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

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
            whileHover={{y: -8, scale: 1.02}}
            onClick={() => handleCardClick(item)}
            style={{
              "--brand-color": item.color || "#ca8a04",
              borderLeft: `4px solid ${item.color || "#ca8a04"}`,
              cursor: "pointer"
            }}
          >
            <div className="cert-icon-wrapper" style={{color: item.color || "#ca8a04", background: `${item.color || "#ca8a04"}18`}}>
              <FaAward size={24} />
            </div>
            <div className="cert-details">
              <p className="cert-name">{item.title}</p>
              <div className="cert-footer-info">
                <span className="cert-issuer">{item.issuer}</span>
                <span className="cert-divider">•</span>
                <span className="cert-date">{item.date}</span>
              </div>
            </div>
            <div className="cert-view-badge">
              <FaEye className="view-icon" />
              <span>View</span>
            </div>
          </motion.div>
        ))}
      </div>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        cert={selectedCert}
        isDark={isDark}
      />
    </div>
  );
}
