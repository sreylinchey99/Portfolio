interface SectionHeaderProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

function SectionHeader({ title, onClick, isActive = false }: SectionHeaderProps) {
  return (
    <>
      <style>{`
        .section-header {
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
          cursor: pointer;
        }
        .section-header hr {
          width: 8%;
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
          line-height: 1.2;
          opacity: 0.5;
          font-size: 0.9em;
          // padding-bottom: 25px;
          transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        .section-header.active hr {
          width: 13%;
          opacity: 1;
          background-color: rgb(250, 250, 250);
        }
        .section-header.active p {
          opacity: 1;
          color: rgb(250, 250, 250);
        }
        .section-header:hover hr {
          width: 13%;
          opacity: 1;
          background-color: rgb(250, 250, 250);
        }
        .section-header:hover p {
          opacity: 1;
          color: rgb(250, 250, 250);
        }
        @media (max-width: 960px) {
          .section-header {
            display: none;
          }
        }
      `}</style>
      <div className={`section-header ${isActive ? 'active' : ''}`} onClick={onClick}>
        <hr />
        <p>{title}</p>
      </div>
    </>
  );
}

export default SectionHeader;

