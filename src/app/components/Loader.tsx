'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const BG = '#1c1e24'
const SWEEP_DELAY = 200
const SWEEP_DURATION = 800
const FILL_DURATION = 400
const FILL_HOLD = 200
const FADE_DURATION = 600

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export default function Loader() {
  const coverRef = useRef<HTMLDivElement>(null)
  const [iconVisible, setIconVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const cover = coverRef.current
    if (!cover) return

    const sweepTimeout = setTimeout(() => {
      const start = performance.now()

      const tick = (now: number) => {
        const t = Math.min((now - start) / SWEEP_DURATION, 1)
        const angle = easeInOut(t) * 360
        cover.style.background = `conic-gradient(transparent ${angle}deg, ${BG} ${angle}deg)`

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          cover.style.display = 'none'

          setIconVisible(true)

          setTimeout(() => {
            setFading(true)
            setTimeout(() => setHidden(true), FADE_DURATION)
          }, FILL_DURATION + FILL_HOLD)
        }
      }

      requestAnimationFrame(tick)
    }, SWEEP_DELAY)

    return () => clearTimeout(sweepTimeout)
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-custom-dark-gray transition-opacity ease-in-out"
      style={{
        opacity: fading ? 0 : 0.97,
        pointerEvents: fading ? 'none' : 'auto',
        transitionDuration: `${FADE_DURATION}ms`,
      }}
    >
      <div className="relative w-[90px] h-[90px]">
        <Image src="/logo2.png" alt="" width={90} height={90} priority className="rounded-full" />

        <div
          ref={coverRef}
          className="absolute inset-0 rounded-full"
          style={{ background: BG }}
        />

        <Image
          src="/icon.png"
          alt=""
          width={150}
          height={150}
          priority
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity ease-in-out"
          style={{
            opacity: iconVisible ? 1 : 0,
            transitionDuration: `${FILL_DURATION}ms`,
          }}
        />
      </div>
    </div>
  )
}
