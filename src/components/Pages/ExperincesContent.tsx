import CardExperiences from "../Molecules/cardExperiences";

function ExperincesContent() {
  return (
    <div className='experiences-content'>
      <style> 
        {`
          .experiences-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 0;
            padding-top: 20px;
          }
          .experiences-content h3 {
            font-size: 1.5em;
          }
          @media (max-width: 960px) {
            .experiences-content {
              gap: 16px;
              padding: 0;
              padding-top: 15px;
            }
            .experiences-content h3 {
              font-size: 1.3em;
            }
          }
          @media (max-width: 480px) {
            .experiences-content {
              gap: 12px;
              padding-top: 12px;
            }
            .experiences-content h3 {
              font-size: 1.1em;
            }
          }
        `}
      </style>
      <h3>EXPERIENCES</h3>
      <CardExperiences 
        position = 'Frontend Developer' 
        companyName = 'Klaviyo' 
        description = "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
        skills = {['React', 'TypeScript', 'JavaScript']} 
        startDate = '2020' endDate = '2022' 
      />
      <CardExperiences 
        position = 'Frontend Developer' 
        companyName = 'Klaviyo' 
        description = "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
        skills = {['React', 'TypeScript', 'JavaScript']} 
        startDate = '2020' endDate = '2022' 
      />
      <CardExperiences 
        position = 'Frontend Developer' 
        companyName = 'Klaviyo' 
        description = "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
        skills = {['React', 'TypeScript', 'JavaScript']} 
        startDate = '2020' endDate = '2022' 
      />
      <CardExperiences 
        position = 'Frontend Developer' 
        companyName = 'Klaviyo' 
        description = "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability." 
        skills = {['React', 'TypeScript', 'JavaScript']} 
        startDate = '2020' endDate = '2022' 
      />
    </div>
  )
}

export default ExperincesContent

