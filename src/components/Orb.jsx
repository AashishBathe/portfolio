import React from 'react'
import { motion } from 'framer-motion'

/**
 * Lightweight, local "Orb" background component.
 * Renders layered blurred gradients that gently float.
 * Use <Orb className="..."/> in hero; pointer-events: none.
 */

export default function Orb({ className = '' }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      <motion.div
        className="orb left-1/4 top-20 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 opacity-60"
        animate={{ x: [0, 20, 0], y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'screen' }}
      />
      <motion.div
        className="orb right-10 top-36 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-40"
        animate={{ x: [0, -24, 0], y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}
