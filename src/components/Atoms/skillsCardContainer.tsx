interface SkillsProps {
    skills: string[];
}
function Skills({skills}: SkillsProps) {
    return (
        <>
            <style>{`
                .skills-wrapper {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    flex-wrap: wrap;
                    width: 100%;
                    max-width: 100%;
                    padding-top: 15px;
                    padding-bottom: 10px;
                }
                .skills-container {
                    background-color: rgba(129, 11, 11, 0.3);
                    border-radius: 20px;
                    padding: 8px 12px;
                    box-sizing: border-box;
                }
                .skills-container p {
                    color: rgb(158, 20, 20);
                    font-size: 13px;
                    margin: 0;
                    font-weight: 700;
                    white-space: nowrap;
                    transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
                }
                .cardExperiencesContainer:hover .skills-container p {
                    opacity: 1;
                    color: rgb(209, 24, 24);
                }
                @media (max-width: 768px) {
                    .skills-wrapper {
                        gap: 8px;
                    }
                    .skills-container {
                        padding: 6px 10px;
                    }
                    .skills-container p {
                        font-size: 12px;
                    }
                }
                @media (max-width: 480px) {
                    .skills-wrapper {
                        gap: 6px;
                    }
                    .skills-container {
                        padding: 5px 8px;
                        border-radius: 15px;
                    }
                    .skills-container p {
                        font-size: 11px;
                    }
                }
            `}</style>
            <div className='skills-wrapper'>
                {skills.map((skill) => (
                    <div key={skill} className='skills-container'>
                        <p>{skill}</p>
                    </div>
                ))}
            </div>
        </>
    )   
}

export default Skills