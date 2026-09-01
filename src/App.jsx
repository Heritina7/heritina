import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillsAndHobbies from './components/SkillsAndHobbies';
import ProjectsAndBusiness from './components/ProjectsAndBusiness';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import PhotoGallery from './components/PhotoGallery';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <ProjectsAndBusiness />
      <Projects />
      <ExperienceAndEducation />
      <Skills />
      <SkillsAndHobbies />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  )
}

      