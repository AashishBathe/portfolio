import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="container mx-auto px-6 lg:px-12 py-24">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-slate-400">
        Built with 💙 by Aashish Bathe (and GPT :p)
      </footer>
    </div>
  )
}
