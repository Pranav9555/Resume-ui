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
    Scrollbutton : {
      y : 10,
      opacity : 0,
      transition : {
        duration : 2,
        repeat : Infinity,
      }
    }
  }
  let ref=useRef();
  let inView = useInView(ref);


  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textvariants} intital="intial" animate={inView ? "animate" : "initial"}  ref={ref} >

          <div className="details">
           <h1>Name : {data.name}</h1>
           <h2>Role : {data.role}</h2>
          </div>
          <div className="detail">
            <span><MapPin size={20}/></span>
            <p>{data.location}</p>
          </div>
          <div className="detail">
            <span><Mail size={20}/></span>
            <p>{data.email}</p>
          </div>
          <div className="detail">
            <span><Phone size={20}/></span>
            <p>{data.phone}</p>
          </div>
         </motion.div>

      </div>

      <div className="imgContainer">
        <img src="/profile4.png" alt="profile-image" />
      </div>
    </div>
  );


}

export default HomePage;