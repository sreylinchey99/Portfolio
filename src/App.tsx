import { useState } from 'react'
import DetailIntoPage from './components/Organisms/DetailIntoPage'
import IntroductionPage from './components/Organisms/IntroductionPage'
import './App.css'

type Section = 'about' | 'project' | 'experiences' | null

function App() {
  const [selectedSection, setSelectedSection] = useState<Section>('about')

  return (
    <>
      <div className='container'>
        <IntroductionPage onSectionClick={setSelectedSection} />
        <DetailIntoPage selectedSection={selectedSection} />
      </div>
    </>
  )
}

export default App