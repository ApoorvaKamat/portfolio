// Reusable Vue custom directive for scroll-triggered fade-up animation
export function useFadeUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  return {
    mounted(el) {
      observer.observe(el)
    },
    unmounted(el) {
      observer.unobserve(el)
    },
  }
}