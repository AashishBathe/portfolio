import React, { useEffect, useState } from 'react'

/**
 * TypedText.jsx
 *
 * - Default typingSpeed increased (slower) for a more elegant effect.
 * - To change speed: pass typingSpeed in ms per char (e.g. typingSpeed={80}).
 *
 * Props:
 *  - strings: array of strings to loop
 *  - typingSpeed: ms per char while typing (default 120)
 *  - pause: ms pause before deleting (default 1800)
 */

export default function TypedText({
  strings = ['Backend Engineer', 'Java • Spring Boot • Docker • Kubernetes • AWS', 'Cloud-native Systems'],
  typingSpeed = 170,
  pause = 1800,
  className = 'inline-block text-lg md:text-xl'
}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const step = () => {
      if (!reverse) {
        // typing
        if (subIndex < strings[index].length) {
          setSubIndex(s => s + 1)
        } else {
          // pause then start deleting
          setTimeout(() => setReverse(true), pause)
        }
      } else {
        // deleting
        if (subIndex > 0) {
          setSubIndex(s => s - 1)
        } else {
          setReverse(false)
          setIndex(i => (i + 1) % strings.length)
        }
      }
    }

    const timeout = setTimeout(step, reverse ? Math.max(40, typingSpeed / 2) : typingSpeed)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, index, reverse, strings, typingSpeed, pause])

  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={className} aria-live="polite">
      <span>{strings[index].substring(0, subIndex)}</span>
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: 8,
          height: 20,
          background: blink ? 'white' : 'transparent',
          marginLeft: 6,
          verticalAlign: 'middle',
          borderRadius: 2
        }}
      />
    </span>
  )
}
