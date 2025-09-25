import React from 'react'
import { motion } from 'framer-motion'

/**
 * Nav.jsx
 * - Fixed header with explicit height that matches --header-offset in index.css
 * - Keeps the same glass look and accessible nav links
 * - If you change the header height here, update --header-offset in src/index.css
 */

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed w-full z-50 top-2"
      style={{ height: 'var(--header-offset)' }} /* keep in sync with index.css */
    >
      <nav
        className="container mx-auto px-6 h-full flex items-center justify-between card-glass rounded-2xl shadow-md"
        aria-label="Main navigation"
      >
        <a className="font-semibold text-lg" href="#hero">Aashish Bathe</a>

        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button
            className="px-3 py-1 rounded bg-slate-800/30"
            aria-label="Open menu"
            title="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
