import WorkPeriod from "../Atoms/workPeriod";
import ExperiencesCardDetail from "../Atoms/experiencesCardDetail";

interface CardExperiencesProps {
    position: string;
    companyName?: string;
    description: string;
    skills: string[];
    startDate?: string;
    endDate?: string;
}


function CardExperiences({position, companyName, description, skills, startDate, endDate}: CardExperiencesProps){
    return (
        <>
            <style>
                {
                    `
                        .cardExperiencesContainer {
                            display: flex;
                            flex-direction: row;
                            gap: 20px;
                            width: 100%;
                            max-width: 100%;
                            box-sizing: border-box;
                            padding: 15px 15px;
                            border-radius: 8px;
                            transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                        }
                        .cardExperiencesContainer:hover {   
                            background-color: rgba(99, 46, 46, 0.3);
                            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                        }
                        .cardExperiencesContainer:hover .image-card-project {
                            opacity: 1;
                        }
                        .cardExperiencesContainer:hover .work-period p {
                            opacity: 1;
                        }
                        @media (max-width: 768px) {
                            .cardExperiencesContainer {
                                flex-direction: column;
                                gap: 12px;
                            }
                        }
                    `
                }
            </style>

            <div className = 'cardExperiencesContainer'>
                {(startDate || endDate) && <WorkPeriod startDate = {startDate} endDate = {endDate} />}
                <ExperiencesCardDetail position = {position} companyName = {companyName} description = {description} skills = {skills} />
            </div>
        </>
    )
}

export default CardExperiences