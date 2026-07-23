import React, {useContext} from "react";
import "./ContactModal.scss";
import {motion, AnimatePresence} from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaTimes
} from "react-icons/fa";
import StyleContext from "../../contexts/StyleContext";

export default function ContactModal({isOpen, onClose}) {
  const {isDark} = useContext(StyleContext);

  const contactOptions = [
    {
      name: "WhatsApp",
      value: "Chat on WhatsApp",
      url: "https://wa.me/919963889086?text=Hi%20Varaprasad,%20I'd%20like%20to%20discuss%20a%20job%20opportunity%20with%20you!",
      icon: <FaWhatsapp size={28} />,
      color: "#25D366",
      glowColor: "rgba(37, 211, 102, 0.4)"
    },
    {
      name: "Instagram",
      value: "@vara._.xfour5",
      url: "https://www.instagram.com/vara._.xfour5?igsh=MTNvZmdyZWR2d203Mw==",
      icon: <FaInstagram size={28} />,
      color: "#E1306C",
      glowColor: "rgba(225, 48, 108, 0.4)"
    },
    {
      name: "Phone Call",
      value: "+91 9963889086",
      url: "tel:+919963889086",
      icon: <FaPhone size={24} />,
      color: "#0078d4",
      glowColor: "rgba(0, 120, 212, 0.4)"
    },
    {
      name: "Email Address",
      value: "muthyalavaraprasad02@gmail.com",
      url: "mailto:muthyalavaraprasad02@gmail.com",
      icon: <FaEnvelope size={24} />,
      color: "#EA4335",
      glowColor: "rgba(234, 67, 53, 0.4)"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal-overlay">
          {/* Blur background clicks to close */}
          <motion.div
            className="modal-backdrop"
            onClick={onClose}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          />

          <motion.div
            className={
              isDark ? "contact-modal-card dark-modal" : "contact-modal-card"
            }
            initial={{scale: 0.9, opacity: 0, y: 50}}
            animate={{scale: 1, opacity: 1, y: 0}}
            exit={{scale: 0.9, opacity: 0, y: 50}}
            transition={{type: "spring", damping: 25, stiffness: 350}}
          >
            {/* Close button */}
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>

            {/* Header */}
            <div className="modal-header">
              <h2>Let's Connect! 🌟</h2>
              <p>
                Choose your preferred channel to discuss job opportunities,
                projects, or collaborations.
              </p>
            </div>

            {/* Grid of Options */}
            <div className="modal-grid">
              {contactOptions.map((opt, i) => (
                <motion.a
                  key={i}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                  style={{
                    "--hover-color": opt.color,
                    "--glow-color": opt.glowColor
                  }}
                  whileHover={{y: -6, scale: 1.02}}
                  transition={{type: "spring", stiffness: 300}}
                >
                  <div
                    className="icon-wrapper"
                    style={{backgroundColor: opt.color}}
                  >
                    {opt.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{opt.name}</h4>
                    <p>{opt.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="modal-footer">
              <p>
                Available for Full Stack Developer & AI integration
                opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
