import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-svh overflow-x-hidden bg-canvas">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:border focus:border-accent focus:bg-canvas focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:uppercase focus:text-accent"
    >
      Skip to content
    </a>

    <Navbar />

    <main id="main">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
