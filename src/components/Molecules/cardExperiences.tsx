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