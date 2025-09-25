import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'WindGrid-AI',
    desc: 'AI-driven optimal location for wind turbine installation',
    tags: ['React','Open Source APIs','Clustering','Flask'],
    highlight: '1st Runner Up among 39,000+ participants in LTTS TECHgium (8th edition)'
  },
  {
    title: 'FreeTube',
    desc: 'Spring Boot microservices platform for video ingestion and streaming',
    tags: ['Java','Spring Boot','Docker','Spring Cloud', 'SQL']
  },
  {
    title: 'E-commerce Application',
    desc: 'Spring Boot microservices platform for E-commerce driven by Kafka',
    tags: ['Java','Spring Boot','Docker','Kafka', 'SQL']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-10 scroll-mt-18">
      <h2 className="text-3xl font-semibold">Projects</h2>

      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="card-glass p-6 md:p-8 rounded-2xl cursor-pointer hover-lift"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -12, scale: 1.02, boxShadow: '0 20px 40px rgba(2,6,23,0.6)' }}
            transition={{ delay: i * 0.06, type: 'spring', stiffness: 220 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-slate-300 text-base">{p.desc}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {p.tags.map(t => (
                <motion.span
                  key={t}
                  className="text-xs px-3 py-1 border border-slate-700 rounded-full"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {p.highlight && <div className="mt-5 text-xs text-amber-300">{p.highlight}</div>}
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
