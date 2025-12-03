import { useState } from 'react'
import DetailIntoPage from '../Organisms/DetailIntoPage'
import IntroductionPage from '../Organisms/IntroductionPage'

type Section = 'about' | 'project' | 'experiences' | null

interface SectionRefs {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  experiencesRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
}

function HomePage() {
  const [selectedSection, setSelectedSection] = useState<Section>(null)
  const [sectionRefs, setSectionRefs] = useState<SectionRefs | null>(null)

  const scrollToAbout = () => {
    setSelectedSection('about')
    sectionRefs?.aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExperiences = () => {
    setSelectedSection('experiences')
    sectionRefs?.experiencesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProject = () => {
    setSelectedSection('project')
    sectionRefs?.projectRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .container {
          display: flex;
          padding: 30px;
          height: calc(100vh - 60px);
          overflow: hidden;
          gap: 20px;
          margin-left: 10rem;
          margin-right: 10rem;
          max-width: calc(100% - 20rem);
        }
        @media (max-width: 1600px) {
          .container {
            margin-left: 6rem;
            margin-right: 6rem;
            max-width: calc(100% - 12rem);
          }
        }
        @media (max-width: 1400px) {
          .container {
            padding: 20px;
            gap: 15px;
            margin-left: 4rem;
            margin-right: 4rem;
            max-width: calc(100% - 8rem);
          }
        }
        @media (max-width: 1200px) {
          .container {
            margin-left: 2rem;
            margin-right: 2rem;
            max-width: calc(100% - 4rem);
          }
        }
        @media (max-width: 960px) {
          .container {
            flex-direction: column;
            padding: 15px;
            height: auto;
            min-height: 100vh;
            overflow: visible;
            gap: 0;
            margin-left: 0;
            margin-right: 0;
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 10px;
          }
        }
      `}</style>
      <div className='container'>
        {/* <Spotlight /> */}
        <IntroductionPage 
          onSectionClick={setSelectedSection}
          selectedSection={selectedSection}
          scrollToAbout={scrollToAbout}
          scrollToExperiences={scrollToExperiences}
          scrollToProject={scrollToProject}
        />
        <DetailIntoPage 
          selectedSection={selectedSection}
          onRefsReady={setSectionRefs}
          onSectionChange={setSelectedSection}
        />
      </div>
    </>
  )
}

export default HomePage

