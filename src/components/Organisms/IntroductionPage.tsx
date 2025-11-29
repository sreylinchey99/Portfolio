import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import About from '../Pages/about'
import Project from '../Pages/project'
import Experinces from '../Pages/experinces'

type Section = 'about' | 'project' | 'experiences' | null

interface IntroductionPageProps {
  onSectionClick: (section: Section) => void;
}

function IntroductionPage({ onSectionClick }: IntroductionPageProps) {
  return (
    <>
      <style>{`
        * {
          text-align: left;
          vertical-align: top;
        }
        .introduction-page {
          flex: 1;
          width: 50%;
          /* background-color: #5a1b1b; */
          /* border-radius: 10px; */
          border-color: #78dd9a;
          padding: 20px;
          box-sizing: border-box;
        }
        @media (max-width: 960px) {
          .introduction-page {
            width: 100%;
            padding: 15px;
          }
        }
        .TopInto {
          display: flex;
          flex-direction: column;
        }
        .TopInto h1 {
          margin: 0 0 8px 0;
          line-height: 1.2;
        }
        .TopInto h3 {
          margin: 0 0 8px 0;
          line-height: 1.2;
        }
        .TopInto p {
          margin: 0;
          line-height: 1.4;
        }
        .ContactInfo{
          display: flex;
          flex-direction: row;
          gap: 20px;
          flex-wrap: wrap;
        }
        .ContactInfo a {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: inherit;
          opacity: 0.7;
          scale: 1.5;
          padding:30px 10px 10px 5px;
        } 
        .ContactInfo a:hover {
          opacity: 1;
        }
        .detail-into-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding:50px 0px 0px 0px;
        }

      `}</style>
      <div className='introduction-page'>
        <div className='TopInto'>
          <h1>Sreylin Chey</h1>
          <h3>Frontend Developer</h3>
          <p>I build accessible, pixel-perfect digital experiences for the web.</p>
          <div className='ContactInfo'>
            <a href='mailto:sreylinchey@gmail.com'><FaEnvelope /></a>
            <a href='tel:+855 15706665'><FaPhone /></a>
            <a href='https://www.linkedin.com/in/sreylinchey/'><FaLinkedin /></a>
            <a href='https://github.com/sreylinchey99'><FaGithub /></a>
          </div>
        </div>

        <div className='detail-into-page-container'>
          <About onClick={() => onSectionClick('about')} />
          <Project onClick={() => onSectionClick('project')} />
          <Experinces onClick={() => onSectionClick('experiences')} />
        </div>
      </div>
    </>
  )
}

export default IntroductionPage