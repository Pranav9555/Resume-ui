import {skills} from "../../data/resume.json";
import { motion,useInView} from "motion/react";
import "./Skills.scss";  
import { useRef } from "react";
function Skills() {
  const textVariants = {
    initial : {
      opacity : 0,
      y:-100,
    },
    animate : {
      y:0,
      opacity : 1,
      transition : {
        duration : 0.5,
        staggerChildren : 0.2,
      }
    }
  };
  let ref = useRef();
  let isInView = useInView(ref);
  return ( 
    <div className="container">
      <h1>Skills</h1>
      <motion.div className="skill" variants={textVariants} initial="initial" animate={isInView ? "animate" : "initial" } ref={ref}>

      {
        skills.map((skill)=> (
        <motion.div className="skillContainer" variants={textVariants} whileHover={{scale : 1.1}} key={skill.id}>
          <span>{skill.text}</span>
          <img src={skill.path}  />
        </motion.div>

        ))
      }
      </motion.div>
    </div>
   );
}

export default Skills;