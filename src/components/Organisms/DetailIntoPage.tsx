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
}

function DetailIntoPage({ selectedSection: _selectedSection, onRefsReady }: DetailIntoPageProps) {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onRefsReady) {
      onRefsReady({ aboutRef, experiencesRef, projectRef })
    }
  }, [onRefsReady])

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
        }
        .detail-into-page > * {
          width: 100%;
        }
        @media (max-width: 960px) {
          .detail-into-page {
            display: none;
          }
        }
        @media (min-width: 961px) and (max-width: 1200px) {
          .detail-into-page {
            padding: 15px;
            gap: 40px;
          }
        }
      `}</style>
      
      <div className='detail-into-page'>
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
