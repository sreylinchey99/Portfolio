import ImageCardProject from "../Atoms/imagecCardProject"
import CardExperiences from "../Molecules/cardExperiences"

function ProjectContent() {
  return (
    <div className='project-content'>
      <style>
        {`
          .project-content {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .cardExperiencesContainer {
            opacity: 0.8;
            padding-top: 20px;
          }
          @media (max-width: 768px) {
            .project-content {
              flex-direction: column;
            }
          }
        `}
      </style>
      <h3>PROJECTS</h3>
      <div className='cardExperiencesContainer'>
        <ImageCardProject image='https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/04/Worlds-First-AI-Generated-Art-Gallery-in-Amsterdam.jpg' />
        <CardExperiences 
          position = 'Frontend Developer' 
          description = "Blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
          skills = {['React', 'TypeScript', 'JavaScript']} 
        />
      </div>  
      <div className='cardExperiencesContainer'>
        <ImageCardProject image='https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/04/Worlds-First-AI-Generated-Art-Gallery-in-Amsterdam.jpg' />
        <CardExperiences 
          position = 'Frontend Developer' 
          description = "Blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
          skills = {['React', 'TypeScript', 'JavaScript']} 
        />
      </div>  
      <div className='cardExperiencesContainer'>
        <ImageCardProject image='https://www.tomorrowsworldtoday.com/wp-content/uploads/2023/04/Worlds-First-AI-Generated-Art-Gallery-in-Amsterdam.jpg' />
        <CardExperiences 
          position = 'Frontend Developer' 
          description = "Blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
          skills = {['React', 'TypeScript', 'JavaScript']} 
        />
      </div>  
    </div>
  )
}

export default ProjectContent

