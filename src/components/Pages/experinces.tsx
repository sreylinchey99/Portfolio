import SectionHeader from '../Atoms/SectionHeader'
import ExperincesContent from './ExperincesContent'

interface ExperincesProps {
  onClick?: () => void;
}

function Experinces({ onClick }: ExperincesProps) {
  return (
    <div className='experinces-section'>
      <style>{`
        .experinces-section {
          display: flex;
          flex-direction: column;
        }
        .experinces-section-content {
          display: none;
        }
        @media (max-width: 960px) {
          .experinces-section-content {
            display: block;
            margin-top: 20px;
          }
        }
        @media (min-width: 961px) {
          .experinces-section-content {
            display: none !important;
          }
        }
      `}</style>
      <SectionHeader title="EXPERIENCES" onClick={onClick} />
      <div className='experinces-section-content'>
        <ExperincesContent />
      </div>
    </div>
  )
}

export default Experinces