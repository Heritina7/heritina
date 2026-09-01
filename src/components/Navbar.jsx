import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Ajout de 'parcours' dans la liste des sections surveillées
      const sections = ['accueil', 'projets', 'parcours', 'competences', 'galerie', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 sm:px-12 lg:px-16 ${isScrolled ? 'pt-4' : 'pt-4'}`}>
      <div 
        className={`w-full transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? 'max-w-7xl mx-auto px-6 h-16 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl' 
            : 'px-6 h-20 bg-transparent border-none shadow-none'
        }`}
      >
        <a href="#accueil" className={`text-xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
          Portfolio<span className="text-blue-500">.</span>
        </a>
        
        {/* Liens de navigation avec "Parcours" intégré */}
        <div className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-300">
          <a 
            href="#accueil" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'accueil' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Accueil
          </a>
          <a 
            href="#projets" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'projets' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Projets & Business
          </a>
          <a 
            href="#parcours" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'parcours' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Parcours
          </a>
          <a 
            href="#competences" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'competences' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Compétences
          </a>
          <a 
            href="#galerie" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'galerie' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Galerie
          </a>
          <a 
            href="#contact" 
            className={`px-3 py-2 rounded-xl transition-all ${
              activeSection === 'contact' 
                ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30 shadow-sm' 
                : 'hover:text-blue-400'
            }`}
          >
            Contact
          </a>
        </div>

        <a 
          href="#contact" 
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-blue-600/20"
        >
          Me contacter
        </a>
      </div>
    </nav>
  );
}