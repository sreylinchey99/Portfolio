import SectionHeader from '../Atoms/SectionHeader'
import ProjectContent from './ProjectContent'

interface ProjectProps {
  onClick?: () => void;
}

function Project({ onClick }: ProjectProps) {
  return (
    <div className='project-section'>
      <style>{`
        .project-section {
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;
        }
        .project-section-content {
          display: none;
        }
        @media (max-width: 960px) {
          .project-section-content {
            display: block;
            margin-top: 20px;
          }
        }
        @media (min-width: 961px) {
          .project-section-content {
            display: none !important;
          }
        }
      `}</style>
      <SectionHeader title="PROJECTS" onClick={onClick} />
      <div className='project-section-content'>
        <ProjectContent />
      </div>
    </div>
  )
}

export default Project