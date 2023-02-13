import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import LoadingPage from "./components/LoadingPage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
