import { motion } from "framer-motion";
import CountUp from "react-countup";
import { education } from "../education";
import { experience } from "../experience";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="about-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="highlight">Rohan Adhav</span>, a Computer
          Engineering graduate passionate about{" "}
          <strong>Full-Stack Development</strong>,{" "}
          <strong>AI solutions</strong>, and{" "}
          <strong>Data-driven insights</strong>. Always eager to learn,
          build, and innovate.
        </motion.p>

        {/* CountUp Stats */}
        <motion.div
          className="stats-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="stat-box"
          >
            <CountUp end={8.35} decimals={2} duration={2} /> CGPA
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="stat-box"
          >
            <CountUp end={15} duration={2} />+ Projects
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="stat-box"
          >
            <CountUp end={1} duration={2} /> Years Exp.
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Education */}
          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>
              <span aria-hidden="true">🎓</span> Education
            </h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.li
                  key={`${edu.year}-${edu.title}`}
                  variants={itemVariants}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="year">{edu.year}</span>
                    <h4>{edu.title}</h4>
                    <p>{edu.place}</p>
                    <small>{edu.details}</small>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>
              <span aria-hidden="true">💼</span> Experience
            </h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experience.map((exp) => (
                <motion.li
                  key={`${exp.year}-${exp.title}`}
                  variants={itemVariants}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="year">{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <p>{exp.place}</p>
                    <small>{exp.details}</small>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
