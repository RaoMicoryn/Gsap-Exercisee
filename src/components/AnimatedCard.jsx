import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './AnimatedCard.module.css'

function AnimatedCard() {
    // Ref card
  const cardRef = useRef(null)
  const titleRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Hide card
    gsap.set(cardRef.current, { opacity: 0, y: 60, scale: 0.97 })
    gsap.set([titleRef.current, paragraphRef.current, buttonRef.current], {
      opacity: 0,
      y: 24,
    })

    // Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.to(cardRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
    }).to(
      [titleRef.current, paragraphRef.current, buttonRef.current],
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15, // elemen muncul 0,15 detik habis elemen sebelumnya
      },
      '-=0.3' // Overlap slightly with the card animation
    )
  }, [])

  return (
    <div ref={cardRef} className={styles.card}>
      {/* Decorative accent line */}
      <div className={styles.accentLine} />

      <h2 ref={titleRef} className={styles.title}>
        Motion in Focus
      </h2>

      <p ref={paragraphRef} className={styles.paragraph}>
        This card is brought to life with GSAP — React's most powerful animation
        partner. Clean, smooth, and flicker-free from the very first frame.
      </p>

      <button
        ref={buttonRef}
        className={styles.button}
        onClick={() => alert('Animation complete ✨')}
      >
        Explore More
      </button>
    </div>
  )
}

export default AnimatedCard
