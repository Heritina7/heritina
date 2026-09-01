import React from 'react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaFigma 
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiVite, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker,
  SiCplusplus
} from 'react-icons/si'
// Importe ton image de fond (assure-toi que le chemin est correct)
import bgImage from '../assets/bg112.jpg'

export default function Skills() {
  // Liste des compétences avec leurs icônes et couleurs associées
  const skillsList = [
    { name: "React.js", icon: <FaReact className="text-cyan-400" size={32} /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={32} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-emerald-500" size={32} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" size={32} /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" size={32} /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" size={32} /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" size={32} /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" size={32} /> },
    { name: "UI/UX Design", icon: <FaFigma className="text-pink-500" size={32} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" size={32} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" size={32} /> },
  ]

  return (
    <section 
      id="competences" 
      className="py-24 px-6 bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.75)), url(${bgImage})`
      }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mes Compétences</h2>
        <p className="text-slate-300 mb-12 max-w-xl mx-auto">
          Les technologies, frameworks et outils que j'utilise pour concevoir mes projets de developpement numerique et digital.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg"
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-slate-200 font-medium text-sm tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}