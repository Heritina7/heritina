import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PhotoGallery() {
  // Liste de tes photos (tu peux modifier les URLs et les textes)
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      title: "Espace de travail / Setup Dev",
      description: "Mon environnement de travail quotidien pour coder et concevoir des interfaces."
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      title: "Atelier / Conférence Tech",
      description: "Présentation de projets et échange autour des dernières tendances du web."
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      title: "Collaboration en équipe",
      description: "Sessions de brainstorming et de pair-programming pour structurer de nouveaux projets."
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
      title: "Lignes de code & Focus",
      description: "Développement d'architectures logicielles robustes et scalables."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour avancer de 2 images (ou revenir au début)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= photos.length ? 0 : prevIndex + 2
    );
  };

  // Fonction pour reculer de 2 images
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? Math.max(0, photos.length - 2) : prevIndex - 2
    );
  };

  // Récupère les 2 photos à afficher actuellement
  const visiblePhotos = photos.slice(currentIndex, currentIndex + 2);

  return (
    <section id="galerie" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-950 text-slate-100 w-full relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* En-tête de section */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
            Immersion visuelle
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Galerie Photo
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Découvrez en images mon univers, mes setups et mes moments forts.
          </p>
        </div>

        {/* Conteneur Principal du Carrousel à 2 éléments */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Grille des 2 images en avant */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
            {visiblePhotos.map((photo, index) => (
              <div 
                key={currentIndex + index}
                className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                {/* Image avec effet de zoom au survol */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                    Photo {currentIndex + index + 1} / {photos.length}
                  </span>
                </div>

                {/* Description de la photo */}
                <div className="p-6 space-y-2 bg-slate-900/90">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Boutons de Navigation (Flèches sur les côtés) */}
          <button 
            onClick={prevSlide}
            className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 text-white border border-slate-800 hover:bg-blue-600 transition-all backdrop-blur-md shadow-lg z-20"
            aria-label="Photos précédentes"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/90 text-white border border-slate-800 hover:bg-blue-600 transition-all backdrop-blur-md shadow-lg z-20"
            aria-label="Photos suivantes"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}