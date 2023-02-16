import Header from "./components/header";
import { Bio } from "./components/bio";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Skills from "./components/skills";
import app from "./App.css"



function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
