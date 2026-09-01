import React from 'react';
import { FaBrain, FaMapMarkedAlt, FaGamepad, FaLightbulb, FaBook, FaCode, FaMusic } from 'react-icons/fa';

export default function SkillsAndHobbies() {
  const intellectualSkills = [
    {
      title: "Résolution de problèmes complexes",
      description: "Capacité à décomposer des problèmes algorithmiques ou fonctionnels ardus pour concevoir des solutions propres et maintenables.",
      icon: <FaBrain className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Pensée analytique & Architecture",
      description: "Vision globale d'un projet web, structuration de bases de données et modélisation rigoureuse de l'expérience utilisateur.",
      icon: <FaLightbulb className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Veille technologique & Apprentissage",
      description: "Curiosité naturelle poussant à explorer continuellement de nouveaux frameworks, outils de design et bonnes pratiques de développement.",
      icon: <FaCode className="w-6 h-6 text-blue-400" />
    }
  ];

  const hobbies = [
    {
      title: "Lecture & Essais",
      description: "Passionné par la lecture d'ouvrages sur l'innovation technologique, le design d'interaction et le développement personnel.",
      icon: <FaBook className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Randonnée & Aventure",
      description: "Passionné de grands espaces et de slow travel, idéal pour repousser ses limites, explorer l'inconnu et vivre des expériences hors des sentiers battus.",
      icon: <FaMapMarkedAlt className="w-6 h-6 text-blue-400" />
    },
    

    {
      title: "Musique & Écoute active",
      description: "Immersion musicale quotidienne pour stimuler la créativité et la concentration lors des sessions de code et de conception.",
      icon: <FaMusic className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section id="competences" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-950 text-slate-100 w-full relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
            Au-delà du code
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Compétences Intellectuelles & Loisirs
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Ce qui façonne ma logique au quotidien, nourrit ma créativité et m'aide à maintenir un esprit affûté.
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Colonne : Compétences Intellectuelles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-400 border-b border-slate-800 pb-3">
              <FaBrain /> Compétences Intellectuelles
            </h3>
            <div className="space-y-4">
              {intellectualSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md shadow-lg flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-slate-200">{skill.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne : Loisirs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-400 border-b border-slate-800 pb-3">
              <FaGamepad /> Loisirs & Passions
            </h3>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md shadow-lg flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-slate-200">{hobby.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}