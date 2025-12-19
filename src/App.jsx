import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import SideBar from "./components/sideBar/SideBar";
function App() {
  return ( 
    <>
    <section id="personal-detail">
      <SideBar/>
      <HomePage/>
    </section>
    <section id="portfolio links"></section>
    <section id="Education"></section>
    <section id="Projects"></section>
    <section id="Skills"></section>
    </>
   );
}

export default App;