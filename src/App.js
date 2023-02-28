import Header from "./components/header";
import { Bio } from "./components/bio";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Email from "./components/email";
// eslint-disable-next-line
import app from "./App.css"






function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
