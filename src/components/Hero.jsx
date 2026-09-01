import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import bgImage from '../assets/bg11.jpg';
import headshot from '../assets/headshot.jpg';

export default function Hero() {
  return (
    <section 
      id="accueil" 
      className="min-h-screen w-full text-slate-100 flex items-center justify-center pt-24 px-6 sm:px-12 lg:px-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.75)), url(${bgImage})`
      }}
    >
      
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-16 z-10">
        
        {/* --- Partie Texte (Gauche - 7 colonnes) --- */}
        <div className="md:col-span-7 text-center md:text-left space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
            Disponible pour de nouveaux projets
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            Bonjour, je suis{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Heritina Randrianjafy
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Développeur Full-Stack & UI/UX Designer. Je crée des expériences web modernes, performantes et centrées sur l'utilisateur.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projets" 
              className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition shadow-lg shadow-blue-500/20"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-lg transition flex items-center gap-2 backdrop-blur-sm border border-slate-700"
            >
              <HiOutlineDownload size={22} />
              Me contacter
            </a>
          </div>
        </div>

        {/* --- Partie Avatar (Droite - 5 colonnes) --- */}
        <div className="md:col-span-5 flex flex-col items-center justify-center py-12">
          
          <div className="relative flex items-center justify-center">
            {/* Cercle lumineux de fond */}
            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-30 blur-2xl"></div>

            {/* Le cercle cadre principal */}
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-4 border-blue-500/50 bg-slate-900 shadow-2xl overflow-hidden">
              <img 
                src={headshot} 
                alt="Heritina Randrianjafy" 
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-[130%] max-w-none object-cover pointer-events-none"
              />
            </div>
          </div>

          {/* Badge positionné juste en dessous de l'image et centré */}
          <div className="mt-6 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 z-20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-sm font-medium text-slate-300">Disponible pour mission</p>
          </div>

        </div>

      </div>
    </section>
  );
}