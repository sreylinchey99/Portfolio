import { useNavigate } from 'react-router-dom'
import ImageCardProject from "../Atoms/imagecCardProject"
import CardExperiences from "../Molecules/cardExperiences"
import ArtifyAIImage from "../../assets/projects/ArtifyAI.png"
import MiniAIBotImage from "../../assets/GeminiBot/image_2025-12-03_14-37-58.png"
import VoltaFootwearImage from "../../assets/E_Commerce/image_2025-12-03_19-03-29.png"

function ProjectContent() {
  const navigate = useNavigate()

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <div className='project-content'>
      <style>
        {`
          .project-content {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-top: 0;
          }
          .project-content h3 {
            font-size: 1em;
            opacity: 0.8;
          }
          .project-content h3:hover {
            opacity: 1;
          }
          .cardExperiencesContainer {
            opacity: 0.8;
            padding-top: 20px;
            cursor: pointer;
            transition: opacity 0.2s ease-in-out;
          }
          .cardExperiencesContainer:hover {
            opacity: 1;
          }
          @media (max-width: 960px) {
            .project-content {
              gap: 12px;
            }
            .project-content h3 {
              font-size: 1.3em;
            }
            .cardExperiencesContainer {
              padding-top: 15px;
            }
          }
          @media (max-width: 480px) {
            .project-content {
              gap: 10px;
            }
            .project-content h3 {
              font-size: 1.1em;
            }
            .cardExperiencesContainer {
              padding-top: 12px;
            }
          }
        `}
      </style>
      <h4>PROJECTS</h4>
 
      <div className='cardExperiencesContainer' onClick={() => handleProjectClick('artify-ai')}>
        <ImageCardProject image={ArtifyAIImage} />
        <CardExperiences 
          position = 'ArtifyAI' 
          description = "Built a responsive AI-powered web application that transforms your photos into different artistic styles." 
          skills = {['React', 'FastAPI', 'Tailwind',  'Cloudinary']} 
        />
      </div>  
      <div className='cardExperiencesContainer' onClick={() => handleProjectClick('gemini-bot')}>
        <ImageCardProject image={MiniAIBotImage} />
        <CardExperiences 
          position = 'AI Chat Application' 
          description = "A modern, feature AI chatbot application built with React and FastAPI, powered by Google's Gemini AI. Experience seamless conversations with an intelligent AI assistant through a beautiful, animated user interface." 
          skills = {['React', 'FastAPI', 'Google Gemini AI']} 
        />
      </div>  
      <div className='cardExperiencesContainer' onClick={() => handleProjectClick('volta-footwear')}>
        <ImageCardProject image={VoltaFootwearImage} />
        <CardExperiences 
          position = 'Volta Footwear - E-Commerce Website' 
          description = "A modern, minimalist e-commerce website for Volta Footwear, featuring a clean design aesthetic and smooth user experience. Built with React and TypeScript." 
          skills = {['React', 'TypeScript', 'Tailwind CSS', 'React Router']} 
        />
      </div>  
     
    </div>
  )
}

export default ProjectContent

