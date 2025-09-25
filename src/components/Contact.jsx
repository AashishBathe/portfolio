import React from 'react'
import { motion } from 'framer-motion'

/**
 * Contact.jsx (updated)
 *
 * - Icon boxes have a consistent white background and fixed size.
 * - Use images placed in public/icons/: mail.png, leetcode.png, github.png, linkedin.png
 * - Grid is 2×2 on wider screens.
 * - Links: mailto for email, external links open in new tab.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {links.map(link => (
          <motion.a
            key={link.id}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="card-glass p-4 md:p-6 rounded-xl flex items-center gap-4 hover-lift"
            aria-label={`${link.label} — ${link.description}`}
            title={link.description}
          >
            <div className="contact-icon-box">
              {/* image constrained to consistent size by CSS (.contact-icon-box img) */}
              <img
                src={link.img}
                alt={`${link.label} icon`}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>

            <div className="flex-1">
              <div className="text-lg font-semibold">{link.label}</div>
              <div className="text-slate-400 text-sm break-words">
                <span className="underline">{link.description.replace(/^https?:\/\//, '')}</span>
              </div>
            </div>

            <div className="text-slate-400 text-xs font-medium self-start">
              {link.external ? 'Open' : 'Mail'}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
