import React from "react";
import { motion } from "framer-motion";

function Footer() {
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
