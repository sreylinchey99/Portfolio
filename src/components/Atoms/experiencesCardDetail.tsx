import Skills from './skillsCardContainer'

interface ExperiencesCardDetailPros{
    position: string;
    companyName?: string;
    description: string;
    skills: string[];
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
                .experiences-card-detail-content > p {
                    font-size: 14px;
                    opacity: 0.6;
                    transition: opacity 0.2s ease-in-out;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
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
                    .experiences-card-detail-content > p {
                        font-size: 13px;
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
                    .experiences-card-detail-content > p {
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
                .cardExperiencesContainer:hover .experiences-card-detail-content > p {
                    opacity: 1;
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
                    <p>{description}</p>
                    <Skills skills={skills} />
                </div>
            </div>
        </>
    )
}

export default ExperiencesCardDetail