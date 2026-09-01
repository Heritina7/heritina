import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Profils et plateformes avec icônes SVG exactes
  const iconLinks = [
    { 
      title: "LinkedIn", 
      link: "https://www.linkedin.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#0a66c2]" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: "hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/30"
    },
    { 
      title: "Behance", 
      link: "https://www.behance.net",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#0054ff]" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 2.05-4.111 2.05-2.593 0-4.615-1.648-4.615-4.5 0-2.923 2.077-4.5 4.703-4.5 2.115 0 3.654.896 4.019 2.5h-5.904c.164 1.527 1.481 2 3.115 2 1.135 0 2.135-.337 2.788-.55v1zm-5.726-3h3.587c-.192-1.01-1.058-1.5-1.789-1.5-.788 0-1.519.5-1.798 1.5zm-8.226-5.45c1.808 0 3.25 1.25 3.25 3.35v.1h-5.5v-.1c0-2.1 1.442-3.35 2.25-3.35zm-2.25 5.5h5.5v1.2c0 1.9-1.346 3.1-3.154 3.1-1.654 0-2.346-.9-2.346-2v-2.3h-.001zm-4.774-6.05h4.274v1.5h-4.274v-1.5zm0 2.5h4.274v6.5h-4.274v-6.5z"/>
        </svg>
      ),
      color: "hover:bg-[#0054ff]/10 hover:border-[#0054ff]/30"
    },
    { 
      title: "Stack Overflow", 
      link: "https://stackoverflow.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#f48024]" viewBox="0 0 24 24">
          <path d="M18.986 21.865v-6.404h2.135v8.539H2.846v-8.539h2.135v6.404h14.005zM5.981 16.54h10.02v2.136H5.981V16.54zm.632-4.542l9.539 1.996.438-2.091-9.539-1.996-.438 2.091zm1.748-4.322l8.694 4.095.894-1.921-8.694-4.095-.894 1.921zm3.174-4.254l7.359 5.867 1.32-1.657-7.359-5.867-1.32 1.657zm5.541-4.278l-1.696 1.303 5.483 7.14 1.696-1.303-5.483-7.14z"/>
        </svg>
      ),
      color: "hover:bg-[#f48024]/10 hover:border-[#f48024]/30"
    },
    { 
      title: "Malt", 
      link: "https://www.malt.fr",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#fc573b]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      color: "hover:bg-[#fc573b]/10 hover:border-[#fc573b]/30"
    },
    { 
      title: "Codeur.com", 
      link: "https://www.codeur.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#00b6f0]" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 14.5l-1.5 1.5L8.5 12 14 6l1.5 1.5L11.5 12l4 4.5z"/>
        </svg>
      ),
      color: "hover:bg-[#00b6f0]/10 hover:border-[#00b6f0]/30"
    },
    { 
      title: "X (Twitter)", 
      link: "https://x.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:bg-white/10 hover:border-white/30"
    },
    { 
      title: "Fiverr", 
      link: "https://www.fiverr.com",
      icon: (
        <svg className="w-8 h-8 fill-current text-[#1dbf73]" viewBox="0 0 24 24">
          <path d="M21.5 10.5h-3.3v-2c0-.8.7-1.5 1.5-1.5h1.8V4h-2.3c-2.3 0-4.2 1.9-4.2 4.2v2.3H13v3h2.8v8.5h3.2V13.5h2.5l.5-3zM9.3 11.2H7.2V22H4V11.2H2.5v-3H4V7c0-2.2 1.8-4 4-4h2.3v3H8c-.6 0-1 .4-1 1v1.2h2.3v3z"/>
        </svg>
      ),
      color: "hover:bg-[#1dbf73]/10 hover:border-[#1dbf73]/30"
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full bg-slate-900/50">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Travaillons ensemble</h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Vous avez une question, un projet ou souhaitez consulter mes profils ? Contactez-moi directement.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* Colonne de gauche : Coordonnées & Profils */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-semibold text-white">Mes Coordonnées</h3>
              
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">📧</div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <a href="mailto:votre.email@exemple.com" className="hover:text-blue-400 transition-colors font-medium">
                      randrianjafyheritina7@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">📞</div>
                  <div>
                    <p className="text-xs text-slate-400">Téléphone</p>
                    <a href="tel:+261340000000" className="hover:text-blue-400 transition-colors font-medium">
                      +261 34 77 917 58
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">💬</div>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp</p>
                    <a 
                      href="https://wa.me/261340000000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-emerald-400 transition-colors font-medium"
                    >
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section Profils avec uniquement les icônes SVG */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-5 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white">Ressources & Profils</h3>
              
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                {iconLinks.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className={`flex items-center justify-center p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 transition-all ${item.color} group aspect-square`}
                  >
                    <div className="transition-transform transform group-hover:scale-110 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne de droite : Formulaire de contact */}
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl flex flex-col justify-center">
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center font-medium">
                Merci ! Votre message a bien été pris en compte. (Simulation)
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Votre Nom</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Votre Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-600/20"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}