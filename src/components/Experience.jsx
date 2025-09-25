import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// each experience now has an href (Google Drive links can go here)
const experiences = [
  {
    company: 'Indian Institute of Science, Education and Research (IISER)',
    title: 'Project Intern',
    date: 'Jul 2024 - June 2025',
    location: 'Mohali, India',
    desc: 'Designed a video analytics pipeline for real-time traffic violation detection; LPR using YOLO + TensorFlow; exposed inference via Flask.',
    href: 'https://drive.google.com/file/d/1Xwcy4YvXpCVfRIuuIlvl0vKBXoIXcfl_/view?usp=sharing'
  },
  {
    company: 'Trumsy',
    title: 'Software Development Intern',
    date: 'Dec 2023 - Mar 2024',
    location: 'Gurugram, India',
    desc: 'Instrumented monitoring using AWS CloudWatch; containerised services with Docker; maintained agile workflows.',
    href: 'https://drive.google.com/file/d/1Zd0c48ZJdUFWymgyLL7REt2WF0wRyDqf/view?usp=sharing' 
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10 scroll-mt-18">
      <h2 className="text-3xl font-semibold">Experience</h2>

      <div className="mt-6 space-y-4">
        {experiences.map((e, i) => (
          <motion.a
            key={e.company}
            href={e.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ x: -16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 260 }}
            viewport={{ once: true }}
          >
            <div className="card-glass p-4 md:p-6 rounded-2xl hover-lift flex justify-between gap-4 cursor-pointer">
              <div>
                <div className="text-xl font-semibold">{e.company}</div>
                <div className="text-sm text-slate-400 mt-1">
                  {e.title} • <span className="text-xs">{e.date}</span>
                </div>
                <p className="mt-3 text-slate-300 text-base">{e.desc}</p>
              </div>

              <ExternalLink className="text-slate-400 w-5 h-5 shrink-0 group-hover:text-slate-200" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}