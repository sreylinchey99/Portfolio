interface WorkPeriodProps {
  startDate?: string;
  endDate?: string;
}

function WorkPeriod({startDate, endDate}: WorkPeriodProps) {
  return (
    <>
        <style>{`
        .work-period {
            display: flex;
            flex-direction: row;
            gap: 10px;
            white-space: nowrap;
            min-width: fit-content;
            padding-top: 2px;
            padding-right: 3rem;
        }
        .work-period p {
            font-size: 14px;
            opacity: 0.6;
            transition: opacity 0.2s ease-in-out;
        }
        @media (max-width: 768px) {
            .work-period {
                gap: 8px;
            }
            .work-period p {
                font-size: 12px;
            }
        }
        `}</style>
        <div className='work-period'>
            <p>
                {startDate && endDate && `${startDate} - ${endDate}`}
                {startDate && !endDate && `${startDate} - Present`}
                {!startDate && endDate && `Until ${endDate}`}
            </p>
        </div>
    </>
  )
}

export default WorkPeriod