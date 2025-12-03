import CardExperiences from "../Molecules/cardExperiences";

function ExperincesContent() {
  return (
    <div className='experiences-content'>
      <style> 
        {`
          .experiences-content {
            display: flex;
            flex-direction: column;
            // gap: 20px;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 0;
            padding-top: 20px;
          }
          .experiences-content h4 {
            font-size: 1em;
            opacity: 0.8;
          }
          .experiences-content h4:hover {
            opacity: 1;
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
      <h4>EXPERIENCES</h4>
      <CardExperiences 
        position = 'Software Business Analyst' 
        companyName = 'AMK Microfinance Institute' 
        description = "Collaborated with cross-functional teams to elicit, analyze, and document business requirements, ensuring solutions aligned with organizational goals. - Created and maintained UML diagrams (use case, sequence, activity) and executed API testing with Postman to validate integration and functionality." 
        skills = {['UML', 'Postman', 'API Testing', 'Business Analysis']} 
        startDate = 'Jan 2025' endDate = 'July 2025' 
      />
      <CardExperiences 
        position = 'Co-Founder & AI Engineer' 
        companyName = 'OptimusVC' 
        description = "Co-Founded and led an AI-focused startup developing real-time Khmer and Japanese license plate recognition systems using YOLO+Keras. - Achieved 76% accuracy (Khmer) and 70% (Japanese) through iterative model refinement and QA testing. - Won 1st Place at Bandos Tech Startup Competition with a $10,000 innovation grant. - Selected as a Top 5 Startup at COMEUP 2023 in Seoul, showcasing AI solutions on an international stage." 
        skills = {['YOLO', 'Keras', 'Python', 'AI/ML', 'Computer Vision']} 
        startDate = 'Apr 2022' endDate = 'Sep 2024' 
      />
      <CardExperiences 
        position = 'Data Science Intern' 
        companyName = 'Amret Microfinance' 
        description = "Performed ETL operations and ensured data consistency across large datasets. - Conducted exploratory analysis and clustering using Python, SQL, and KNIME, evaluated models using Elbow Method and Silhouette Score. - Created interactive Power BI dashboards to communicate data insights to business units." 
        skills = {['Python', 'SQL', 'KNIME', 'Power BI', 'Data Analysis']} 
        startDate = 'Feb 2024' endDate = 'Aug 2024' 
      />
      <CardExperiences 
        position = 'Flutter Developer' 
        companyName = 'Kirirom Institute of Technology' 
        description = "Developed a mobile app integrating the institute's book management API and Firebase backend for real-time digital library access. - Built responsive and user-friendly UI using Flutter, following modern design principles." 
        skills = {['Flutter', 'Firebase', 'REST API', 'Mobile Development']} 
        startDate = 'Sep 2022' endDate = 'Sep 2022' 
      />
    </div>
  )
}

export default ExperincesContent

