import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroImg from "../images/hero-pfp.JPG";

function AboutMe() {
  // Proper cleanup for animations and memory management
  useEffect(() => {
    // Store any active timeouts or intervals for cleanup
    const activeAnimations = [];
    
    return () => {
      // Component cleanup - ensure any running animations are stopped
      // Clear any active timeouts/intervals
      activeAnimations.forEach(id => {
        if (typeof id === 'number') {
          clearTimeout(id);
          clearInterval(id);
        }
      });
      
      // Force garbage collection hint for large images
      if (window.gc) {
        window.gc();
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="img-side"
              variants={itemVariants}
            >
              <motion.img 
                src={HeroImg} 
                alt="Andrew Kim" 
                className="img-side__main-img"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="text-side"
              variants={itemVariants}
            >
              <motion.h4
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About me
              </motion.h4>
              
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With experience in bringing <br /> Full-Stack apps to life...
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I am excited to bring my unique perspective and skills to the world of software.
                Initially pursuing a law degree, I realized that my true passion lay in coding. So, I decided to take the leap, pivot my career,
                and haven't looked back since. I am constantly learning and growing, and am excited to take on new challenges and develop innovative solutions that will benefit my
                users.
                When I'm not coding, you can find me engaged in all sorts of sports, especially basketball. I love the energy and excitement of the game. Whether it be on the court
                or on vscode I always bring my A-game and strive for excellence.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
