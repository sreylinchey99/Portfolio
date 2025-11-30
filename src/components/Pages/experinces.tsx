import SectionHeader from '../Atoms/SectionHeader'
import ExperincesContent from './ExperincesContent'

interface ExperincesProps {
  onScrollClick?: () => void;
}

function Experinces({ onScrollClick }: ExperincesProps) {
  return (
    <div className='experinces-section'>
      <style>{`
        .experinces-section {
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;
        }
        .experinces-section-content {
          display: none;
        }
        @media (max-width: 960px) {
          .experinces-section {
            padding-bottom: 30px;
          }
          .experinces-section-content {
            display: block;
            margin-top: 20px;
          }
        }
        @media (max-width: 480px) {
          .experinces-section {
            padding-bottom: 20px;
          }
          .experinces-section-content {
            margin-top: 15px;
          }
        }
        @media (min-width: 961px) {
          .experinces-section-content {
            display: none !important;
          }
        }
      `}</style>
      <SectionHeader title="EXPERIENCES" onClick={onScrollClick} />
      <div className='experinces-section-content'>
        <ExperincesContent />
      </div>
    </div>
  )
}

export default Experinces