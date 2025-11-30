import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import About from '../Pages/about'
import Project from '../Pages/project'
import Experinces from '../Pages/experinces'

type Section = 'about' | 'project' | 'experiences' | null

interface IntroductionPageProps {
  onSectionClick: (section: Section) => void;
  scrollToAbout: () => void;
  scrollToExperiences: () => void;
  scrollToProject: () => void;
}

function IntroductionPage({ onSectionClick: _onSectionClick, scrollToAbout, scrollToExperiences, scrollToProject }: IntroductionPageProps) {
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
          border-color: #78dd9a;
          padding: 20px;
          box-sizing: border-box;
          height: 100%;
          overflow: hidden;
          position: relative;
          margin-left: 18rem;
          z-index: 1000;
        }
        @media (max-width: 1200px) {
          .introduction-page {
            margin-left: 12rem;
          }
        }
        @media (max-width: 960px) {
          .introduction-page {
            width: 100%;
            padding: 15px;
            margin-left: 0;
            height: auto;
            overflow: visible;
          }
        }
        @media (max-width: 480px) {
          .introduction-page {
            padding: 10px;
          }
        }
        .TopInto {
          display: flex;
          flex-direction: column;
        }
        .TopInto h1 {
          margin: 0 0 8px 0;
          line-height: 1.2;
          font-size: 3.2em;
        }
        .TopInto h3 {
          margin: 0 0 8px 0;
          line-height: 1.2;
          font-size: 1.5em;
        }
        .TopInto p {
          margin: 0;
          line-height: 1.4;
          font-size: 1em;
        }
        @media (max-width: 960px) {
          .TopInto h1 {
            font-size: 2.5em;
          }
          .TopInto h3 {
            font-size: 1.3em;
          }
          .TopInto p {
            font-size: 0.95em;
          }
        }
        @media (max-width: 480px) {
          .TopInto h1 {
            font-size: 2em;
          }
          .TopInto h3 {
            font-size: 1.1em;
          }
          .TopInto p {
            font-size: 0.9em;
          }
        }
        .ContactInfo{
          display: flex;
          flex-direction: row;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: flex-end;
          z-index: 1000;
          bottom: 10px;
          position: absolute;
          padding-bottom: 10rem;
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
        @media (max-width: 960px) {
          .ContactInfo {
            position: relative;
            bottom: auto;
            padding-bottom: 20px;
            justify-content: flex-start;
            margin-top: 20px;
          }
          .ContactInfo a {
            scale: 1.2;
            padding: 10px;
          }
        }
        @media (max-width: 480px) {
          .ContactInfo {
            gap: 15px;
            padding-bottom: 15px;
          }
          .ContactInfo a {
            scale: 1.1;
            padding: 8px;
          }
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
        @media (max-width: 960px) {
          .detail-into-page-container {
            padding: 30px 0px 0px 0px;
            gap: 15px;
          }
        }
        @media (max-width: 480px) {
          .detail-into-page-container {
            padding: 20px 0px 0px 0px;
            gap: 12px;
          }
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
          <About onScrollClick={scrollToAbout} />
          <Experinces onScrollClick={scrollToExperiences} />
          <Project onScrollClick={scrollToProject} />
        </div>
      </div>
    </>
  )
}

export default IntroductionPage