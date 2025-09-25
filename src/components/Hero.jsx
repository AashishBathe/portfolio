import React from 'react'
import { motion } from 'framer-motion'
import Orb from './Orb'
import TypedText from './TypedText'

/**
 * NOTE:
 * - Place your profile photo at: public/profile.jpg
 *   (You can also use an absolute URL like https://example.com/photo.jpg)
 *
 * - To serve resume from Google Drive, replace DRIVE_RESUME_LINK with your actual link.
 *   Using a normal share link will open the Drive preview in a new tab.
 */

const DRIVE_RESUME_LINK = 'https://drive.google.com/file/d/1psKVIj2f8pKU7SRs8VJv_GXnSYUxHb78/view?usp=sharing'

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 scroll-mt-20">
      <Orb />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -22, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Hi — I’m <span className="heading-gradient">Aashish Bathe</span>
          </h1>

          <p className="mt-5 text-slate-300 max-w-2xl">
            <TypedText
              strings={[
                'Backend Developer',
                'Java • Spring Boot • Docker • Kubernetes • AWS',
                'Cloud-native Systems'
              ]}
              typingSpeed={170}
              pause={1800}
              className="inline-block text-lg md:text-xl text-slate-200"
            />
          </p>

          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg card-glass border border-slate-700 text-sm hover-lift"
              href="#projects"
            >
              See Projects
            </motion.a>

            {/* Resume button now opens Google Drive in a new tab */}
            <motion.a
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-start to-brand-end text-sm font-medium hover-lift"
              href={DRIVE_RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume"
            >
              Open Resume
            </motion.a>
          </div>

          <div className="mt-5 text-slate-400 text-base max-w-xl">
            I build production-ready backends with Java and Spring Boot using microservices architecture.
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85 }}
        >
          <motion.div
            className="card-glass rounded-3xl p-6 md:p-8 shadow-2xl"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-4 md:gap-6">
              {/* Replace AB with your profile image placed at public/profile.jpg */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-slate-800/40 flex items-center justify-center shrink-0">
                <img
                  src={import.meta.env.BASE_URL + 'profile.jpg'}
                  alt="Aashish Bathe"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-2xl md:text-3xl font-semibold">Aashish Bathe</div>
                <div className="text-slate-400 text-sm mt-1">
                  Backend Developer • B.E. Computer Engineering
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-6 text-slate-300 text-base">
              1st Runner-Up of TECHgium 2025, organized by L&T Technology Services
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-slate-800/60 rounded hover:bg-slate-800 transition">
                Project Intern @IISER
              </div>
              <div className="p-3 bg-slate-800/60 rounded hover:bg-slate-800 transition">
                SDE Intern @Trumsy
              </div>
              <div className="p-3 bg-slate-800/60 rounded hover:bg-slate-800 transition">
                Knight @Leetcode (Max Rating - 1930)
              </div>
              <div className="p-3 bg-slate-800/60 rounded hover:bg-slate-800 transition">
                Solved 920+ problems on Leetcode
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
