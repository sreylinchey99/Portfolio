interface SectionHeaderProps {
  title: string;
  onClick?: () => void;
}

function SectionHeader({ title, onClick }: SectionHeaderProps) {
  return (
    <>
      <style>{`
        .section-header {
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          cursor: pointer;
        }
        .section-header hr {
          width: 15%;
          height: 2px;
          border: none;
          opacity: 0.5;
          background-color: rgb(250, 250, 250);
          margin: 0;
          padding: 0;
          transition: width 0.2s ease-in-out, opacity 0.2s ease-in-out;
        }
        .section-header p {  
          margin: 0;
          line-height: 1;
          opacity: 0.5;
          transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        .section-header:hover hr,
        .section-header:active hr {
          width: 25%;
          opacity: 1;
          background-color: rgb(250, 250, 250);
        }
        .section-header:hover p,
        .section-header:active p {
          opacity: 1;
          color: rgb(250, 250, 250);
        }
      `}</style>
      <div className='section-header' onClick={onClick}>
        <hr />
        <p>{title}</p>
      </div>
    </>
  );
}

export default SectionHeader;

