import "./App.css";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
