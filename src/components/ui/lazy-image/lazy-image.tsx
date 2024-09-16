import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { useEffect, useRef } from 'react'
import styles from './style.module.css'

interface LazyImageProps {
  src: string
  alt: string
  height?: number | `${number}%`
  width?: number | `${number}%`
}

const LazyImage = (props: LazyImageProps) => {
  const { src, alt, height = 250, width = '100%' } = props
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(imgRef)

  useEffect(() => {
    const imgContainer = imgContainerRef.current
    const imgPlaceholder = imgRef.current

    if (isVisible && imgContainer && imgPlaceholder) {
      const highResImage = new Image()

      Object.assign(highResImage, {
        src,
        alt: alt ?? '',
        title: alt ?? '',
        className: styles['lazy-load-image'] + ' ' + styles['loaded']
      })

      highResImage.onload = () => {
        if (imgContainer) {
          imgPlaceholder.remove()
          imgContainer.appendChild(highResImage)
        }
      }

      highResImage.onerror = () => {
        console.error(`Erro ao carregar a imagem ${src}`)
      }
    }
  }, [isVisible, src, alt])

  return (
    <section className="relative overflow-hidden" style={{ height, width }} ref={imgContainerRef}>
      <div className={styles['placeholder-img']} ref={imgRef}>
        <div style={{ width, height }} />
      </div>
    </section>
  )
}

export default LazyImage
