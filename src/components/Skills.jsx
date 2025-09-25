import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Java', level: 80 },
  { name: 'Python', level: 90 },
  { name: 'Spring Boot', level: 90 },
  { name: 'Docker', level: 85 },
  { name: 'Kubernetes', level: 75 },
  { name: 'AWS', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'NoSQL', level: 85 },
  { name: 'Kafka', level: 80 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-10 scroll-mt-18">
      <h2 className="text-3xl font-semibold">Technical Skills</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="p-3 card-glass rounded-lg hover-lift"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260 }}
          >
            <div className="flex justify-between mb-2">
              <div className="text-base font-medium">{s.name}</div>
              <div className="text-sm text-slate-400">{s.level}%</div>
            </div>
            <div className="w-full h-3 rounded bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-start to-brand-end"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1.0, delay: i * 0.04 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
