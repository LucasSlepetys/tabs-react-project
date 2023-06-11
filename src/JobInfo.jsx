import { FaBeer } from 'react-icons/fa';

function JobInfo({ title, company, dates, duties }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h4>{company}</h4>
        <h5>{dates}</h5>
      </div>
      <div>
        {duties.map((duty, index) => {
          return (
            <div key={index}>
              <FaBeer />
              <span>{duty}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobInfo;
