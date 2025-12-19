import "./Education.scss";
import {education} from "../../data/resume.json";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div
            className="education-card"
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="degree">{edu.degree}</div>

            <div className="college">{edu.college}</div>

            <div className="meta">
              <span>{edu.year}</span>
              {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
              {edu.percentage && <span>{edu.percentage}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
