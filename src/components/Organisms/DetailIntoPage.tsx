import AboutContent from '../Pages/AboutContent'
import ProjectContent from '../Pages/ProjectContent'
import ExperincesContent from '../Pages/ExperincesContent'

type Section = 'about' | 'project' | 'experiences' | null

interface DetailIntoPageProps {
  selectedSection: Section;
}

function DetailIntoPage({ selectedSection }: DetailIntoPageProps) {
  return (
    <>
      <style>{`
        .detail-into-page {
          flex: 1;
          width: 50%;
          border-color:rgb(150, 120, 221);
          padding: 20px;
          box-sizing: border-box;
        }
        @media (max-width: 960px) {
          .detail-into-page {
            display: none;
          }
        }
      `}</style>
      
      <div className='detail-into-page'>
        {selectedSection === 'about' && <AboutContent />}
        {selectedSection === 'project' && <ProjectContent />}
        {selectedSection === 'experiences' && <ExperincesContent />}
        {/* {selectedSection === null && <AboutContent />} */}
      </div>
    </>
  )
}

export default DetailIntoPage
