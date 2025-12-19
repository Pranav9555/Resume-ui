import "./HomePage.scss";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import data from "../../data/resume.json";
import { Mail, MapPin, Phone } from "lucide-react";

function HomePage() {
  const textvariants = {
    initial : {
      x : -500,
      opacity : 0
    },
    animate : {
      x : 0,
      opacity : 1,
      transition : {
        type: " spring",
        duration : 1,
        staggerChildren : 0.3
      }
    },
  }
  let ref=useRef();
  let inView = useInView(ref);


  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textvariants} intital="intial" animate={inView ? "animate" : "initial"}  ref={ref} >

          <motion.div className="details" variants={textvariants}>
           <h1>Name : {data.name}</h1>
           <h2>Role : {data.role}</h2>
          </motion.div>
          <motion.div className="detail" variants={textvariants}>
            <span><MapPin size={20}/></span>
            <p>{data.location}</p>
          </motion.div>
          <motion.div className="detail" variants={textvariants}>
            <span><Mail size={20}/></span>
            <p>{data.email}</p>
          </motion.div>
          <motion.div className="detail" variants={textvariants}>
            <span><Phone size={20}/></span>
            <p>{data.phone}</p>
          </motion.div>
         </motion.div>

      </div>

      <div className="imgContainer">
        <img src="/profile4.png" alt="profile-image" />
      </div>
    </div>
  );


}

export default HomePage;