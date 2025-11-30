import SectionHeader from '../Atoms/SectionHeader'
import AboutContent from './AboutContent'

interface AboutProps {
  onClick?: () => void;
}

function About({ onClick }: AboutProps) {
  return (
    <div className='about-section'>
      <style>{`
        .about-section {
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;
          padding-top: 70px;
        }
        .about-section-content {
          display: none;
        }
        @media (max-width: 960px) {
          .about-section-content {
            display: block;
            margin-top: 20px;
          }
        }
        @media (min-width: 961px) {
          .about-section-content {
            display: none !important;
          }
        }
      `}</style>
      <SectionHeader title="ABOUT" onClick={onClick} />
      <div className='about-section-content'>
        <AboutContent />
      </div>
    </div>
  )
}

export default About