import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
