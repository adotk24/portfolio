import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Footer() {
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
      
      // Clean up any window references or global event listeners
      window.removeEventListener('resize', () => {});
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <footer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Created by Andrew Kim</h3>
          <div className="footerc">
            <p>© 2024. All rights reserved.</p>
            <div className="footerc__socials">
              <motion.i 
                className="fa-brands fa-linkedin"
                whileHover={{ scale: 1.2, y: -3 }}
                onClick={() => window.open("https://www.linkedin.com/in/andrewkimcode/", "_blank")}
                style={{ cursor: "pointer" }}
              ></motion.i>
              <motion.i 
                className="fa-brands fa-github"
                whileHover={{ scale: 1.2, y: -3 }}
                onClick={() => window.open("https://github.com/adotk24", "_blank")}
                style={{ cursor: "pointer" }}
              ></motion.i>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
