import React from "react";
import "./CertificateModal.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaAward, FaCheckCircle, FaRegCopy, FaShareAlt } from "react-icons/fa";

// Import internship logos
import prodigyLogo from "../../assets/images/prodigy_infotech_logo.png";
import codealphaLogo from "../../assets/images/codealpha_logo.png";
import futureInternsLogo from "../../assets/images/future_interns_logo.png";

export default function CertificateModal({ isOpen, onClose, cert, isDark }) {
  if (!cert) return null;

  // Map logo strings to actual imported images
  const getLogo = (logo) => {
    switch (logo) {
      case "prodigy":
        return <img src={prodigyLogo} alt="Prodigy Logo" className="cert-modal-logo" />;
      case "codealpha":
        return <img src={codealphaLogo} alt="CodeAlpha Logo" className="cert-modal-logo" />;
      case "future_interns":
        return <img src={futureInternsLogo} alt="Future Interns Logo" className="cert-modal-logo" />;
      default:
        return <FaAward size={36} className="cert-modal-default-icon" style={{ color: cert.color || "#ca8a04" }} />;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Credential ID: ${cert.credentialId}`);
    alert("Credential ID copied to clipboard!");
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/`;
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cert-modal-overlay">
          {/* Backdrop */}
          <motion.div
            className="cert-modal-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className={isDark ? "cert-modal-card dark-cert-modal" : "cert-modal-card"}
            initial={{ scale: 0.85, rotateX: 10, opacity: 0 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
            exit={{ scale: 0.85, rotateX: -10, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            style={{ "--brand-color": cert.color }}
          >
            {/* Close Button */}
            <button className="cert-modal-close" onClick={onClose} aria-label="Close modal">
              <FaTimes size={18} />
            </button>

            {/* The Certificate Paper */}
            <div className="certificate-paper">
              {/* Background Watermark/Grid */}
              <div className="cert-watermark-bg"></div>

              {/* Certificate Borders */}
              <div className="cert-inner-border"></div>

              {/* Top Header */}
              <div className="cert-header">
                <div className="cert-logo-wrapper">
                  {getLogo(cert.logo)}
                </div>
                <h5 className="cert-credential-badge">
                  <FaCheckCircle className="badge-icon" /> OFFICIAL DIGITAL CREDENTIAL
                </h5>
              </div>

              {/* Title & Organization */}
              <h2 className="cert-main-title">CERTIFICATE OF COMPLETION</h2>
              <p className="cert-subtitle">THIS IS PROUDLY PRESENTED TO</p>

              {/* Candidate Name */}
              <h1 className="cert-recipient-name">Muthyala Varaprasad</h1>

              {/* Completion Statement */}
              <p className="cert-statement">
                for successfully fulfilling all academic and project requirements for the course
                <br />
                <span className="cert-course-name">"{cert.title}"</span>
                <br />
                issued by <strong className="cert-org-name">{cert.issuer}</strong>.
              </p>

              {/* Signature, Badge & ID Grid */}
              <div className="cert-footer">
                <div className="cert-footer-col sig-col">
                  <div className="signature-line">
                    <span className="handwritten-sig">Varaprasad</span>
                  </div>
                  <p className="footer-label">Recipient Signature</p>
                </div>

                <div className="cert-footer-col badge-col">
                  <div className="hologram-seal">
                    <div className="seal-outer"></div>
                    <div className="seal-inner">
                      <FaAward className="seal-icon" />
                    </div>
                  </div>
                </div>

                <div className="cert-footer-col info-col">
                  <p className="cert-date">Date: <strong>{cert.date}</strong></p>
                  <p className="cert-id">ID: <strong>{cert.credentialId}</strong></p>
                </div>
              </div>
            </div>

            {/* Under-Certificate Verification Actions */}
            <div className="cert-actions">
              <button className="cert-action-btn copy-btn" onClick={copyToClipboard}>
                <FaRegCopy /> Copy ID
              </button>
              <a
                href="https://www.linkedin.com/in/muthyala-varaprasad-5b95b7364/"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-action-btn verify-btn"
              >
                <FaExternalLinkAlt /> Verify Credential
              </a>
              <button className="cert-action-btn share-btn" onClick={shareToLinkedIn}>
                <FaShareAlt /> Share
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
