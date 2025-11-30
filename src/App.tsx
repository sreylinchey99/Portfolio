import { useState } from 'react'
import DetailIntoPage from './components/Organisms/DetailIntoPage'
import IntroductionPage from './components/Organisms/IntroductionPage'
import './App.css'
import Spotlight from './components/Atoms/spotLight'


type Section = 'about' | 'project' | 'experiences' | null

interface SectionRefs {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  experiencesRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
}

function App() {
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
        }
        @media (max-width: 960px) {
          .container {
            flex-direction: column;
            padding: 15px;
            height: auto;
            min-height: 100vh;
            overflow: visible;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 10px;
          }
        }
      `}</style>
      <div className='container'>
        <Spotlight />
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

export default App