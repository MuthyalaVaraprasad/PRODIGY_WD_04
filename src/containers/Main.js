import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";

import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Certifications from "./certifications/Certifications";
import Timeline from "./timeline/Timeline";

// New Redesign Components
import Background3D from "../components/Background3D/Background3D";
import CodingProfiles from "./codingProfiles/CodingProfiles";
import Leadership from "./leadership/Leadership";
import WhyHireMe from "./whyHireMe/WhyHireMe";
import AIAssistant from "../components/AIAssistant/AIAssistant";
import PortalTransition from "../components/PortalTransition/PortalTransition";
import ContactModal from "../components/ContactModal/ContactModal";
import Dashboards from "./dashboards/Dashboards";
import CursorTrail from "../components/CursorTrail/CursorTrail";

// Framer Motion for uniform page transitions
import {motion} from "framer-motion";

const sectionVariants = {
  hidden: {opacity: 0, y: 70, scale: 0.93, rotateX: 10},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 90,
      duration: 0.8
    }
  }
};

const SectionWrapper = ({children}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.05}}
      variants={sectionVariants}
      style={{transformOrigin: "top center", perspective: "1200px"}}
    >
      {children}
    </motion.div>
  );
};

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [showPortal, setShowPortal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    window.triggerPortalOpen = url => {
      setShowPortal(true);
      setTimeout(() => {
        const win = window.open(url, "_blank");
        if (win) win.focus();
        setShowPortal(false);
      }, 1600);
    };
    window.triggerContactModal = () => {
      setShowContactModal(true);
    };
    return () => {
      window.triggerPortalOpen = null;
      window.triggerContactModal = null;
    };
  }, []);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Background3D />
        <CursorTrail />
        <PortalTransition isOpen={showPortal} />
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <SectionWrapper>
              <Greeting />
            </SectionWrapper>
            <SectionWrapper>
              <Skills />
            </SectionWrapper>
            <SectionWrapper>
              <WhyHireMe />
            </SectionWrapper>
            <SectionWrapper>
              <Education />
            </SectionWrapper>
            <SectionWrapper>
              <Certifications />
            </SectionWrapper>
            <SectionWrapper>
              <Timeline />
            </SectionWrapper>
            <SectionWrapper>
              <WorkExperience />
            </SectionWrapper>
            <SectionWrapper>
              <Leadership />
            </SectionWrapper>
            <SectionWrapper>
              <Projects />
            </SectionWrapper>
            <SectionWrapper>
              <Dashboards />
            </SectionWrapper>
            <SectionWrapper>
              <CodingProfiles />
            </SectionWrapper>
            <SectionWrapper>
              <Achievement />
            </SectionWrapper>
            <SectionWrapper>
              <Blogs />
            </SectionWrapper>
            <SectionWrapper>
              <Talks />
            </SectionWrapper>
            <SectionWrapper>
              <Twitter />
            </SectionWrapper>
            <SectionWrapper>
              <Podcast />
            </SectionWrapper>

            <Footer />
            <ScrollToTopButton />
            <AIAssistant />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
