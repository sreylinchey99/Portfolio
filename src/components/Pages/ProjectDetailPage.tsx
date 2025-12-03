import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../../data/projectsData';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="project-detail-not-found">
        <style>{`
          .project-detail-not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
            text-align: center;
          }
          .project-detail-not-found h1 {
            font-size: 2em;
            margin-bottom: 20px;
          }
          .project-detail-not-found button {
            padding: 12px 24px;
            background-color: rgba(99, 46, 46, 0.5);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.2s ease-in-out;
          }
          .project-detail-not-found button:hover {
            background-color: rgba(99, 46, 46, 0.7);
          }
        `}</style>
        <h1>Project not found</h1>
        <button onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .project-detail-container {
          min-height: 100vh;
          padding: 60px 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background-color: rgba(99, 46, 46, 0.3);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1em;
          margin-bottom: 40px;
          transition: background-color 0.2s ease-in-out;
        }
        .back-button:hover {
          background-color: rgba(99, 46, 46, 0.5);
        }
        .project-detail-title {
          font-size: 3em;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }
        .skill-tag {
          padding: 8px 16px;
          background-color: rgba(120, 221, 154, 0.2);
          border-radius: 20px;
          font-size: 0.9em;
          opacity: 0.9;
        }
        .project-links {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background-color: rgba(99, 46, 46, 0.3);
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
        }
        .project-link:hover {
          background-color: rgba(99, 46, 46, 0.5);
          transform: translateY(-2px);
        }
        .project-section {
          margin-bottom: 50px;
        }
        .project-section h2 {
          font-size: 1.5em;
          margin-bottom: 20px;
          opacity: 0.9;
          font-weight: 600;
        }
        .project-section p {
          line-height: 1.8;
          opacity: 0.8;
          font-size: 1.05em;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .feature-list li {
          padding: 12px 0 12px 28px;
          position: relative;
          line-height: 1.6;
          opacity: 0.8;
          font-size: 1.05em;
        }
        .feature-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: rgba(120, 221, 154, 0.8);
          font-weight: bold;
          font-size: 1.2em;
        }
        .project-images {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }
        .project-image {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .screenshots-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        .screenshot-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .additional-images-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        .additional-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .additional-image-full {
          width: 100%;
          grid-column: 1 / -1;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .project-end {
          text-align: center;
          padding: 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 60px;
        }
        .project-end p {
          opacity: 0.6;
          font-size: 0.95em;
        }
        .video-container {
          width: 100%;
          margin-bottom: 50px;
        }
        .video-container h2 {
          font-size: 1.5em;
          margin-bottom: 20px;
          opacity: 0.9;
          font-weight: 600;
        }
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        @media (max-width: 960px) {
          .project-detail-container {
            padding: 40px 15px;
          }
          .project-detail-title {
            font-size: 2.2em;
          }
          .project-section h2 {
            font-size: 1.3em;
          }
          .video-container h2 {
            font-size: 1.3em;
          }
          .project-images {
            gap: 20px;
          }
          .screenshots-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .screenshot-image {
            height: 300px;
          }
          .additional-images-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .additional-image {
            height: 250px;
          }
          .additional-image-full {
            height: 300px;
          }
        }
        @media (max-width: 480px) {
          .project-detail-container {
            padding: 30px 10px;
          }
          .project-detail-title {
            font-size: 1.8em;
          }
          .project-section h2 {
            font-size: 1.2em;
          }
          .video-container h2 {
            font-size: 1.2em;
          }
          .project-section p, .feature-list li {
            font-size: 1em;
          }
          .back-button {
            padding: 8px 16px;
            font-size: 0.9em;
          }
          .screenshots-grid {
            grid-template-columns: 1fr;
          }
          .screenshot-image {
            height: 250px;
          }
          .additional-images-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .additional-image {
            height: 200px;
          }
          .additional-image-full {
            height: 250px;
          }
        }
      `}</style>
      
      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>
        
        <h1 className="project-detail-title">{project.title}</h1>
        
        <div className="skills-container">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="project-links">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <FaExternalLinkAlt /> View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            )}
          </div>
        )}

        {/* Video Demo */}
        {project.videoUrl && (
          <div className="video-container">
            <h2>Video Demo</h2>
            <div className="video-wrapper">
              <iframe 
                src={project.videoUrl.replace('/view?usp=sharing', '/preview')}
                allow="autoplay"
                allowFullScreen
                title={`${project.title} Demo Video`}
              />
            </div>
          </div>
        )}

        {/* Project Description */}
        <div className="project-section">
          {/* <h2>Project Description</h2> */}
          <p>{project.fullDescription}</p>
        </div>

        {/* Project Main Features */}
        {project.features && project.features.length > 0 && (
          <div className="project-section">
            <h2>Main Features</h2>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Pictures */}
        <div className="project-section">
          <h2>Project Preview</h2>
          
          {/* Screenshots - displayed in 2 columns */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="screenshots-grid">
              {project.screenshots.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="screenshot-image"
                />
              ))}
            </div>
          )}

          {/* Additional Images - displayed in grid */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="additional-images-grid">
              {project.additionalImages.map((img, index) => {
                const isLast = index === project.additionalImages!.length - 1;
                const isVoltaFootwear = project.id === 'volta-footwear';
                return (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${project.title} image ${index + 1}`} 
                    className={isLast && isVoltaFootwear ? "additional-image-full" : "additional-image"}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* End of Project */}
        <div className="project-end">
          <p>Thank you for viewing this project</p>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPage;

