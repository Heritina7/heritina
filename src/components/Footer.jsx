import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} -RTH.</p>
    </footer>
  )
}