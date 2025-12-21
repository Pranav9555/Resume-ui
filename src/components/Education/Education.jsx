import "./Education.scss";
import {education} from "../../data/resume.json";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="education">
      <h2 className="title">Education</h2>

      <div className="education-container">
        {education.map((edu, index) => (
          <motion.div
            className="education-card"
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="degree">{edu.degree}</h2>

            <h4 className="college">{edu.college}</h4>

            <div className="detail">
              <p>{edu.year}</p>
              
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
