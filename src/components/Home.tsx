import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Home = () => {
    return (
      <>
        <Navbar />
        <main className=" "> {/* Add top padding to avoid navbar overlap */}
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </>
    );
  };

export default Home;
