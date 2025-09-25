import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Indian Institute of Science, Education and Research (IISER)',
    title: 'Project Intern',
    date: 'Jul 2024 - June 2025',
    location: 'Mohali, India',
    desc: 'Designed a video analytics pipeline for real-time traffic violation detection; LPR using YOLO + TensorFlow; exposed inference via Flask.'
  },
  {
    company: 'Trumsy',
    title: 'Software Development Intern',
    date: 'Dec 2023 - Mar 2024',
    location: 'Gurugram, India',
    desc: 'Instrumented monitoring using AWS CloudWatch; containerised services with Docker; maintained agile workflows.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10 scroll-mt-18">
      <h2 className="text-3xl font-semibold">Experience</h2>

      <div className="mt-6 space-y-4">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            className="card-glass p-4 md:p-6 rounded-2xl hover-lift"
            initial={{ x: -16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 260 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="text-xl font-semibold">{e.company}</div>
                <div className="text-sm text-slate-400 mt-1">{e.title} • <span className="text-xs">{e.date}</span></div>
              </div>
              <div className="text-sm text-slate-300">{e.location}</div>
            </div>
            <p className="mt-3 text-slate-300 text-base">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
