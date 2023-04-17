import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Contact from "./Pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Github } from './Pages/GitHub';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Github/>
      <Contact />
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
