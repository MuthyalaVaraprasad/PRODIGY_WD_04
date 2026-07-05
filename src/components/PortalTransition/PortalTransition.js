import React from "react";
import "./PortalTransition.scss";
import {motion, AnimatePresence} from "framer-motion";

export default function PortalTransition({isOpen}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="portal-overlay"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.3}}
        >
          {/* Futuristic Grid Background */}
          <div className="portal-grid"></div>

          {/* Glowing 3D Portal Ring */}
          <div className="portal-ring-container">
            <motion.div
              className="portal-ring ring-outer"
              initial={{scale: 0.1, rotateX: 70, rotateZ: 0, z: -500}}
              animate={{
                scale: [0.1, 1.2, 12],
                rotateX: [70, 75, 90],
                rotateZ: [0, 180, 720],
                z: [-500, 0, 1000]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="portal-ring ring-inner"
              initial={{scale: 0.05, rotateX: 65, rotateZ: 0, z: -600}}
              animate={{
                scale: [0.05, 1.0, 10],
                rotateX: [65, 70, 90],
                rotateZ: [0, -270, -1080],
                z: [-600, 0, 1200]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="portal-core"
              initial={{scale: 0, opacity: 0}}
              animate={{
                scale: [0, 1.5, 20],
                opacity: [0, 0.9, 1]
              }}
              transition={{
                duration: 1.5,
                ease: "easeIn"
              }}
            />
          </div>

          {/* Cyber Alert Message */}
          <motion.div
            className="portal-message"
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: [0, 1, 0]}}
            transition={{duration: 1.4, times: [0, 0.2, 1]}}
          >
            <h2>ESTABLISHING 3D PORTAL LINK</h2>
            <div className="portal-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
