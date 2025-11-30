import { useState } from 'react'
import DetailIntoPage from './components/Organisms/DetailIntoPage'
import IntroductionPage from './components/Organisms/IntroductionPage'
import './App.css'
import Spotlight from './components/Atoms/spotLight'


type Section = 'about' | 'project' | 'experiences' | null


function App() {
  const [selectedSection, setSelectedSection] = useState<Section>('about')

  return (
    <>
      <style>{`
        .container {
          padding: 30px;
        }
      `}</style>
      <div className='container'>
        <Spotlight />
        <IntroductionPage onSectionClick={setSelectedSection} />
        <DetailIntoPage selectedSection={selectedSection} />
      </div>
    </>
  )
}

export default App