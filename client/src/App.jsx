import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { EducationExperience } from './sections/EducationExperience';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#07090D] text-slate-100 transition-colors duration-300 relative selection:bg-teal-primary/30 selection:text-teal-glow">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <EducationExperience />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
