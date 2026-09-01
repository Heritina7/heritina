import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function ExperienceAndEducation() {
  const experiences = [
    {
      period: "2024 - Présent",
      title: "Développeur Full-Stack & UI/UX Designer",
      company: "Freelance / Indépendant",
      description: "Conception et développement de sites web sur-mesure, d'applications web performantes et d'interfaces utilisateur modernes axées sur l'expérience client."
    },
    {
      period: "2022 - 2023",
      title: "ARDUINO",
      company: "TME",
      description: "Expérience pratique en programmation de microcontrôleurs et intégration de capteurs/actionneurs. Capacité à concevoir des montages électroniques fonctionnels et à coder des solutions logicielles embarquées adaptées."
    }
  ];

  const education = [
    {
      period: "2026 - Présent",
      title: "Master/ Science et ingénierie du logiciel et en intelligence Artificielle",
      institution: "ONIVERSITY FJKM Ravelojaona",
      description: "Formation approfondie en algorithmique, programmation orientée objet, conception de bases de données et architectures logicielles."
    },
    {
      period: "2023 - 2024",
      title: "Licence / INFORMATIQUE ET PROGRAMMATION",
      institution: "ONIVERSITY FJKM Ravelojaona",
      description: "Formation approfondie en algorithmique, programmation orientée objet, conception de bases de données et architectures logicielles."
    },
    {
      period: "2020",
      title: "Baccalauréat",
      institution: "LYPARS / Série Scientifique",
      description: "Obtention du diplôme avec mention, marquant le début de mon parcours dans les technologies du numérique."
    }
  ];

  return (
    <section id="parcours" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-950 text-slate-100 w-full relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
            Expériences & Formations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mon Parcours
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Un aperçu de mon évolution professionnelle et de mon cursus académique.
          </p>
        </div>

        {/* Grille : Expériences vs Formations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne : Formations & Diplômes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-400 border-b border-slate-800 pb-3">
              <FaGraduationCap /> Formations & Diplômes
            </h3>
            <div className="space-y-6 relative border-l border-slate-800 ml-3 pl-6">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Point sur la timeline */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                  
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md shadow-lg space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <FaCalendarAlt className="w-3 h-3" /> {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">{edu.title}</h4>
                    <p className="text-sm font-medium text-blue-400">{edu.institution}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne : Expériences Professionnelles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-400 border-b border-slate-800 pb-3">
              <FaBriefcase /> Expérience Professionnelle
            </h3>
            <div className="space-y-6 relative border-l border-slate-800 ml-3 pl-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Point sur la timeline */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                  
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md shadow-lg space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <FaCalendarAlt className="w-3 h-3" /> {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">{exp.title}</h4>
                    <p className="text-sm font-medium text-emerald-400">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
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