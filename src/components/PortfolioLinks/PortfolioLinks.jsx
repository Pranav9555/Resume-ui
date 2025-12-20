import "./PortfolioLinks.scss";
import {motion} from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

function PortfolioLinks() {
    const variants = {
    initial :  {
      opacity : 0,
      y : -100
    },
    animate : {
      opacity : 1,
      y:0,
      transition : {
        duration:1
      }
    }
  };
  
  let ref = useRef();
  let isInView = useInView(ref);

  return ( 

    <div className="container">
        <h1>Connect with me !</h1>
      
            <motion.div className="social" variants={variants} animate={isInView ? "animate" : "initial"} ref={ref} initial="initial">
          <div className="social-link">
            <a href="https://www.linkedin.com/in/pranav-phalke-112a162ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><motion.img src="linkedin.png" alt="linkedin" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}
            initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ duration: 1 }}
          /></a>
          <span>linkedin</span>
          </div>
          <div className="social-link">
          <a href="https://github.com/Pranav9555" ><motion.img whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }}
            src="github.png" alt="github" /></a>
            <span>github</span> 
          </div>
          <div className="social-link">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavphalke9555@gmail.com" ><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}
            initial={{ opacity: 0,y:60 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }}
            src="gmail.png" alt="gmail" /></a>
            <span>gmail</span>
          </div>
        </motion.div>
    </div>

   );
}

export default PortfolioLinks;