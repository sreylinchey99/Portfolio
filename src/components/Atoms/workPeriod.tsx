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
            padding-top: 2px;
            flex-shrink: 0;
            max-width: fit-content;
        }
        .work-period p {
            font-size: 14px;
            opacity: 0.6;
            transition: opacity 0.2s ease-in-out;
            word-break: keep-all;
        }
        @media (max-width: 960px) {
            .work-period {
                padding-bottom: 8px;
                width: 100%;
                max-width: 100%;
            }
        }
        @media (max-width: 768px) {
            .work-period {
                gap: 8px;
                padding-right: 0;
                padding-bottom: 6px;
            }
            .work-period p {
                font-size: 12px;
            }
        }
        @media (max-width: 480px) {
            .work-period {
                gap: 6px;
                padding-bottom: 4px;
            }
            .work-period p {
                font-size: 11px;
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