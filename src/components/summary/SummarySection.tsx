import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface ISummarySection {
  children: React.ReactNode
  position: number
  setPosition: Dispatch<SetStateAction<number>>
}

export function SummarySection({
  children,
  position,
  setPosition
}: ISummarySection) {
  const ref = useRef(null)
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setPosition(position)
    }
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return <div ref={ref}>{children}</div>
}
