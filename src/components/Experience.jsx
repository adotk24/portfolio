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
      title: "Software Engineer",
      company: "Saleo",
      period: "Aug 2023 – Feb 2024",
      achievements: [
        "Collaborated with cross-functional teams to deliver key product features, resulting in improved user engagement and overall product performance.",
        "Developed and maintained web applications using modern JavaScript frameworks, contributing to a 40% increase in application responsiveness.",
        "Participated in code reviews and implemented best practices, leading to a 30% reduction in bugs and improved code quality.",
        "Worked closely with designers and product managers to translate requirements into technical solutions."
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