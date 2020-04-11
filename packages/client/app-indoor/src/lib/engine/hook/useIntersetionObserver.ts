import { useState, useRef, useEffect } from 'react'
const useIntersetionObserver = <T>(): [boolean, React.MutableRefObject<T>] => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<T>(null as any)

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    })

    ref.current && observer.observe(ref.current as any)

    return () => observer.disconnect()
  }, [])

  return [isIntersecting, ref]
}

export default useIntersetionObserver
