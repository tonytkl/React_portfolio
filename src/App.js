import MainNavBar from "./components/MainNavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
