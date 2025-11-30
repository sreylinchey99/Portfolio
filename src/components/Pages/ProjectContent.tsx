import ImageCardProject from "../Atoms/imagecCardProject"
import CardExperiences from "../Molecules/cardExperiences"
import JoinUpImage from "../../assets/projects/JoinUp.png"
import ChatApplicationImage from "../../assets/projects/ChatApplication.jpg"
import PortfolioWebsiteImage from "../../assets/projects/portfolio.jpg"
import ArtifyAIImage from "../../assets/projects/ArtifyAI.jpg"

function ProjectContent() {
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
      <div className='cardExperiencesContainer'>
        <ImageCardProject image={PortfolioWebsiteImage} />
        <CardExperiences 
          position = 'Portfolio Website' 
          description = "Modern, responsive portfolio website showcasing work experience and projects. Features with a clean, minimalist design." 
          skills = {['React', 'Tailwind',  'Vite']} 
        />
      </div>  
      <div className='cardExperiencesContainer'>
        <ImageCardProject image={ArtifyAIImage} />
        <CardExperiences 
          position = 'ArtifyAI' 
          description = "Built a responsive AI-powered web application that transforms your photos into different artistic styles." 
          skills = {['React', 'FastAPI', 'Tailwind',  'Cloudinary']} 
        />
      </div>  
      <div className='cardExperiencesContainer'>
        <ImageCardProject image={JoinUpImage} />
        <CardExperiences 
          position = 'JoinUp – Social Events Management App' 
          description = "Discovering and managing social events with AI-powered natural language queries. Flask backend deployed on Render." 
          skills = {['Flutter', 'GeminiAI', 'Pickaxe', 'Flask', 'Render']} 
        />
      </div>  
      <div className='cardExperiencesContainer'>
        <ImageCardProject image={ChatApplicationImage} />
        <CardExperiences 
          position = 'Chat Application' 
          description = "Built web-based chat application with React TypeScript with Vite and Tailwind CSS. Built reusable atomic components following Atomic Design principles to ensure consistency and speed up feature delivery." 
          skills = {['React', 'Vite', 'Tailwind', 'Firebase']} 
        />
      </div>  
    </div>
  )
}

export default ProjectContent

