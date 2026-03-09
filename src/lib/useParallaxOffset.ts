import { useEffect, useState } from 'react'

export function useParallaxOffset(speed = 0.08, max = 48): number {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const nextOffset = Math.min(window.scrollY * speed, max)
      setOffsetY(nextOffset)
      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [max, speed])

  return offsetY
}
