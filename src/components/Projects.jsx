import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
// Importe ton image depuis ton dossier assets (adapte le chemin selon ton arborescence)
import bgImage from '../assets/bg11.jpg'; 
import rth from '../assets/rth1.png'; 

export default function BrandSites() {
  // Liste de tes sites de marque avec leur image et leur lien externe
  const brandSites = [
    {
      title: "",
      category: "Design & Lifestyle",
      link: "https://example.com",
      image: rth,
    },
    {
      title: "Marque E-Commerce 1",
      category: "Mode & Accessoires",
      link: "https://example.com",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Projet Marque 2",
      category: "Tech & Gadgets",
      link: "https://example.com",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Startup & E-Shop 4",
      category: "Cosmétiques & Soins",
      link: "https://example.com",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section 
      id="marques" 
      className="py-24 px-6 sm:px-12 lg:px-20 text-slate-100 w-full relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Superposition sombre (Overlay) pour garder le contenu lisible par-dessus l'image de fond */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20">
            Business
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mes activité et exploitation
          </h2>
        </div>

        {/* Disposition horizontale en grille de photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandSites.map((brand, index) => (
            <a 
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-end p-6 hover:border-emerald-500/60 transition-all duration-500"
            >
              {/* Image de fond de la carte avec effet de zoom au survol */}
              <img 
                src={brand.image} 
                alt={brand.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dégradé sombre pour rendre le texte parfaitement lisible */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/60 transition-colors duration-300"></div>

              {/* Icône de lien externe qui s'illumine au survol en haut à droite */}
              <div className="absolute top-4 right-4 p-2.5 rounded-2xl bg-slate-950/70 backdrop-blur-md text-white border border-slate-800 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all">
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </div>

              {/* Catégorie en badge */}
              <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                {brand.category}
              </span>

              {/* Contenu textuel en bas de la carte */}
              <div className="relative z-10 space-y-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {brand.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5 opacity-90">
                  Visiter la boutique <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}