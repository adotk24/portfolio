import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  // Optimize experiences data to prevent unnecessary re-renders
  const experiences = React.useMemo(() => [
    {
      title: "Software Engineer II",
      company: "Saleo",
      period: "Feb 2024 – Present",
      achievements: [
        "Integrated AI-powered automation into internal tools using Python and JavaScript/TypeScript, enhancing engineering efficiency, streamlining workflows, and reducing manual workload by 250%.",
        "Automated API monitoring with Playwright (JavaScript/TypeScript), proactively identifying issues, reducing customer disruptions by 75%, and minimizing required changes.",
        "Built seamless integrations with 30+ customer websites using React and TypeScript, improving user experience and data accuracy across platforms.",
        "Spearheaded development of reusable React components with TypeScript, cutting development time by 80% and ensuring UI consistency."
      ]
    },
    {
      title: "Software Engineer I",
      company: "Saleo",
      period: "Jan 2023 – Feb 2024",
      achievements: [
        "Developed Python backend scripts to streamline data flow, improving integration scalability by 30%.",
        "Designed TypeScript interfaces to securely connect client backends with our platform.",
        "Revamped React/JavaScript frontend interfaces, boosting user engagement by 25% and simplifying workflows."
      ]
    },
    {
      title: "Software Engineer",
      company: "Scale AI",
      period: "Feb 2022 – Jan 2023",
      achievements: [
        "Developed a React/TypeScript interface for 10,000+ users to rate and compare large language model (LLM) responses, ensuring AI data quality and sanitization.",
        "Evaluated AI responses using Python and JavaScript, reviewing 100+ weekly prompts to maintain performance and alignment with quality standards.",
        "Collaborated on full-stack tools with React, TypeScript, and Python to visualize LLM metrics, improving decision-making for AI model iterations."
      ]
    }
  ], []);

  return (
    <>
      <section id="experience" className="experience">
        <div className="container">
          <div className="experience-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="experience-header"
            >
              <p>experience</p>
              <h3>My Software Engineering Journey </h3>
              <h3>🚀</h3>
            </motion.div>

            <div className="experience-timeline">
              <div className="timeline-tabs">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    className={`timeline-tab ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="tab-content">
                      <span className="tab-title">{exp.title}</span>
                      <span className="tab-company">{exp.company}</span>
                      <span className="tab-period">{exp.period}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="timeline-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="experience-details"
                  >
                    <div className="experience-card">
                      <div className="card-header">
                        <h2>{experiences[activeTab].title}</h2>
                        <div className="company-info">
                          <h3>{experiences[activeTab].company}</h3>
                          <span className="location">{experiences[activeTab].location}</span>
                          <span className="period">{experiences[activeTab].period}</span>
                        </div>
                      </div>
                      <div className="achievements">
                        {experiences[activeTab].achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="achievement-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="achievement-bullet"></div>
                            <p>{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience; 