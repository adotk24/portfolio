// import "../dist/styles.css";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Waving from "../images/waving.png";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css3.svg";
import Js from "../images/icons/javascript.svg";
import ReactIcon from "../images/icons/react.svg";
import Python from '../images/icons/python.png'
import Node from '../images/icons/node.svg'
import Flask from '../images/icons/flask.png'
import Docker from '../images/icons/docker.png'

function Hero() {
  const wavingAnimationControls = useAnimation();
  const componentMounted = useRef(true);

  useEffect(() => {
    // Start the waving animation
    const startWavingAnimation = async () => {
      while (componentMounted.current) {
        try {
          await wavingAnimationControls.start({
            rotate: [0, 20, -10, 0],
            transition: { duration: 2, ease: "easeInOut" }
          });
          // Add a small delay between animations to prevent excessive CPU usage
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          // Animation was cancelled, which is normal when component unmounts
          break;
        }
      }
    };

    startWavingAnimation();

    // Cleanup function
    return () => {
      componentMounted.current = false;
      wavingAnimationControls.stop();
    };
  }, [wavingAnimationControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <motion.div 
            className="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-main centered">
              <motion.div 
                className="hero-text"
                variants={itemVariants}
              >
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Hey there, I'm Andrew
                  <motion.img 
                    src={Waving} 
                    alt="waving_hand"
                    animate={wavingAnimationControls}
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Full-stack Software Engineer currently based in Dallas, Texas!
                </motion.p>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/andrewkimcode/"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </motion.a>
                  <motion.a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/adotk24"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-brands fa-github"></i>
                  </motion.a>
                  <motion.a 
                    href='./MyResume.pdf'
                    target='_blank'
                    rel='noreferrer'
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-solid fa-print"></i>
                  </motion.a>
                </motion.span>
              </motion.div>
            </div>

            <motion.div 
              className="skills"
              variants={itemVariants}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                Tech Stack
              </motion.p>
              <motion.div 
                className="logos"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ul>
                  {[
                    { icon: Js, title: "JavaScript" },
                    { icon: null, title: "TypeScript", isIcon: true },
                    { icon: ReactIcon, title: "React" },
                    { icon: Node, title: "Node.js" },
                    { icon: Python, title: "Python" },
                    { icon: Html, title: "HTML5" },
                    { icon: Css, title: "CSS3" },
                    { icon: Flask, title: "Flask" }
                  ].map((tech, index) => (
                    <motion.li
                      key={index}
                      variants={skillVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech.isIcon ? (
                        <div style={{ 
                          fontSize: '5.5rem', 
                          color: '#3178c6', 
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }} title={tech.title}>
                          TS
                        </div>
                      ) : (
                        <img src={tech.icon} title={tech.title} alt="program_img" />
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
