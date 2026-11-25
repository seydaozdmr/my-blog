'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { homeCopy } from '@/lib/homeCopy'
import type { Locale } from '@/lib/translations'

const photos = ['dd1d9fab-968d-46c5-b071-ed347f55efa6', 'IMG_1378', 'IMG_2058']

export function HeroSlider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const copy = homeCopy[locale]
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setPlaying(!motion.matches)
    const onVisibility = () => setVisible(!document.hidden)
    onMotion()
    onVisibility()
    motion.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      motion.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  useEffect(() => {
    if (!playing || !visible) return
    const timer = window.setTimeout(() => setIndex((index + 1) % photos.length), 5000)
    return () => window.clearTimeout(timer)
  }, [index, playing, visible])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="landscape" role="group" aria-label={copy.gallery}>
        {photos.map((file, i) => (
          <Image key={file} src={'/new_images/' + file + '.webp'} width={1200} height={1600}
            sizes="(max-width: 760px) 100vw, 73vw" priority={i === 0} alt={copy.captions[i]}
            aria-hidden={i !== index} className={i === index ? 'scene current' : 'scene'} />
        ))}
      </div>
      {children}
      <div className="gallery-bar wrap">
        <div className="photo-note" aria-live={playing ? 'off' : 'polite'}>
          <span id="count">0{index + 1} / 03</span><span>{copy.captions[index]}</span>
        </div>
        <div className="controls">
          <button type="button" aria-label={playing ? copy.pause : copy.play} onClick={() => setPlaying(!playing)}>{playing ? 'Ⅱ' : '▶'}</button>
          <button type="button" aria-label={copy.previous} onClick={() => setIndex((index + photos.length - 1) % photos.length)}>←</button>
          <button type="button" aria-label={copy.next} onClick={() => setIndex((index + 1) % photos.length)}>→</button>
        </div>
      </div>
    </section>
  )
}
