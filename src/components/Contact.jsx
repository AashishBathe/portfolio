import React from 'react'
import { motion } from 'framer-motion'

/**
 * Contact.jsx (responsive + mobile-friendly)
 *
 * - Uses .contact-grid and .contact-card for responsive wrapping.
 * - Keeps your images from public/icons via import.meta.env.BASE_URL.
 * - Cards are accessible links; external open in new tab.
 */

export default function Contact() {
  const links = [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:aashish.bathe@gmail.com',
      description: 'aashish.bathe@gmail.com',
      img: import.meta.env.BASE_URL + 'icons/mail.jpg',
      external: false
    },
    {
      id: 'leetcode',
      label: 'LeetCode',
      href: 'https://leetcode.com/LordShadow',
      description: 'leetcode.com/LordShadow',
      img: import.meta.env.BASE_URL + 'icons/lc.png',
      external: true
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/AashishBathe',
      description: 'github.com/AashishBathe',
      img: import.meta.env.BASE_URL + 'icons/github.png',
      external: true
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aashish-bathe-476a27237',
      description: 'linkedin.com/in/aashish-bathe-476a27237',
      img: import.meta.env.BASE_URL + 'icons/linkedin.png',
      external: true
    }
  ]

  return (
    <section id="contact" className="py-10 scroll-mt-14">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>

      <div className="contact-grid">
        {links.map(link => (
          <motion.a
            key={link.id}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="contact-card"
            aria-label={`${link.label} — ${link.description}`}
            title={link.description}
            onClick={() => { /* keep link behavior; menu will close via Nav if needed */ }}
          >
            <div className="contact-icon-box" aria-hidden>
              <img
                src={link.img}
                alt={`${link.label} icon`}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            <div className="contact-text">
              <h3>{link.label}</h3>
              <p className="text-slate-400 text-sm break-words">
                <span className="underline">{link.description.replace(/^https?:\/\//, '')}</span>
              </p>
            </div>

            <div className="text-slate-400 text-xs font-medium self-start" style={{ marginLeft: 'auto' }}>
              {link.external ? 'Open' : 'Mail'}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
