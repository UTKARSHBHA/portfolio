import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
    return (
      <>
        <Navbar />
        <main className="pt-20"> {/* Add top padding to avoid navbar overlap */}
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </>
    );
  };

export default Home;
