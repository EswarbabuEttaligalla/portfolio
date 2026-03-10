import { useEffect, useRef } from 'react'

export default function useRevealAll(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [selector])

  return containerRef
}
