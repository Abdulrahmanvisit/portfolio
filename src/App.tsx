import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import CurrentlyLearning from "./sections/CurrentlyLearning";
import Contact from "./sections/Contact";
import { ThemeProvider } from "./contexts/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="relative isolate overflow-hidden">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Journey />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
