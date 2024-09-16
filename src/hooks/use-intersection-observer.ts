import { useEffect, useRef, useState } from 'react'

const DELAY_TO_MARK_AS_VISIBLE = 300 // in milliseconds

type PxString = `${number}px`

interface Options {
  rootMargin?: PxString
  threshold?: number
  delay?: number
}

const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  { rootMargin = '200px', threshold = 0.1, delay = DELAY_TO_MARK_AS_VISIBLE }: Partial<Options> = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(() => setIsIntersecting(true), delay)
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
          }
          setIsIntersecting(false)
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [ref, rootMargin, threshold, delay])

  return isIntersecting
}

export { useIntersectionObserver }
