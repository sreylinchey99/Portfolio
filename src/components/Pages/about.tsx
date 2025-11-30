import SectionHeader from '../Atoms/SectionHeader'
import AboutContent from './AboutContent'

interface AboutProps {
  onScrollClick?: () => void;
  isActive?: boolean;
}

function About({ onScrollClick, isActive = false }: AboutProps) {
  return (
    <div className='about-section'>
      <style>{`
        .about-section {
          display: flex;
          flex-direction: column;
          padding-bottom: 20px;
          padding-top: 70px;
        }
        .about-section-content {
          display: none;
        }
        @media (max-width: 960px) {
          .about-section {
            padding-top: 40px;
            padding-bottom: 30px;
          }
          .about-section-content {
            display: block;
            margin-top: 20px;
          }
        }
        @media (max-width: 480px) {
          .about-section {
            padding-top: 30px;
            padding-bottom: 20px;
          }
          .about-section-content {
            margin-top: 15px;
          }
        }
        @media (min-width: 961px) {
          .about-section-content {
            display: none !important;
          }
        }
      `}</style>
      <SectionHeader 
        title="ABOUT" 
        onClick={onScrollClick}
        isActive={isActive}
      />
      <div className='about-section-content'>
        <AboutContent />
      </div>
    </div>
  )
}

export default About