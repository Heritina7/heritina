import React from 'react';
import { FaExternalLinkAlt, FaGlobe, FaBriefcase, FaRocket } from 'react-icons/fa';
import rthImage from '../assets/rth.png';
export default function ProjectsAndBusiness() {
  const websites = [
    {
      title: "Plateforme E-Commerce",
      category: "Développement Web & UI/UX",
      description: "Boutique en ligne moderne conçue avec React et Tailwind CSS, intégrant un panier dynamique et un design ultra-fluide.",
      link: "https://example.com",
      image: "https://images.unsplash.com/photo-1557821552-1710517667fc?auto=format&fit=crop&w=800&q=80", // Remplace par l'URL de ton image/capture d'écran
      tags: ["React", "Tailwind CSS", "E-Commerce"]
    },
    {
      title: " Monitoring Téléphonique",
      category: "Python & Django",
      description: "Tableau de bord analytique complet avec visualisation de données en temps réel, authentification sécurisée et gestion d'utilisateurs. Visualisation en temps réel des logs d'appels",
      link: "https://example.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Remplace par l'URL de ton image/capture d'écran
      tags: ["Django", "MySQL", "Wireshark & IPBX"]
    }
  ];

  const businesses = [
    {
      title: "Agence de Création Digitale | RTH",
      role: "Developpeur",
      description: "Agence spécialisée dans la conception de sites web sur-mesure, le développement d'identités visuelles et l'optimisation de l'expérience utilisateur. Ils intervient également sur l'installation, la configuration et la sécurisation des infrastructures réseaux et télécommunications pour garantir la fiabilité et la performance de vos systèmes informatiques.",
      link: "https://shoprth.netlify.app", // Lien externe vers ton business
      image: rthImage,
      status: "Actif",
      icon: <FaRocket className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Projet SaaS en cours",
      role: "Porteur de projet",
      description: "Développement d'une solution innovante destinée à simplifier la gestion de projets pour les créateurs de contenu et freelances.",
      link: "https://example.com", // Lien externe ou de suivi
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80", // Remplace par ton image
      status: "En développement",
      icon: <FaBriefcase className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="projets" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-950 text-slate-100 w-full relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
            Réalisations & Entrepreneuriat
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Projets académiques et scolaires
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Clique sur n'importe quelle carte pour visiter les sites et projets en détail.
          </p>
        </div>

        {/* Partie 1 : Sites Web (Galerie cliquable) */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-400 border-b border-slate-800 pb-3">
            <FaGlobe /> Sites Web & Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websites.map((site, index) => (
              <a 
                key={index}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/60 transition-all duration-300 backdrop-blur-md shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Conteneur Image avec effet zoom au survol */}
                <div className="relative h-56 overflow-hidden bg-slate-930">
                  <img 
                    src={site.image} 
                    alt={site.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-slate-700/50 group-hover:bg-blue-600 transition-colors">
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                    {site.category}
                  </span>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {site.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {site.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Partie 2 : Business & Projets pro (Galerie cliquable) */}
        <div className="space-y-8 pt-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-400 border-b border-slate-800 pb-3">
            <FaBriefcase /> Mes Business & Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businesses.map((biz, index) => (
              <a 
                key={index}
                href={biz.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/60 transition-all duration-300 backdrop-blur-md shadow-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Conteneur Image avec effet zoom */}
                <div className="relative h-56 overflow-hidden bg-slate-930">
                  <img 
                    src={biz.image} 
                    alt={biz.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-slate-700/50 group-hover:bg-emerald-600 transition-colors">
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700">
                      {biz.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${
                      biz.status === 'Actif' 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    }`}>
                      {biz.status}
                    </span>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {biz.title}
                      </h4>
                    </div>
                    <p className="text-xs text-blue-400 font-medium">{biz.role}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {biz.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}