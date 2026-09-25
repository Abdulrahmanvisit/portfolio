import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import { ThemeProvider } from "./contexts/ThemeProvider";

const About = lazy(() => import("./sections/About"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Projects = lazy(() => import("./sections/Projects"));
const Journey = lazy(() => import("./sections/Journey"));
const CurrentlyLearning = lazy(() => import("./sections/CurrentlyLearning"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return <div className="animate-fade-in" style={{ minHeight: "200px" }} />;
}

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="main" className="relative isolate overflow-hidden">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <TechStack />
          <Projects />
          <Journey />
          <CurrentlyLearning />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}