import React from 'react'
import Skills from './skillsCardContainer'

interface ExperiencesCardDetailPros{
    position: string;
    companyName?: string;
    description: string;
    skills: string[];
}

function highlightKeywords(text: string, keywords: string[]): (string | React.ReactElement)[] {
    const commonTerms = ['Gemini', '76', '70', 'Elbow Method', 'Silhouette Score', '1st Place', 'Top 5 Startup', 'COMEUP 2023', 'Seoul', 'API', 'ETL', 'QA', 'UML', 'REST', 'UI', 'UX', 'AI', 'ML', 'YOLO', 'Keras', 'Python', 'SQL', 'Flutter', 'Firebase', 'Postman', 'KNIME', 'Power BI', 'FastAPI', 'Tailwind', 'Cloudinary', 'Vite', "Co-Founded"];
    const allKeywords = [...keywords, ...commonTerms].filter((v, i, a) => a.indexOf(v) === i);
    
    allKeywords.sort((a, b) => b.length - a.length);
    
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let keyIndex = 0;
    
    const pattern = new RegExp(`\\b(${allKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
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

function ExperiencesCardDetail({position, companyName, description, skills}: ExperiencesCardDetailPros) {
    return (
        <>
            <style>{`
                * {
                    margin: 0px;
                    padding: 0px;
                    line-height: 2;
                }
                .experiences-card-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                    max-width: 100%;
                    box-sizing: border-box;
                    min-width: 0;
                    flex: 1;
                    overflow: hidden;
                }
                .experiences-card-detail-content {
                    width: 100%;
                    max-width: 100%;
                    box-sizing: border-box;
                    min-width: 0;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                }
                .experiences-card-detail h3 {
                    font-size: 18px;
                }
                .experiences-card-detail h4 {
                    font-size: 16px;
                }
                .description-container {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .description-container > p {
                    font-size: 14px;
                    opacity: 0.6;
                    transition: opacity 0.2s ease-in-out;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    white-space: normal;
                    margin: 0;
                }
                .description-container > p strong {
                    font-weight: 700;
                    opacity: 1;
                }
                .experiences-card-detail-content > p {
                    font-size: 14px;
                    opacity: 0.6;
                    transition: opacity 0.2s ease-in-out;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    white-space: normal;
                }
                .position-company {
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                @media (max-width: 960px) {
                    .experiences-card-detail {
                        gap: 8px;
                        width: 100%;
                    }
                }
                @media (max-width: 768px) {
                    .experiences-card-detail {
                        gap: 8px;
                        width: 100%;
                    }
                    .experiences-card-detail h3 {
                        font-size: 16px;
                    }
                    .experiences-card-detail h4 {
                        font-size: 14px;
                    }
                    .experiences-card-detail-content > p,
                    .description-container > p {
                        font-size: 13px;
                        white-space: normal;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                    }
                    .position-company {
                        gap: 6px;
                    }
                }
                @media (max-width: 480px) {
                    .experiences-card-detail h3 {
                        font-size: 14px;
                    }
                    .experiences-card-detail h4 {
                        font-size: 13px;
                    }
                    .experiences-card-detail-content > p,
                    .description-container > p {
                        font-size: 12px;
                    }
                }
                .position-company h4{
                   font-size: 17px;
                   transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
                }
                .position-company p:not(:first-of-type) {
                   transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
                }
                .cardExperiencesContainer:hover .position-company h4,
                .cardExperiencesContainer:hover .position-company p:not(:first-of-type){
                    opacity: 1;
                    color: rgb(209, 24, 24);
                }
                .cardExperiencesContainer:hover .position-company h4{
                    font-weight: 700;
                }
                .cardExperiencesContainer:hover .experiences-card-detail-content > p,
                .cardExperiencesContainer:hover .description-container > p {
                    opacity: 1;
                }
                .cardExperiencesContainer:hover .description-container > p strong {
                    opacity: 1;
                    font-weight: 700;
                }
            `}</style>
            <div className='experiences-card-detail'>
                <div className='experiences-card-detail-content'>
                    <div className= 'position-company'>
                        <h4>{position}</h4>
                        {companyName && (
                            <>
                                <p>,</p>
                                <p>{companyName}</p>
                            </>
                        )}
                    </div> 
                    <div className="description-container">
                        {description.split(' - ').map((item, index) => {
                            const trimmed = item.trim();
                            if (!trimmed) return null;
                            // Add bullet point prefix and highlight keywords
                            const highlightedText = highlightKeywords(trimmed, skills);
                            return <p key={index}>• {highlightedText}</p>;
                        })}
                    </div>
                    <Skills skills={skills} />
                </div>
            </div>
        </>
    )
}

export default ExperiencesCardDetail