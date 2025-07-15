import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../images/hero-pfp.webp";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css3.svg";
import Js from "../images/icons/javascript.svg";
import ReactIcon from "../images/icons/react.svg";
import Python from '../images/icons/python.webp'
import Node from '../images/icons/node.svg'
import Flask from '../images/icons/flask.webp'


function Hero() {
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

  // Optimize tech stack array to prevent unnecessary re-renders
  const techStack = React.useMemo(() => [
    { icon: Js, title: "JavaScript" },
    { icon: null, title: "TypeScript", isIcon: true },
    { icon: ReactIcon, title: "React" },
    { icon: Node, title: "Node.js" },
    { icon: Python, title: "Python" },
    { icon: Html, title: "HTML5" },
    { icon: Css, title: "CSS3" },
    { icon: Flask, title: "Flask" }
  ], []);

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
            <div className="hero-main">
              <motion.div 
                className="left-hero"
                variants={itemVariants}
              >
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Hey I'm Andrew
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Full-stack Software Engineer based in Dallas, Texas!
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

              <motion.div 
                className="right-hero"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.img 
                  src={HeroImg} 
                  alt="Andrew Kim" 
                  className="hero-profile-img"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.3 }}
                />
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
                  {techStack.map((tech, index) => (
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
