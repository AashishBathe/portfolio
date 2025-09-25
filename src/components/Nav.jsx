import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed w-full z-50 top-2"
      style={{ height: 'var(--header-offset)' }}
    >
      <nav
        className="container mx-auto px-6 h-full flex items-center justify-between card-glass rounded-2xl shadow-md"
        aria-label="Main navigation"
      >
        <a className="font-semibold text-lg" href="#hero" onClick={closeMenu}>Aashish Bathe</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Mobile: button + toggled links */}
        <div className="md:hidden relative" style={{ right: 0 }}>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            title="Menu"
          >
            {/* simple icon; replace with your svg if you want */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`} role="menu" aria-hidden={!menuOpen}>
            <a href="#projects" role="menuitem" onClick={closeMenu}>Projects</a>
            <a href="#experience" role="menuitem" onClick={closeMenu}>Experience</a>
            <a href="#skills" role="menuitem" onClick={closeMenu}>Skills</a>
            <a href="#contact" role="menuitem" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
