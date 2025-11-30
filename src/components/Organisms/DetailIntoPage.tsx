import { useRef, useEffect } from 'react'
import AboutContent from '../Pages/AboutContent'
import ProjectContent from '../Pages/ProjectContent'
import ExperincesContent from '../Pages/ExperincesContent'

type Section = 'about' | 'project' | 'experiences' | null

interface DetailIntoPageProps {
  selectedSection: Section;
  onRefsReady?: (refs: {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    experiencesRef: React.RefObject<HTMLDivElement | null>;
    projectRef: React.RefObject<HTMLDivElement | null>;
  }) => void;
  onSectionChange?: (section: Section) => void;
}

function DetailIntoPage({ selectedSection: _selectedSection, onRefsReady, onSectionChange }: DetailIntoPageProps) {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onRefsReady) {
      onRefsReady({ aboutRef, experiencesRef, projectRef })
    }
  }, [onRefsReady])

  useEffect(() => {
    if (!onSectionChange || !containerRef.current) return
    if (!aboutRef.current || !experiencesRef.current || !projectRef.current) return

    const observerOptions = {
      root: containerRef.current,
      rootMargin: '-30% 0px -50% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest visibility in the viewport center
      let maxRatio = 0
      let activeSection: Section = null

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Calculate how much of the section is visible in the center area
          const rect = entry.boundingClientRect
          const rootRect = containerRef.current!.getBoundingClientRect()
          
          // Calculate visible area in the center 40% of the viewport
          const centerTop = rootRect.top + rootRect.height * 0.3
          const centerBottom = rootRect.top + rootRect.height * 0.7
          
          const visibleTop = Math.max(rect.top, centerTop)
          const visibleBottom = Math.min(rect.bottom, centerBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          const centerRatio = visibleHeight / (centerBottom - centerTop)
          
          if (centerRatio > maxRatio) {
            maxRatio = centerRatio
            if (entry.target === aboutRef.current) {
              activeSection = 'about'
            } else if (entry.target === experiencesRef.current) {
              activeSection = 'experiences'
            } else if (entry.target === projectRef.current) {
              activeSection = 'project'
            }
          }
        }
      })

      if (activeSection) {
        onSectionChange(activeSection)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const aboutEl = aboutRef.current
    const experiencesEl = experiencesRef.current
    const projectEl = projectRef.current

    observer.observe(aboutEl)
    observer.observe(experiencesEl)
    observer.observe(projectEl)

    // Initial check to detect current section
    const checkInitialSection = () => {
      if (!containerRef.current) return
      
      const containerRect = containerRef.current.getBoundingClientRect()
      const sections = [
        { el: aboutEl, section: 'about' as Section },
        { el: experiencesEl, section: 'experiences' as Section },
        { el: projectEl, section: 'project' as Section }
      ]

      let maxRatio = 0
      let activeSection: Section = null

      // Calculate center area of viewport (30% to 70%)
      const centerTop = containerRect.top + containerRect.height * 0.3
      const centerBottom = containerRect.top + containerRect.height * 0.7
      const centerHeight = centerBottom - centerTop

      sections.forEach(({ el, section }) => {
        const rect = el.getBoundingClientRect()
        const isIntersecting = 
          rect.top < containerRect.bottom &&
          rect.bottom > containerRect.top
        
        if (isIntersecting) {
          // Calculate how much of this section is in the center area
          const visibleTop = Math.max(rect.top, centerTop)
          const visibleBottom = Math.min(rect.bottom, centerBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const centerRatio = visibleHeight / centerHeight
          
          if (centerRatio > maxRatio) {
            maxRatio = centerRatio
            activeSection = section
          }
        }
      })

      if (activeSection) {
        onSectionChange(activeSection)
      } else {
        // Fallback: if no section is in center, use the one with most visibility
        let fallbackMax = 0
        let fallbackSection: Section = null
        
        sections.forEach(({ el, section }) => {
          const rect = el.getBoundingClientRect()
          const isIntersecting = 
            rect.top < containerRect.bottom &&
            rect.bottom > containerRect.top
          
          if (isIntersecting) {
            const visibleHeight = Math.min(rect.bottom, containerRect.bottom) - Math.max(rect.top, containerRect.top)
            const ratio = Math.max(0, Math.min(visibleHeight / rect.height, 1))
            if (ratio > fallbackMax) {
              fallbackMax = ratio
              fallbackSection = section
            }
          }
        })
        
        if (fallbackSection) {
          onSectionChange(fallbackSection)
        }
      }
    }

    // Check on scroll as well
    const handleScroll = () => {
      checkInitialSection()
    }

    const container = containerRef.current
    container.addEventListener('scroll', handleScroll, { passive: true })

    const timeoutId = setTimeout(checkInitialSection, 100)

    return () => {
      clearTimeout(timeoutId)
      container.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [onSectionChange])

  return (
    <>
      <style>{`
        .detail-into-page {
          flex: 1;
          width: 50%;
          border-color:rgb(150, 120, 221);
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 60px;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none; 
          -ms-overflow-style: none; 
        }
        .detail-into-page::-webkit-scrollbar {
          display: none; 
        }
        .detail-into-page > * {
          width: 100%;
        }
        @media (max-width: 960px) {
          .detail-into-page {
            display: none;
          }
        }
        @media (min-width: 961px) and (max-width: 1400px) {
          .detail-into-page {
            padding: 15px;
            gap: 40px;
          }
        }
        @media (min-width: 1401px) {
          .detail-into-page {
            padding: 20px 40px 20px 20px;
          }
        }
      `}</style>
      
      <div className='detail-into-page' ref={containerRef}>
        <div ref={aboutRef}>
          <AboutContent />
        </div>
        <div ref={experiencesRef}>
          <ExperincesContent />
        </div>
        <div ref={projectRef}>
          <ProjectContent />
        </div>
      </div>
    </>
  )
}

export default DetailIntoPage
