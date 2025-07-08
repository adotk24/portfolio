import React from "react";
import { motion } from "framer-motion";

function Contact() {
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

  const contactItems = [
    {
      icon: "fa-solid fa-envelope-open-text",
      title: "Mail",
      link: "mailto:adotkcodes@gmail.com",
      text: "adotkcodes@gmail.com"
    },
    {
      icon: "fa-brands fa-linkedin",
      title: "Connect",
      link: "https://www.linkedin.com/in/andrewkimcode/",
      text: "LinkedIn"
    },
    {
      icon: "fa-solid fa-print",
      title: "Download",
      link: "./MyResume.pdf",
      text: "Resume"
    }
  ];

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="contact__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="contact__title"
              variants={itemVariants}
            >
              <p>contact</p>
              <h3>Let's Connect! 👇</h3>
            </motion.div>
            
            <motion.div 
              className="contact__icons"
              variants={containerVariants}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact__icon-box"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(item.link, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  <motion.span
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={item.icon}></i>
                  </motion.span>
                  
                  <div className="contact__info">
                    <h3>{item.title}</h3>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.text}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
