import "./App.scss";
import Education from "./components/Education/Education";
import HomePage from "./components/HomePage/HomePage";
import PortfolioLinks from "./components/PortfolioLinks/PortfolioLinks";
import Projects from "./components/Projects/Project";
import SideBar from "./components/sideBar/SideBar";
import Skills from "./components/skills/Skills";
function App() {
  return ( 
    <>
    <section id="personal-detail">
      <SideBar/>
      <HomePage/>
    </section>
    <section id="portfolio links">
      <PortfolioLinks/>
    </section>
    <section id="Education">
      <Education/>
    </section>
    <Projects/>
    <section id="Skills">
      <Skills/>
    </section>
    </>
   );
}

export default App;