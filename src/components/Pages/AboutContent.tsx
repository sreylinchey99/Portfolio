import React from 'react'

function highlightKeywords(text: string): (string | React.ReactElement)[] {
  const keywords = [
    'Artificial Intelligence', 'Machine Learning', 'ML', 'Co-Founded', 
    "Nano Banana's", 'ABA PayWay', '76%', '70%', '1st Place', 'Top 5 Startup', 'COMEUP 2023', 'Seoul',
    'React', 'JavaScript', 'TypeScript', 'Python', 'API', 'REST',
    'Firebase', 'Flutter', 'SQL', 'Postman', 'UML', 'YOLO', 'Keras',
    'KNIME', 'Power BI', 'FastAPI', 'Tailwind', 'Cloudinary', 'Vite'
  ];
  
  keywords.sort((a, b) => b.length - a.length);
  
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let keyIndex = 0;
  
  const pattern = new RegExp(`\\b(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
  const matches = Array.from(text.matchAll(pattern));
  
  matches.forEach((match) => {
    const matchIndex = match.index!;
    const matchText = match[0];
    
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }
    
    parts.push(<strong key={keyIndex++}>{matchText}</strong>);
    lastIndex = matchIndex + matchText.length;
  });
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}

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
        .about-content p strong {
          font-weight: 700;
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
          {highlightKeywords("I'm a developer passionate about building modern, user-friendly web experiences and exploring how AI can enhance everyday applications. I've always been deeply interested in AI, and while working as a developer, I've been integrating AI technologies into my web projects to make them more interactive, intelligent, and useful.")}
        </p>
        <p>
          {highlightKeywords("Right now, I'm working on a personal project that uses Nano Banana's latest model to generate and transform images, and I'm integrating ABA PayWay payments to support users in Cambodia. Alongside this, I'm continuously developing other learning projects like e-commerce sites and practical AI-powered features to sharpen my skills and push my creativity.")}
        </p>
        <p>
          {highlightKeywords("In my free time, I enjoy playing basketball, hanging out with friends, visiting cat cafés, and going for walks or hikes.")}
        </p>
      </div>
    </>
  )
}

export default AboutContent

