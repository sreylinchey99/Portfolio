function AboutContent() {
  return (
    <>
      <style>{`
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 20px;
          padding-bottom: 0;
        }
        .about-content h4 {
          font-size: 1em;
          opacity: 0.8;
        }
        .about-content h4:hover {
          opacity: 1;
        }
        .about-content p {
          margin: 0;
          line-height: 1.6;
          opacity: 0.8;
        }
        .about-content p:hover {
          opacity: 1;
        }
        @media (max-width: 960px) {
          .about-content {
            gap: 12px;
            padding-top: 15px;
          }
            .about-content h4 {
              font-size: 1.3em;
            }
          .about-content p {
            word-wrap: break-word;
            overflow-wrap: break-word;
            font-size: 0.95em;
          }
        }
        @media (max-width: 480px) {
          .about-content {
            gap: 10px;
            padding-top: 12px;
          }
          .about-content h3 {
            font-size: 1.1em;
          }
          .about-content p {
            font-size: 0.9em;
          }
        }
      `}</style>
      <h4>ABOUT</h4>
      <div className='about-content'>
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
        </p>
        <p>
          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
        </p>
        <p>
          In my spare time, I'm usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
        </p>
      </div>
    </>
  )
}

export default AboutContent

