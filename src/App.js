import MainNavBar from "./components/MainNavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
