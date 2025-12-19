import { motion } from "motion/react";
import "./Project.scss"
import {projects} from "../../data/resume.json";

const Single = ({ item }) => {
 
  return <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" >
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" >
          <h2>{item.title}</h2>
          <h3>{item.tech}</h3>
          <p>{item.description}</p>
          <a href={item.link}><button>GITHUB</button></a>
        </motion.div>
      </div>
    </div>
  </section>
}

function Projects() {


  return (
    <div className="portfolio"  id="Projects">
      <div className="progress">
        <h1>PROJECTS</h1>
      </div>
      {
        projects.map((item) => (
          <Single item={item} key={item.id} />
        ))
      }
    </div>
  );
}

export default Projects;
