import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import About from '../Pages/about'
import Project from '../Pages/project'
import Experinces from '../Pages/experinces'
import { useState } from 'react'

type Section = 'about' | 'project' | 'experiences' | null

interface IntroductionPageProps {
  onSectionClick: (section: Section) => void;
  selectedSection: Section;
  scrollToAbout: () => void;
  scrollToExperiences: () => void;
  scrollToProject: () => void;
}

function IntroductionPage({ onSectionClick: _onSectionClick, selectedSection, scrollToAbout, scrollToExperiences, scrollToProject }: IntroductionPageProps) {
  const [hover, setHover] = useState(false);
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
          padding-top: 5rem;
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
          padding-bottom: 5rem;
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
          gap: 10px;
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
          <h2 style={{paddingTop: '10px'}}>Frontend Developer</h2>
          <p>I build accessible, pixel-perfect digital experiences for the web.</p>
          <div className='ContactInfo'>
            <a href='https://github.com/sreylinchey99' style={{transition: 'opacity 0.2s ease-in-out', opacity:hover?1:0.5}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><FaGithub /></a>
            <a href='https://www.linkedin.com/in/sreylinchey/' style={{transition: 'opacity 0.2s ease-in-out', opacity:hover?1:0.5}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><FaLinkedin /></a>
            <a href='mailto:sreylinchey@gmail.com' style={{transition: 'opacity 0.2s ease-in-out', opacity:hover?1:0.5}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><FaEnvelope /></a>
            <a href='https://wa.me/85515706665' target='_blank' rel='noopener noreferrer' style={{transition: 'opacity 0.2s ease-in-out', opacity:hover?1:0.5}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><FaWhatsapp /></a>
            
          </div>
        </div>

        <div className='detail-into-page-container'>
          <About onScrollClick={scrollToAbout} isActive={selectedSection === 'about'} />
          <Experinces onScrollClick={scrollToExperiences} isActive={selectedSection === 'experiences'} />
          <Project onScrollClick={scrollToProject} isActive={selectedSection === 'project'} />
        </div>
      </div>
    </>
  )
}

export default IntroductionPage