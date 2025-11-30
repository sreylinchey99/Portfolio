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
                }
                .experiences-card-detail h3 {
                    font-size: 18px;
                }
                .experiences-card-detail h4 {
                    font-size: 16px;
                }
                .experiences-card-detail p {
                    font-size: 14px;
                }
                .position-company {
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .experiences-card-detail {
                        gap: 8px;
                    }
                    .experiences-card-detail h3 {
                        font-size: 16px;
                    }
                    .experiences-card-detail h4 {
                        font-size: 14px;
                    }
                    .experiences-card-detail p {
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
                    .experiences-card-detail p {
                        font-size: 12px;
                    }
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